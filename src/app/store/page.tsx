import type { Metadata } from 'next';
import ProductCard from '@/components/store/ProductCard';
import JsonLd from '@/components/JsonLd';
import { getAllProducts } from '@/lib/products';
import { absoluteUrl, pageMetadata, SITE_NAME } from '@/lib/site';

export const metadata: Metadata = pageMetadata({
  title: 'Surf Store — Board Hangers, Wetsuit Bags & Accessories',
  description:
    'Shop surf accessories from Surfing at Bouz’ in Bouznika: light-wood surfboard hangers and 2-in-1 wetsuit changing mat dry bags. Order on WhatsApp.',
  path: '/store',
  image: '/images/accessories/prepared/surfboard-hanger-hero.jpg',
});

export default function StorePage() {
  const products = getAllProducts();

  const collectionLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Surf Store | ${SITE_NAME}`,
    url: absoluteUrl('/store'),
    description: 'Surf accessories available from Surfing at Bouz’ in Bouznika, Morocco.',
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <JsonLd data={collectionLd} />
      <header className="max-w-3xl mb-12">
        <p className="text-secondary font-medium mb-2">Surf store</p>
        <h1 className="text-3xl md:text-5xl font-display text-primary mb-4">
          Gear for the quiver and the car park
        </h1>
        <p className="text-lg text-neutral/80">
          Accessories we actually use around Bouznika — starting with a freestanding
          board hanger and a wetsuit changing mat that doubles as a dry bag. Boards
          and more kit coming soon. Order on WhatsApp for pickup or delivery.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <aside className="mt-16 bg-sandy rounded-2xl p-8 text-center max-w-5xl">
        <h2 className="font-display text-2xl text-primary mb-3">Need something else?</h2>
        <p className="text-neutral/80 mb-2 max-w-2xl mx-auto">
          Looking for a board, fins, or a repair before your next session? Message Mehdi —
          the shop and the ding bay are in the same place.
        </p>
      </aside>
    </div>
  );
}
