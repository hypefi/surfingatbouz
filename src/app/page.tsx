import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="text-center">
      {/* Hero Section */}
      {/* Placeholder for background image - style in globals.css or tailwind.config */}
      <div className="bg-secondary/20 py-20 px-4 rounded-lg shadow-md mb-16">
        <h1 className="text-6xl font-display text-primary mb-4">
          Ride the Perfect Wave
        </h1>
        <p className="text-xl text-neutral/80 mb-8 max-w-2xl mx-auto">
          Custom hand-shaped surfboards built with passion, plus expert coaching
          to elevate your surfing.
        </p>
        <div className="space-x-4">
          <Link href="/surf-coach" 
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
            Book a Lesson
          </Link>
          <Link href="/gallery" 
            className="bg-accent hover:bg-accent/90 text-neutral font-bold py-3 px-6 rounded-md text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg">
            View Boards
          </Link>
        </div>
      </div>

      {/* You can add other sections here - e.g., Featured Boards, About Snippet, Testimonials */}
      <h2 className="text-3xl font-bold font-display text-primary mt-12 mb-6">What We Offer</h2>
      <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-secondary">Custom Shaping</h3>
              <p>Boards tailored to your style and local conditions.</p>
          </div>
           <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-secondary">Surf Coaching</h3>
              <p>Lessons and guiding for all skill levels.</p>
          </div>
           <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-xl mb-2 text-secondary">Board Repair</h3>
              <p>Professional repairs to get you back in the water.</p>
          </div>
      </div>

    </section>
  );
}
