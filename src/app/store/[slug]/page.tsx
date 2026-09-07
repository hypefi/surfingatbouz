import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/store/ProductGallery';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/blog/Breadcrumbs';
import {
  formatPrice,
  getAllProducts,
  getProductBySlug,
  productWhatsAppUrl,
} from '@/lib/products';
import { absoluteUrl, BUSINESS, pageMetadata, SITE_NAME } from '@/lib/site';

type Params = { slug: string };

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return pageMetadata({
    title: product.name,
    description: product.description.slice(0, 155),
    path: `/store/${product.slug}`,
    image: product.images[0]?.src,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const priceLabel = formatPrice(product);
  const whatsapp = productWhatsAppUrl(product);

  const productLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images.map((image) => absoluteUrl(image.src)),
    brand: { '@type': 'Brand', name: SITE_NAME },
    category: product.category,
    offers: {
      '@type': 'Offer',
      url: absoluteUrl(`/store/${product.slug}`),
      priceCurrency: 'MAD',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: { '@type': 'Organization', name: SITE_NAME },
      ...(product.priceDh != null ? { price: product.priceDh } : {}),
    },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={productLd} />
      <Breadcrumbs
        items={[
          { href: '/', label: 'Home' },
          { href: '/store', label: 'Store' },
          { label: product.shortName },
        ]}
      />

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <ProductGallery product={product} />

        <div>
          <p className="text-secondary font-medium mb-2 capitalize">{product.category}</p>
          <h1 className="text-3xl md:text-4xl font-display text-primary mb-3 leading-tight">
            {product.name}
          </h1>
          <p className="text-lg text-neutral/80 mb-6">{product.tagline}</p>

          <p className="text-3xl font-bold text-neutral mb-2">{priceLabel}</p>
          <p className="text-sm text-neutral/60 mb-8">
            {product.inStock ? 'Available — order on WhatsApp' : 'Currently unavailable'}
            {' · '}Pickup in Bouznika or ask about delivery
          </p>

          <p className="text-neutral/80 mb-8 leading-relaxed">{product.description}</p>

          <ul className="space-y-3 mb-8">
            {product.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-neutral/90">
                <span className="text-secondary shrink-0 mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full text-center transition-all shadow-md"
            >
              Order on WhatsApp
            </a>
            <Link
              href="/store"
              className="border-2 border-primary/20 text-primary hover:border-secondary hover:text-secondary font-bold py-3 px-8 rounded-full text-center transition-all"
            >
              Back to store
            </Link>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-gray-200">
            <h2 className="font-display text-xl text-primary mb-3">Details</h2>
            <ul className="space-y-2 text-sm text-neutral/80">
              {product.details.map((detail) => (
                <li key={detail}>• {detail}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-neutral/60">
              Questions? Call or WhatsApp{' '}
              <a href={BUSINESS.whatsappUrl} className="text-accent hover:text-secondary">
                {BUSINESS.telephoneDisplay}
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {product.images.length > 1 ? (
        <section className="mt-16">
          <h2 className="font-display text-2xl text-primary mb-6">More angles</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">
            {product.images.map((image) => (
              <div
                key={image.src}
                className="relative aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-surf"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-6"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
