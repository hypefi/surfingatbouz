import Image from 'next/image';

export default function SurfCoachPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Surf Coaching & Lessons</h1>
      <p className="mb-6">
        Professional surf instruction by <span className="font-semibold text-accent">Association Bouznika SurfSchool</span>. 
        Whether you&apos;re a beginner catching your first wave or an experienced surfer
        looking to refine your skills, our certified instructors will help you progress.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
      
      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Beginner Lesson Card */}
        <a
          href="https://wa.me/212676516329?text=Hi! I'd like to book a private beginner surf lesson (300dh for 1.5 hours)."
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-4 text-accent text-3xl">
              🏄‍♂️
            </div>
            <h3 className="font-display text-xl mb-3 text-primary">Beginner Lesson (Private)</h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-neutral">300</span>
                <span className="text-lg text-neutral/70">dh</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <span>⏱️</span>
                <span className="text-sm font-medium">1.5 hours</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-neutral/80">Perfect for first-time surfers wanting personalized attention and faster progress.</p>
            </div>
          </div>
        </a>

        {/* Group Lesson Card */}
        <a
          href="https://wa.me/212676516329?text=Hi! I'd like to book a group surf lesson (200dh for 1.5 hours)."
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
            <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-4 text-secondary text-3xl">
              👥
            </div>
            <h3 className="font-display text-xl mb-3 text-primary">Group Lesson</h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-neutral">200</span>
                <span className="text-lg text-neutral/70">dh</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <span>⏱️</span>
                <span className="text-sm font-medium">1.5 hours</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm text-neutral/80">Learn with friends and meet other surf enthusiasts in a fun, social environment.</p>
            </div>
          </div>
        </a>

      </div>

      {/* What's Included & Discount Info */}
      <div className="bg-sandy rounded-2xl p-6 border border-secondary/20">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">📋</span>
          <div>
            <h3 className="font-display text-lg text-primary mb-2">What&#39;s Included</h3>
            <p className="text-neutral/80 mb-3">All sessions include material, wetsuit and board.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">💰</span>
          <div>
            <h3 className="font-display text-lg text-primary mb-2">Special Offer</h3>
            <p className="text-neutral/80">
              <span className="font-semibold text-accent">50dh discount</span> if you have your own wetsuit.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Book Your Session
          </a>
          <a
            href="https://www.instagram.com/surfing_at_bouz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block justify-center"
          >
                          <Image src="/instagram.svg" alt="Instagram" width={20} height={20} unoptimized />
            Surf School Instagram
          </a>
        </div>
        <p className="text-sm text-neutral/60">
          Follow @surfing_at_bouz for surf updates and community content
        </p>
      </div>
    </div>
  );
} 