import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-display mb-4 text-primary">Meet Mehdi Assiry</h1>
        <p className="text-xl text-neutral/80 max-w-2xl mx-auto">
          Your Local Surf Guide & Board Repair Expert in Bouznika, Morocco
        </p>
      </div>

      {/* Profile Section */}
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="w-96 h-96 lg:w-[550px] lg:h-[550px] rounded-2xl overflow-hidden shadow-surf border-4 border-sandy relative">
              <Image
                src="/images/mehdisurf.jpeg"
                alt="Mehdi Assiry - Surf Coach & Board Repair Expert"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 384px, 550px"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-lg"></div>
          </div>
        </div>

        {/* Profile Content */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Passionate Local Surfer & Expert Coach
            </h2>
            <p className="text-lg text-neutral/80 mb-6">
              Born and raised in Bouznika, I&#39;ve been riding the waves of Morocco&#39;s Atlantic coast for over a decade. 
              What started as a childhood passion has evolved into a mission to share the magic of surfing with others 
              while preserving the authentic spirit of our local surf culture.
            </p>
          </div>

          {/* Experience Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-sandy/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-neutral/70">Years Experience</div>
            </div>
            <div className="bg-sandy/50 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-secondary mb-1">500+</div>
              <div className="text-sm text-neutral/70">Students Taught</div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/mehdi_assiriy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-secondary transition-colors font-medium px-4 py-2 rounded-full bg-accent/10 hover:bg-accent/20"
            >
              <Image src="/instagram.svg" alt="Instagram" width={18} height={18} unoptimized />
              Follow @mehdi_assiriy
            </a>
          </div>
        </div>
      </div>

      {/* Expertise Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Surf Coaching */}
        <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🏄‍♂️</span>
            </div>
            <h3 className="text-xl font-display font-bold text-primary">Surf Coaching Expertise</h3>
          </div>
          <ul className="space-y-3 text-neutral/80">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Over 10 years of coaching surfers from beginner to advanced levels</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Deep knowledge of Bouznika&#39;s waves, tides, and surf conditions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Personalized instruction tailored to each student&#39;s skill level</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Safety-first approach with ocean awareness training</span>
            </li>
          </ul>
        </div>

        {/* Board Repair */}
        <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-display font-bold text-primary">Board Repair Mastery</h3>
          </div>
          <ul className="space-y-3 text-neutral/80">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Professional ding repairs from small fixes to major restorations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Expert fiberglass work and pressure ding repairs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Fin box and leash plug installations and repairs</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">•</span>
              <span>Custom board art and refinishing services</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12">
        <h3 className="text-2xl font-display font-bold text-primary mb-6 text-center">My Philosophy</h3>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-neutral/80 mb-6">
            &quot;Surfing isn&#39;t just about riding waves – it&#39;s about connecting with the ocean, understanding nature&#39;s rhythm, 
            and becoming part of something bigger than yourself. As a local Bouznika surfer, I believe in sharing not just 
            techniques, but the soul and culture of surfing.&quot;
          </p>
          <div className="flex justify-center gap-6 text-sm text-neutral/60">
            <div className="flex items-center gap-2">
              <span>🌊</span>
              <span>Respect the Ocean</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🤝</span>
              <span>Support Local Community</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📚</span>
              <span>Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Local Knowledge */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-display font-bold text-primary mb-4">Why Choose a Local Guide?</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-sandy/30 rounded-xl p-6">
            <div className="text-3xl mb-3">📍</div>
            <h4 className="font-semibold text-primary mb-2">Local Expertise</h4>
            <p className="text-sm text-neutral/70">
              Born in Bouznika, I know every break, every tide, and every secret spot along our coast.
            </p>
          </div>
          <div className="bg-sandy/30 rounded-xl p-6">
            <div className="text-3xl mb-3">🏘️</div>
            <h4 className="font-semibold text-primary mb-2">Community Connection</h4>
            <p className="text-sm text-neutral/70">
              Experience authentic Moroccan surf culture through local connections and genuine hospitality.
            </p>
          </div>
          <div className="bg-sandy/30 rounded-xl p-6">
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold text-primary mb-2">Personalized Service</h4>
            <p className="text-sm text-neutral/70">
              Small groups, individual attention, and coaching tailored to your specific goals and abilities.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-2xl font-display font-bold text-primary mb-4">Ready to Surf with Mehdi?</h3>
        <p className="text-neutral/70 mb-6 max-w-2xl mx-auto">
          Whether you&#39;re looking for surf lessons, guiding sessions, or need your board repaired, 
          I&#39;m here to help you make the most of your time in Bouznika&#39;s incredible waves.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/212676516329?text=Hi Mehdi! I'd like to learn more about your surf coaching and services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Connect with Mehdi on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/mehdi_assiriy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md"
          >
            <Image src="/instagram.svg" alt="Instagram" width={20} height={20} unoptimized />
            Follow Mehdi on Instagram
          </a>
        </div>
      </div>
    </div>
  );
} 