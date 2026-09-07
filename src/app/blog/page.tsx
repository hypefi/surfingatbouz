import type { Metadata } from 'next';
import Link from 'next/link';
import PostCard from '@/components/blog/PostCard';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import JsonLd from '@/components/JsonLd';
import { getAllPosts, BLOG_CATEGORIES, CATEGORY_LABELS } from '@/lib/blog';
import { absoluteUrl, pageMetadata, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Surf Journal — Lessons, Spots & Board Craft in Morocco',
  description:
    'Guides to learning to surf in Bouznika, local Atlantic spots, surfboard repair, shaping, and surf stays on the Rabat–Casablanca coast.',
  path: '/blog',
});

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Surf Journal | ${SITE_NAME}`,
    url: absoluteUrl('/blog'),
    description:
      'Articles on learning to surf, Morocco surf spots, board repair, and shaping in Bouznika.',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={collectionLd} />
      <Breadcrumbs items={[{ href: '/', label: 'Home' }, { label: 'Blog' }]} />
      <header className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-5xl font-display text-primary mb-4">
          Surf journal
        </h1>
        <p className="text-lg text-neutral/80">
          Long-tail guides from Bouznika: learning to surf, reading the Atlantic
          coast between Rabat and Casablanca, and keeping your board alive in the
          ding shop.
        </p>
      </header>

      <div className="flex flex-wrap gap-2 mb-10">
        {BLOG_CATEGORIES.map((category) => (
          <Link
            key={category}
            href={`/blog/category/${category}`}
            className="px-4 py-2 rounded-full bg-card border border-gray-200 text-sm font-medium text-primary hover:border-secondary hover:text-secondary transition-colors"
          >
            {CATEGORY_LABELS[category]}
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <p className="text-neutral/70">
          New articles are on the way. Check back soon, or{' '}
          <Link href="/contact" className="text-accent hover:text-secondary">
            message Mehdi
          </Link>{' '}
          if you have a surf question in the meantime.
        </p>
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
