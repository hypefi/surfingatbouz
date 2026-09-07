import fs from 'fs';
import path from 'path';
import { config as loadEnv } from 'dotenv';
import Anthropic from '@anthropic-ai/sdk';
import matter from 'gray-matter';
import {
  CATEGORY_IMAGES,
  CONTENT_DIR,
  getAllPosts,
  type BlogCategory,
  type KeywordEntry,
  type KeywordQueue,
} from '../src/lib/blog';
import { AUTHOR, BUSINESS, SERVICE_PAGES, SITE_NAME } from '../src/lib/site';

loadEnv({ path: path.resolve(process.cwd(), '.env.local'), quiet: true });
loadEnv({ quiet: true });

const KEYWORDS_PATH = path.join(CONTENT_DIR, 'keywords.json');
const MIN_WORDS = 1200;
const DEFAULT_MODEL = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-5';

interface GeneratedDraft {
  title: string;
  description: string;
  slug: string;
  relatedSlugs: string[];
  faq: { question: string; answer: string }[];
  body: string;
}

function parseCount(): number {
  const eq = process.argv.find((arg) => arg.startsWith('--count='));
  if (eq) return Math.max(1, Number(eq.split('=')[1]) || 1);
  const idx = process.argv.indexOf('--count');
  if (idx !== -1) return Math.max(1, Number(process.argv[idx + 1]) || 1);
  return 1;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function isoDate(offsetDays = 0): string {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() - offsetDays);
  return date.toISOString().slice(0, 10);
}

function loadQueue(): KeywordQueue {
  const raw = fs.readFileSync(KEYWORDS_PATH, 'utf8');
  return JSON.parse(raw) as KeywordQueue;
}

function saveQueue(queue: KeywordQueue) {
  fs.writeFileSync(KEYWORDS_PATH, `${JSON.stringify(queue, null, 2)}\n`);
}

function uniqueSlug(base: string, existing: Set<string>): string {
  if (!existing.has(base)) return base;
  let i = 2;
  while (existing.has(`${base}-${i}`)) i += 1;
  return `${base}-${i}`;
}

function extractJson(text: string): GeneratedDraft {
  const trimmed = text.trim();
  const fence = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fence ? fence[1] : trimmed;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1) {
    throw new Error('Model response did not contain a JSON object');
  }
  const parsed = JSON.parse(candidate.slice(start, end + 1)) as GeneratedDraft;
  return parsed;
}

function countInternalLinks(body: string): number {
  const matches = body.match(/\]\((\/(?:blog|surf-coach|board-repair|surf-guiding|contact|about|gallery)[^)]*)\)/g);
  return matches?.length ?? 0;
}

