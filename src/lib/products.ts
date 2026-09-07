import { BUSINESS } from '@/lib/site';

export type ProductCategory = 'accessories' | 'boards';

export interface StoreProduct {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  /** Set to null to show “Price on request” until you confirm numbers */
  priceDh: number | null;
  currency: 'dh';
  images: { src: string; alt: string }[];
  features: string[];
  details: string[];
  inStock: boolean;
  whatsappMessage: string;
}

export const PRODUCTS: StoreProduct[] = [
  {
    slug: 'surfboard-hanger',
    name: 'Bamboo Surfboard Hanger — 3 Boards',
    shortName: 'Surfboard Hanger',
    tagline: 'Vertical quiver storage with cork protection and a base drawer',
    description:
      'A freestanding bamboo-style surfboard rack made for home or villa storage. Three padded slots keep boards upright and protected, side hooks hold a leash or damp wetsuit, and the base drawer stashes wax, fins, and tools. Clean enough for a living room, strong enough for a daily quiver in Bouznika.',
    category: 'accessories',
    priceDh: null,
    currency: 'dh',
    images: [
      {
        src: '/images/accessories/prepared/surfboard-hanger-hero.jpg',
        alt: 'Bamboo freestanding surfboard hanger for three boards on a white background',
      },
      {
        src: '/images/accessories/prepared/surfboard-hanger-drawer.jpg',
        alt: 'Surfboard hanger base drawer open with fins and wax storage',
      },
    ],
    features: [
      'Holds 3 boards upright with cork-lined contact points',
      'Side hooks for leashes, towels, or a drying wetsuit',
      'Base cork mat protects board tails',
      'Shallow drawer for wax, fins, and small tools',
      'Freestanding — no wall drilling required',
    ],
    details: [
      'Designed for indoor use (home, villa, or shop)',
      'Natural light wood finish with visible grain',
      'Safety cord across the top arms to keep boards secure',
      'Pickup in Bouznika or arrange delivery when you order',
    ],
    inStock: true,
    whatsappMessage:
      "Hi! I'm interested in the Bamboo Surfboard Hanger (3 boards) from the Surfing at Bouz' store. Can you confirm availability, price, and pickup/delivery?",
  },
  {
    slug: 'wetsuit-bag',
    name: 'Wetsuit Changing Mat & Dry Bag',
    shortName: 'Wetsuit Bag',
    tagline: '2-in-1 beach mat that cinches into a waterproof wet-gear bag',
    description:
      'Change out of a sandy wetsuit without wrecking the car or the villa floor. Lay it flat as a circular changing mat, then pull the red drawstring and it becomes a sealed dry bag for your wet suit. Tough charcoal shell, wipe-clean teal waterproof lining — built for Atlantic sessions in Morocco.',
    category: 'accessories',
    priceDh: null,
    currency: 'dh',
    images: [
      {
        src: '/images/accessories/prepared/wetsuit-bag-open.jpg',
        alt: 'Circular wetsuit changing mat open flat showing teal waterproof lining and red drawstring',
      },
      {
        src: '/images/accessories/prepared/wetsuit-bag-closed.jpg',
        alt: 'Wetsuit changing mat cinched closed into a compact dry bag',
      },
    ],
    features: [
      'Opens flat as a sand-free changing mat',
      'Cinches into a waterproof dry bag for wet gear',
      'Durable charcoal exterior for beach use',
      'Teal waterproof interior that wipes clean',
      'Bright red drawcord — easy to grab with sandy hands',
    ],
    details: [
      'Ideal after sessions in Bouznika, Rabat, or Casablanca beach parks',
      'Packs small when empty',
      'Not a life-safety dry bag for valuables — made for wetsuits and wet kit',
      'Pickup in Bouznika or arrange delivery when you order',
    ],
    inStock: true,
    whatsappMessage:
      "Hi! I'd like to order the Wetsuit Changing Mat & Dry Bag from the Surfing at Bouz' store. Can you confirm availability, price, and pickup/delivery?",
  },
];

export function getAllProducts(): StoreProduct[] {
  return PRODUCTS;
}

export function getProductBySlug(slug: string): StoreProduct | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}

export function formatPrice(product: StoreProduct): string {
  if (product.priceDh == null) return 'Price on request';
  return `${product.priceDh.toLocaleString('en-US')} ${product.currency}`;
}

export function productWhatsAppUrl(product: StoreProduct): string {
  return `${BUSINESS.whatsappUrl}?text=${encodeURIComponent(product.whatsappMessage)}`;
}
