import type { Metadata } from "next";
// Temporarily comment out next/font imports
// import { Poppins, Bangers } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Temporarily comment out font configurations
/*
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bangers",
});
*/

export const metadata: Metadata = {
  title: "SurfShaper Co. - Custom Boards & Surf Coaching",
  description: "Handcrafted surfboards and expert surf lessons & guiding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Temporarily remove font variables from html className
    <html lang="en" /* className={`${poppins.variable} ${bangers.variable}`} */ >
      <body
        // Temporarily remove font-sans from body className
        className={`/* font-sans */ antialiased flex flex-col min-h-screen bg-base text-neutral`}
      >
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
