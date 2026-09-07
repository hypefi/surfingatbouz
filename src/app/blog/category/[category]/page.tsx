import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PostCard from '@/components/blog/PostCard';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import {
  BLOG_CATEGORIES,
  CATEGORY_DESCRIPTIONS,
  CATEGORY_LABELS,
  getPostsByCategory,
  isBlogCategory,
  type BlogCategory,
} from '@/lib/blog';
import { pageMetadata } from '@/lib/site';

type Params = { category: string };

export function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!isBlogCategory(category)) return {};

  return pageMetadata({
    title: `${CATEGORY_LABELS[category]} — Surf Journal`,
    description: CATEGORY_DESCRIPTIONS[category],
    path: `/blog/category/${category}`,
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  if (!isBlogCategory(category)) notFound();

  const typed = category as BlogCategory;
  const posts = getPostsByCategory(typed);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
          { label: CATEGORY_LABELS[typed] },
        ]}
      />
      <header className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-5xl font-display text-primary mb-4">
          {CATEGORY_LABELS[typed]}
        </h1>
        <p className="text-lg text-neutral/80">{CATEGORY_DESCRIPTIONS[typed]}</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-neutral/70">No articles in this category yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
