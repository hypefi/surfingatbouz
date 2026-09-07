import Link from 'next/link';
import { getPostsForService } from '@/lib/blog';
import { categoryLabel } from '@/lib/blog';

export default function JournalTeasers({
  servicePath,
  title = 'From the journal',
  limit = 3,
}: {
  servicePath?: string;
  title?: string;
  limit?: number;
}) {
  const posts = getPostsForService(servicePath, limit);
  if (posts.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex items-end justify-between gap-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-display text-primary">
          <span className="inline-block border-b-4 border-secondary pb-2">{title}</span>
        </h2>
        <Link href="/blog" className="text-accent hover:text-secondary font-medium">
          All articles →
        </Link>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 hover:shadow-lg transition-shadow block"
          >
            <p className="text-sm text-secondary font-medium mb-2">
              {categoryLabel(post.category)}
            </p>
            <h3 className="font-display text-xl text-primary mb-2">{post.title}</h3>
            <p className="text-sm text-neutral/80 line-clamp-3">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
