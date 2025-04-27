import Image from "next/image";
import Link from "next/link";
import HeroCarousel from "@/components/hero-carousel/HeroCarousel";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section with Carousel */}
      <section className="relative -mt-8 h-[80vh] overflow-hidden">
        <HeroCarousel>
          <div className="container mx-auto px-4 h-full relative z-20 flex items-center">
            <div className="max-w-2xl text-white hero-content">
              <h1 className="text-6xl md:text-7xl font-display mb-6 leading-tight text-white">
                Ride the <span className="text-accent">Perfect</span> Wave
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-white/90">
                Custom hand-shaped surfboards built with passion, plus expert coaching
                to elevate your surfing journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/surf-coach"
                  className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md"
                >
                  Book a Lesson
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white hover:bg-white/90 text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md"
                >
                  View Boards
                </Link>
              </div>
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-primary text-center mb-12">
          <span className="inline-block border-b-4 border-secondary pb-2">What We Offer</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-6 text-secondary text-3xl">🏄‍♂️</div>
            <h3 className="font-display text-2xl mb-4 text-primary">Custom Shaping</h3>
            <p className="text-neutral/80">Handcrafted surfboards tailored to your style, experience level, and local wave conditions.</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-6 text-accent text-3xl">🌊</div>
            <h3 className="font-display text-2xl mb-4 text-primary">Surf Coaching</h3>
            <p className="text-neutral/80">Professional instruction for all skill levels, from first-timers to experienced surfers looking to refine technique.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100 transform transition-transform hover:scale-105">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6 text-primary text-3xl">🔧</div>
            <h3 className="font-display text-2xl mb-4 text-primary">Board Repair</h3>
            <p className="text-neutral/80">Expert repair services to keep your board in top condition, from minor dings to major damage.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-sandy py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display text-primary mb-6">Ready to Catch Some Waves?</h2>
          <p className="text-xl text-neutral/80 max-w-2xl mx-auto mb-10">
            Whether you're looking to buy a custom board, take a lesson, or get your board repaired, we're here to help.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
