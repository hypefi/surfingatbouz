import Link from 'next/link';
import Image from 'next/image';
import { categoryLabel, getPostExcerpt, type BlogPost } from '@/lib/blog';

export default function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="bg-card rounded-2xl overflow-hidden shadow-surf border border-gray-200 transform transition-transform hover:scale-[1.02]">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 text-sm text-secondary mb-2">
            <span className="font-medium">{categoryLabel(post.category)}</span>
            <span className="text-neutral/40">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </time>
          </div>
          <h2 className="font-display text-xl text-primary mb-2 leading-snug">
            {post.title}
          </h2>
          <p className="text-neutral/80 text-sm">{getPostExcerpt(post)}</p>
        </div>
      </Link>
    </article>
  );
}