function countHeadings(body: string): number {
  return (body.match(/^##\s+/gm) ?? []).length;
}

function validateDraft(draft: GeneratedDraft): string[] {
  const errors: string[] = [];
  if (!draft.title || draft.title.length < 20) errors.push('title too short');
  if (!draft.description || draft.description.length < 80) errors.push('description too short');
  if (!draft.body) errors.push('missing body');
  const words = wordCount(draft.body ?? '');
  if (words < MIN_WORDS) errors.push(`body has ${words} words (need ${MIN_WORDS}+)`);
  if (countHeadings(draft.body ?? '') < 3) errors.push('need at least 3 H2 headings');
  if (countInternalLinks(draft.body ?? '') < 2) errors.push('need at least 2 internal markdown links');
  if (!Array.isArray(draft.faq) || draft.faq.length < 3) errors.push('need at least 3 FAQ items');
  return errors;
}

function businessBrief(): string {
  return `
Brand: ${SITE_NAME} by ${AUTHOR.name}
Place: Bouznika, Morocco — sandy Atlantic beach between Rabat and Casablanca
Voice: first-person plural ("we") as the local school; practical, warm, specific. Not corporate, not travel-blog cliché.
Author byline: ${AUTHOR.name} — local surf coach, guide, and board repairer (10+ years, 500+ students).
Lessons: taught with ${BUSINESS.lessonProvider}. Private beginner ${BUSINESS.prices.privateLesson}. Group ${BUSINESS.prices.groupLesson}. Board + wetsuit included. ${BUSINESS.prices.wetsuitDiscount}.
Guiding / villa: oceanfront villa, beach access. Weekend ${BUSINESS.prices.weekendStay}. Week ${BUSINESS.prices.weekStay} (popular). Equipment and guided sessions included.
Repair: small ding ${BUSINESS.prices.smallDing}; moderate ${BUSINESS.prices.moderateDing}; pressure ding ${BUSINESS.prices.pressureDing}; fin box ${BUSINESS.prices.finBox}; leash plug ${BUSINESS.prices.leashPlug}; delam ${BUSINESS.prices.delam}. ${BUSINESS.prices.dingBulkDiscount}. Custom painting and full restoration. Instagram repair diary @bloc.operatoire.
Booking: WhatsApp ${BUSINESS.telephoneDisplay} or the site contact page. No invented calendar/availability.
School Instagram: @surfing_at_bouz
Do not invent awards, wave-height tables, fake reviews, or prices that are not listed above.
Bouznika is generally a beach break, often more beginner-friendly than heavier reef setups in Taghazout. Summer is typically smaller and cleaner for first lessons; winter is punchier. Speak in ranges and local experience, not fake swell reports.
`.trim();
}

function buildPrompt(keyword: KeywordEntry, existing: { slug: string; title: string; category: string }[], retryNote?: string): string {
  const postList =
    existing.length === 0
      ? '(none yet — still link to service pages)'
      : existing.map((post) => `- [${post.title}](/blog/${post.slug}) [${post.category}]`).join('\n');

  const services = SERVICE_PAGES.map((page) => `- [${page.title}](${page.path}) — ${page.description}`).join('\n');

  return `Write one original, thorough SEO article for ${SITE_NAME}.

Primary long-tail keyword (use naturally in the title, first paragraph, one H2, and a few times in the body — never stuff):
"${keyword.phrase}"

Category: ${keyword.category}
Search intent: ${keyword.intent}
Preferred service CTA path: ${keyword.servicePath}

${businessBrief()}

Existing articles you MAY link to (prefer 1–2 of these plus 1–2 service pages):
${postList}

Service / about pages:
${services}

Requirements:
- 1,500–2,500 words of useful local expertise.
- Markdown body only (no H1 — the page template already renders the title).
- Use H2 and H3. At least four H2 sections.
- Include a short "How we do it in Bouznika" or equivalent local section.
- Include 2–4 markdown internal links with descriptive anchor text, e.g. [beginner surf lessons in Bouznika](/surf-coach).
- Do not link to URLs that are not in the lists above.
- Do not mention that you are an AI or that this is SEO content.
- English, accessible to traveling beginners and Moroccan locals.

Return ONLY a JSON object (no markdown fences) with this shape:
{
  "title": "Human, specific title including the topic (not keyword-stuffed)",
  "description": "Meta description, 140–160 characters, includes the place or offer",
  "slug": "kebab-case-slug",
  "relatedSlugs": ["existing-slug-if-any"],
  "faq": [
    { "question": "...", "answer": "2–4 sentence answer" },
    { "question": "...", "answer": "..." },
    { "question": "...", "answer": "..." },
    { "question": "...", "answer": "..." }
  ],
  "body": "markdown article starting with a paragraph, then ## headings..."
}

relatedSlugs must only use slugs from the existing articles list (or []).
faq answers should be self-contained (they also become FAQ schema).
${retryNote ? `\nThe previous draft failed quality checks: ${retryNote}. Fix those issues.` : ''}
`;
}

async function generateDraft(
  client: Anthropic,
  keyword: KeywordEntry,
  existing: { slug: string; title: string; category: string }[],
  retryNote?: string,
): Promise<GeneratedDraft> {
  const response = await client.messages.create({
    model: DEFAULT_MODEL,
    max_tokens: 16000,
    temperature: 0.7,
    messages: [{ role: 'user', content: buildPrompt(keyword, existing, retryNote) }],
  });

  const text = response.content
    .map((block) => (block.type === 'text' ? block.text : ''))
    .join('\n')
    .trim();

  if (!text) throw new Error('Empty model response');
  return extractJson(text);
}

function writePost(keyword: KeywordEntry, draft: GeneratedDraft, date: string, slug: string) {
  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const file = matter.stringify(draft.body.trim(), {
    title: draft.title.trim(),
    description: draft.description.trim(),
    slug,
    date,
    category: keyword.category as BlogCategory,
    keyword: keyword.phrase,
    author: AUTHOR.name,
    relatedSlugs: draft.relatedSlugs ?? [],
    servicePath: keyword.servicePath,
    image: CATEGORY_IMAGES[keyword.category],
    faq: draft.faq,
  });

  fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.md`), file);
}

async function generateOne(
  client: Anthropic,
  queue: KeywordQueue,
  dateOffset: number,
): Promise<string | null> {
  const keyword = queue.keywords.find((item) => item.status === 'pending');
  if (!keyword) {
    console.log('No pending keywords left in the queue.');
    return null;
  }

  const existingPosts = getAllPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    category: post.category,
  }));
  const existingSlugs = new Set(existingPosts.map((post) => post.slug));

  console.log(`Generating: ${keyword.phrase}`);

  let draft = await generateDraft(client, keyword, existingPosts);
  let errors = validateDraft(draft);
  if (errors.length > 0) {
    console.warn(`Quality check failed (${errors.join('; ')}). Retrying once…`);
    draft = await generateDraft(client, keyword, existingPosts, errors.join('; '));
    errors = validateDraft(draft);
    if (errors.length > 0) {
      throw new Error(`Draft still failed quality checks: ${errors.join('; ')}`);
    }
  }

  const validRelated = (draft.relatedSlugs ?? []).filter((slug) => existingSlugs.has(slug));
  draft.relatedSlugs = validRelated;

  const slug = uniqueSlug(slugify(draft.slug || draft.title), existingSlugs);
  writePost(keyword, draft, isoDate(dateOffset), slug);

  keyword.status = 'published';
  keyword.publishedSlug = slug;
  saveQueue(queue);

  console.log(`Wrote content/blog/${slug}.md (${wordCount(draft.body)} words)`);
  return slug;
}

async function main() {
  const count = parseCount();
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('Missing ANTHROPIC_API_KEY. Add it to .env.local or the environment.');
    process.exit(1);
  }

  const client = new Anthropic({ apiKey });
  const queue = loadQueue();
  const created: string[] = [];

  for (let i = 0; i < count; i += 1) {
    const remaining = count - i - 1;
    const slug = await generateOne(client, queue, remaining);
    if (!slug) break;
    created.push(slug);
  }

  if (created.length === 0) {
    console.log('No new posts generated.');
    return;
  }

  console.log(`Generated ${created.length} post(s): ${created.join(', ')}`);
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
