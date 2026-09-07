import type { Metadata } from "next";
import { Quicksand, Baloo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import {
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  BUSINESS,
  localBusinessJsonLd,
} from "@/lib/site";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-quicksand",
});

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-baloo",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Bouznika, Morocco | Surf Guiding, Hosting & Repairs`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  icons: {
    icon: [
      { url: '/images/logo_surfingatbouz.png', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/images/logo_surfingatbouz.png',
    apple: [
      { url: '/images/logo_surfingatbouz.png', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: `${SITE_NAME} - Bouznika, Morocco | Surf Guiding, Hosting & Repairs`,
    description: SITE_TAGLINE,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [{ url: BUSINESS.ogImage, alt: `${SITE_NAME} in Bouznika, Morocco` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Bouznika, Morocco`,
    description: SITE_TAGLINE,
    images: [BUSINESS.ogImage],
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${quicksand.variable} ${baloo.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4STX6QT61T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4STX6QT61T');
            `,
          }}
        />
      </head>
      <body
        className="font-sans antialiased flex flex-col min-h-screen bg-base text-neutral overflow-x-hidden"
      >
        <JsonLd data={localBusinessJsonLd()} />
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
