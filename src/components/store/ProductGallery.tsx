'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { StoreProduct } from '@/lib/products';

export default function ProductGallery({ product }: { product: StoreProduct }) {
  const [active, setActive] = useState(0);
  const current = product.images[active] ?? product.images[0];

  return (
    <div>
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-surf">
        <Image
          src={current.src}
          alt={current.alt}
          fill
          className="object-contain p-4"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      {product.images.length > 1 ? (
        <div className="mt-4 flex gap-3">
          {product.images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActive(index)}
              className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 bg-white transition-all ${
                index === active ? 'border-secondary shadow-md' : 'border-gray-200 hover:border-secondary/50'
              }`}
              aria-label={`View image ${index + 1}`}
            >
              <Image src={image.src} alt="" fill className="object-contain p-1" sizes="80px" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
