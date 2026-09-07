import Link from 'next/link';
import { categoryLabel, type BlogPost } from '@/lib/blog';

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="text-2xl md:text-3xl font-display text-primary mb-6">
        Keep reading
      </h2>
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
            <h3 className="font-display text-lg text-primary mb-2">{post.title}</h3>
            <p className="text-sm text-neutral/80 line-clamp-3">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
