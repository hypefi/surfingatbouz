import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {
  BLOG_CATEGORIES,
  CATEGORY_IMAGES,
  isBlogCategory,
  type BlogCategory,
  type BlogPost,
  type FaqItem,
} from './blog-types';

export * from './blog-types';

export const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function toIsoDate(value: unknown): string {
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  const str = String(value ?? '');
  const match = str.match(/\d{4}-\d{2}-\d{2}/);
  if (match) return match[0];
  const parsed = new Date(str);
  if (!Number.isNaN(parsed.getTime())) return parsed.toISOString().slice(0, 10);
  return '2026-01-01';
}

function excerptFrom(content: string, max = 160): string {
  const text = content
    .replace(/[#>*_`\[\]]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max).replace(/\s+\S*$/, '')}…`;
}

function parseFaq(raw: unknown): FaqItem[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item) => {
      if (!item || typeof item !== 'object') return null;
      const q = 'question' in item ? String(item.question ?? '') : '';
      const a = 'answer' in item ? String(item.answer ?? '') : '';
      if (!q || !a) return null;
      return { question: q, answer: a };
    })
    .filter((item): item is FaqItem => item !== null);
}

function parsePost(filename: string): BlogPost | null {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  const slug = String(data.slug ?? filename.replace(/\.md$/, ''));
  const title = String(data.title ?? '');
  const description = String(data.description ?? excerptFrom(content));
  const categoryRaw = String(data.category ?? 'learn-to-surf');
  const category: BlogCategory = isBlogCategory(categoryRaw)
    ? categoryRaw
    : 'learn-to-surf';

  if (!title) return null;

  const relatedSlugs = Array.isArray(data.relatedSlugs)
    ? data.relatedSlugs.map((item: unknown) => String(item))
    : [];

  return {
    slug,
    title,
    description,
    date: toIsoDate(data.date),
    category,
    keyword: String(data.keyword ?? ''),
    author: String(data.author ?? 'Mehdi Assiry'),
    relatedSlugs,
    servicePath: String(data.servicePath ?? '/contact'),
    faq: parseFaq(data.faq),
    image: String(data.image ?? CATEGORY_IMAGES[category]),
    content: content.trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md'))
    .map(parsePost)
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getAllCategories(): BlogCategory[] {
  const used = new Set(getAllPosts().map((post) => post.category));
  return BLOG_CATEGORIES.filter((category) => used.has(category));
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((item) => item.slug !== post.slug);
  const picked: BlogPost[] = [];

  for (const slug of post.relatedSlugs) {
    const match = all.find((item) => item.slug === slug);
    if (match && !picked.some((item) => item.slug === match.slug)) {
      picked.push(match);
    }
    if (picked.length >= limit) return picked;
  }

  const sameCategory = all.filter((item) => item.category === post.category);
  for (const item of sameCategory) {
    if (!picked.some((existing) => existing.slug === item.slug)) {
      picked.push(item);
    }
    if (picked.length >= limit) return picked;
  }

  for (const item of all) {
    if (!picked.some((existing) => existing.slug === item.slug)) {
      picked.push(item);
    }
    if (picked.length >= limit) break;
  }

  return picked;
}

export function getPostsForService(servicePath?: string, limit = 3): BlogPost[] {
  const all = getAllPosts();
  if (!servicePath) return all.slice(0, limit);

  const matched = all.filter((post) => post.servicePath === servicePath);
  if (matched.length >= limit) return matched.slice(0, limit);

  const rest = all.filter((post) => post.servicePath !== servicePath);
  return [...matched, ...rest].slice(0, limit);
}

export function getPostExcerpt(post: BlogPost, max = 160): string {
  return excerptFrom(post.description || post.content, max);
}
