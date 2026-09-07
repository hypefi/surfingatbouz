import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MarkdownBody from '@/components/blog/MarkdownBody';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ArticleJsonLd from '@/components/blog/ArticleJsonLd';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import CategoryCta from '@/components/blog/CategoryCta';
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  categoryLabel,
} from '@/lib/blog';
import { pageMetadata } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return pageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: 'article',
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <article className="container mx-auto px-4 py-8">
      <ArticleJsonLd post={post} />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/blog', label: 'Blog' },
          { href: `/blog/category/${post.category}`, label: categoryLabel(post.category) },
          { label: post.title },
        ]}
      />

      <header className="max-w-3xl mx-auto mb-8">
        <p className="text-secondary font-medium mb-3">
          <Link href={`/blog/category/${post.category}`}>
            {categoryLabel(post.category)}
          </Link>
        </p>
        <h1 className="text-3xl md:text-5xl font-display text-primary mb-4 leading-tight">
          {post.title}
        </h1>
        <p className="text-lg text-neutral/80 mb-4">{post.description}</p>
        <p className="text-sm text-neutral/60">
          By {post.author} ·{' '}
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </p>
      </header>

      <div className="relative max-w-4xl mx-auto h-64 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-surf">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 896px) 100vw, 896px"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <MarkdownBody content={post.content} />

        {post.faq.length > 0 ? (
          <section className="mt-12">
            <h2 className="text-2xl font-display text-primary mb-6">
              Frequently asked questions
            </h2>
            <dl className="space-y-6">
              {post.faq.map((item) => (
                <div key={item.question} className="bg-card rounded-2xl p-6 border border-gray-200">
                  <dt className="font-display text-lg text-primary mb-2">{item.question}</dt>
                  <dd className="text-neutral/80">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <aside className="mt-12 flex items-start gap-4 bg-card rounded-2xl p-6 border border-gray-200">
          <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden">
            <Image
              src="/images/mehdisurf.jpeg"
              alt="Mehdi Assiry"
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div>
            <p className="font-display text-lg text-primary">Mehdi Assiry</p>
            <p className="text-sm text-neutral/80">
              Local surf coach, guide, and board repairer in Bouznika. Lessons with{' '}
              <Link href="/surf-coach" className="text-accent hover:text-secondary">
                Association Bouznika SurfSchool
              </Link>
              , stays at the{' '}
              <Link href="/surf-guiding" className="text-accent hover:text-secondary">
                oceanfront villa
              </Link>
              , and ding work in the{' '}
              <Link href="/board-repair" className="text-accent hover:text-secondary">
                repair shop
              </Link>
              .
            </p>
          </div>
        </aside>

        <CategoryCta servicePath={post.servicePath} />
        <RelatedPosts posts={related} />
      </div>
    </article>
  );
}
