import type { MetadataRoute } from 'next';
import { getAllPosts, getAllCategories } from '@/lib/blog';
import { getAllProducts } from '@/lib/products';
import { SITE_URL, STATIC_ROUTES } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((path) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    lastModified: now,
    changeFrequency: path === '/blog' || path === '/store' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/blog' || path === '/store' ? 0.8 : 0.7,
  }));

  const productEntries: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: `${SITE_URL}/store/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const categoryEntries: MetadataRoute.Sitemap = getAllCategories().map((category) => ({
    url: `${SITE_URL}/blog/category/${category}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.5,
  }));

  return [...staticEntries, ...productEntries, ...categoryEntries, ...postEntries];
}
