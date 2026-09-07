export const BLOG_CATEGORIES = [
  'learn-to-surf',
  'morocco-surf-spots',
  'board-repair',
  'board-shaping',
  'surf-trips',
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'learn-to-surf': 'Learn to Surf',
  'morocco-surf-spots': 'Morocco Surf Spots',
  'board-repair': 'Board Repair',
  'board-shaping': 'Board Shaping & Restoration',
  'surf-trips': 'Surf Trips & Hosting',
};

export const CATEGORY_IMAGES: Record<BlogCategory, string> = {
  'learn-to-surf': '/images/surf-lesson-1.jpg',
  'morocco-surf-spots': '/images/blog/blog-coastal-beach.jpg',
  'board-repair': '/images/blog/blog-vintage-boards.jpg',
  'board-shaping': '/images/blog/blog-workshop-craft.jpg',
  'surf-trips': '/images/blog/blog-oceanfront-stay.jpg',
};

export const CATEGORY_DESCRIPTIONS: Record<BlogCategory, string> = {
  'learn-to-surf':
    'Practical guides for first waves, lessons, and progressing as a beginner on the Moroccan Atlantic.',
  'morocco-surf-spots':
    'Local knowledge of Bouznika and the Rabat–Casablanca coast — where to paddle out and what to expect.',
  'board-repair':
    'How to spot damage, when to fix a ding, and what professional repair looks like in Bouznika.',
  'board-shaping':
    'Restoration, glassing, painting, and the craft behind keeping a surfboard alive in Morocco.',
  'surf-trips':
    'Villa stays, weekend getaways, and how to plan a surf week in Bouznika.',
};

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  keyword: string;
  author: string;
  relatedSlugs: string[];
  servicePath: string;
  faq: FaqItem[];
  image: string;
  content: string;
}

export interface KeywordEntry {
  id: string;
  phrase: string;
  category: BlogCategory;
  servicePath: string;
  intent: 'informational' | 'commercial';
  status: 'pending' | 'published';
  publishedSlug?: string;
}

export interface KeywordQueue {
  keywords: KeywordEntry[];
}

export function isBlogCategory(value: string): value is BlogCategory {
  return (BLOG_CATEGORIES as readonly string[]).includes(value);
}

export function categoryLabel(category: string): string {
  if (isBlogCategory(category)) return CATEGORY_LABELS[category];
  return category;
}
