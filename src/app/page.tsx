import Link from "next/link";
import HeroCarousel from "@/components/hero-carousel/HeroCarousel";

export default function HomePage() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section with Carousel */}
      <section className="relative md:-mt-8 h-[60vh] md:h-[80vh] w-screen overflow-hidden">
        <HeroCarousel>
          <div className="container mx-auto px-4 h-full relative z-20 flex items-center justify-start pt-16 md:pt-0">
            <div className="max-w-2xl text-white hero-content text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display mb-4 md:mb-6 leading-tight text-white">
                Ride the <span className="text-accent">Perfect</span> Wave
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-white/90">
                Experience authentic surf guiding and local hosting in Bouznika, Morocco. Let us show you the best waves and make you feel at home, plus expert board repairs to keep you surfing.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start">
                <Link
                  href="/surf-coach"
                  className="bg-accent hover:bg-accent/90 font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:-translate-y-0.5 shadow-md text-center"
                >
                  Book a Lesson
                </Link>
                <Link
                  href="/board-repair"
                  className="bg-white hover:bg-white/90 text-black font-bold py-3 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all transform hover:-translate-y-0.5 shadow-md text-center"
                >
                  Board Repair
                </Link>
              </div>
            </div>
          </div>
        </HeroCarousel>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-8 mt-16">
        <h2 className="text-4xl font-display text-primary text-center mb-12">
          <span className="inline-block border-b-4 border-secondary pb-2">What We Offer</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Link href="/surf-guiding" className="bg-card rounded-2xl p-8 shadow-surf border border-gray-200 transform transition-transform hover:scale-105 cursor-pointer block">
            <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-6 text-secondary text-3xl">🏄‍♂️</div>
            <h3 className="font-display text-2xl mb-4 text-primary">Surf Guiding & Hosting</h3>
            <p className="text-neutral/80">Personalized surf guiding to the best local spots, plus comfortable hosting for a true Moroccan surf experience.</p>
          </Link>
          
          {/* Feature 2 */}
          <Link href="/surf-coach" className="bg-card rounded-2xl p-8 shadow-surf border border-gray-200 transform transition-transform hover:scale-105 cursor-pointer block">
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-6 text-accent text-3xl">🌊</div>
            <h3 className="font-display text-2xl mb-4 text-primary">Surf Coaching</h3>
            <p className="text-neutral/80">Professional instruction for all skill levels, from first-timers to experienced surfers looking to refine technique.</p>
          </Link>
          
          {/* Feature 3 */}
          <Link href="/board-repair" className="bg-card rounded-2xl p-8 shadow-surf border border-gray-200 transform transition-transform hover:scale-105 cursor-pointer block">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-6 text-primary text-3xl">🔧</div>
            <h3 className="font-display text-2xl mb-4 text-primary">Board Repair</h3>
            <p className="text-neutral/80">Expert repair services to keep your board in top condition, from minor dings to major damage.</p>
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-sandy py-20 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display text-primary mb-6">Ready to Catch Some Waves?</h2>
          <p className="text-xl text-neutral/80 max-w-2xl mx-auto mb-10">
            Whether you&apos;re looking for a surf adventure, a place to stay, or need your board repaired, we&apos;re here to help.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
