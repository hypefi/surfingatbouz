import type { Metadata } from "next";
import { Quicksand, Baloo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "Surfing at Bouz' - Bouznika, Morocco | Surf Guiding, Hosting & Repairs",
  description: "Authentic surf guiding, local hosting, and expert board repair services in Bouznika, Morocco by Mehdi Assiry.",
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
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
