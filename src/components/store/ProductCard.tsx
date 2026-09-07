import Link from 'next/link';
import Image from 'next/image';
import { formatPrice, type StoreProduct } from '@/lib/products';

export default function ProductCard({ product }: { product: StoreProduct }) {
  const hero = product.images[0];

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-surf border border-gray-200 flex flex-col transform transition-transform hover:scale-[1.02]">
      <Link href={`/store/${product.slug}`} className="block">
        <div className="relative aspect-square bg-white border-b border-gray-100">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-secondary font-medium mb-1 capitalize">{product.category}</p>
        <Link href={`/store/${product.slug}`}>
          <h2 className="font-display text-2xl text-primary mb-2 leading-snug">{product.shortName}</h2>
        </Link>
        <p className="text-neutral/80 text-sm mb-4 flex-1">{product.tagline}</p>
        <div className="flex items-center justify-between gap-3">
          <p className="text-xl font-bold text-neutral">{formatPrice(product)}</p>
          <Link
            href={`/store/${product.slug}`}
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-2 px-5 rounded-full text-sm transition-all"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
