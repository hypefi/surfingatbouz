import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="relative -mt-8 py-32 px-4 bg-gradient-to-br from-primary to-secondary text-base overflow-hidden">
        {/* Decorative wave overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,186.7C672,203,768,213,864,186.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        
        {/* Hero content */}
        <div className="container mx-auto relative">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-display mb-6 leading-tight">
              Ride the <span className="text-accent">Perfect</span> Wave
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-base/90">
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
                className="bg-base/90 hover:bg-base text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                View Boards
              </Link>
            </div>
          </div>
        </div>
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
