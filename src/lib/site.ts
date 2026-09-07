import type { Metadata } from 'next';

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://surfingatbouz.vercel.app';

export const SITE_NAME = "Surfing at Bouz'";
export const SITE_TAGLINE =
  'Authentic surf guiding, local hosting, and expert board repair services in Bouznika, Morocco by Mehdi Assiry.';

export const AUTHOR = {
  name: 'Mehdi Assiry',
  jobTitle: 'Surf coach, guide, and board repair specialist',
  email: 'mehdiassiriy@gmail.com',
};

export const BUSINESS = {
  name: SITE_NAME,
  legalName: "Surfing at Bouz' by Mehdi Assiry",
  description: SITE_TAGLINE,
  url: SITE_URL,
  email: 'mehdiassiriy@gmail.com',
  telephone: '+212676516329',
  telephoneDisplay: '+212 676-516329',
  whatsappUrl: 'https://wa.me/212676516329',
  address: {
    locality: 'Bouznika',
    region: 'Casablanca-Settat',
    country: 'MA',
    countryName: 'Morocco',
  },
  instagram: {
    school: 'https://www.instagram.com/surfing_at_bouz/',
    mehdi: 'https://www.instagram.com/mehdi_assiriy/',
    repair: 'https://www.instagram.com/bloc.operatoire/',
  },
  geo: {
    latitude: 33.7896,
    longitude: -7.1597,
  },
  prices: {
    privateLesson: '300 dh / 1.5h',
    groupLesson: '200 dh / 1.5h',
    wetsuitDiscount: '50 dh off if you bring your own wetsuit',
    weekendStay: '1,500 dh (2 days / 1 night)',
    weekStay: '8,500 dh (7 days / 6 nights)',
    smallDing: '100 dh (up to 1cm)',
    moderateDing: '200 dh (up to 5cm)',
    pressureDing: '150 dh',
    finBox: '500 dh',
    leashPlug: '400 dh',
    delam: '500+ dh (quote)',
    dingBulkDiscount: '40% off for 10+ dings on one board',
  },
  lessonProvider: 'Association Bouznika SurfSchool',
  ogImage: '/images/hero1.jpg',
  logo: '/images/logo_surfingatbouz.png',
};

export const STATIC_ROUTES = [
  '/',
  '/about',
  '/gallery',
  '/surf-guiding',
  '/surf-coach',
  '/board-repair',
  '/store',
  '/contact',
  '/blog',
] as const;

export const SERVICE_PAGES = [
  { path: '/surf-coach', title: 'Surf Coaching & Lessons', description: 'Beginner and intermediate surf lessons in Bouznika' },
  { path: '/board-repair', title: 'Board Repair', description: 'Ding, fin box, leash plug, and restoration work' },
  { path: '/surf-guiding', title: 'Surf Guiding & Villa Stay', description: 'Oceanfront hosting and guided sessions' },
  { path: '/contact', title: 'Contact', description: 'WhatsApp, email, and location' },
  { path: '/about', title: 'About Mehdi Assiry', description: 'Local surf coach and repairer in Bouznika' },
] as const;

export function absoluteUrl(path = '/'): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}

export function pageMetadata({
  title,
  description,
  path,
  image = BUSINESS.ogImage,
  type = 'website',
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: 'website' | 'article';
}): Metadata {
  const url = absoluteUrl(path);
  const ogImage = image.startsWith('http') ? image : absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [{ url: ogImage, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
  };
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'SportsActivityLocation'],
    name: BUSINESS.name,
    image: absoluteUrl(BUSINESS.logo),
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    description: BUSINESS.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    sameAs: [
      BUSINESS.instagram.school,
      BUSINESS.instagram.mehdi,
      BUSINESS.instagram.repair,
    ],
    founder: {
      '@type': 'Person',
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
    },
    areaServed: ['Bouznika', 'Rabat', 'Casablanca', 'Morocco'],
    priceRange: '$$',
  };
}
