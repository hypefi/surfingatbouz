import JsonLd from '@/components/JsonLd';
import { absoluteUrl, AUTHOR, BUSINESS, SITE_NAME } from '@/lib/site';
import type { BlogPost } from '@/lib/blog';
import { categoryLabel } from '@/lib/blog';

export default function ArticleJsonLd({ post }: { post: BlogPost }) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  const image = absoluteUrl(post.image);

  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(BUSINESS.logo),
      },
    },
    image,
    mainEntityOfPage: url,
    keywords: post.keyword,
    articleSection: categoryLabel(post.category),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl('/blog') },
      {
        '@type': 'ListItem',
        position: 3,
        name: categoryLabel(post.category),
        item: absoluteUrl(`/blog/category/${post.category}`),
      },
      { '@type': 'ListItem', position: 4, name: post.title, item: url },
    ],
  };

  const faq =
    post.faq.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <JsonLd data={blogPosting} />
      <JsonLd data={breadcrumb} />
      {faq ? <JsonLd data={faq} /> : null}
    </>
  );
}
