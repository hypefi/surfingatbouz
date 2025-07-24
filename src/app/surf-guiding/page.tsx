export default function SurfGuidingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-primary">Surf Guiding & Villa Experience</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-4 text-neutral/80">
            Experience the ultimate surf adventure with our premium villa accommodation and professional surf guiding services.
          </p>
          <p className="text-md text-secondary/90 font-medium">
            Surf lessons and coaching provided by <span className="text-accent font-semibold">Association Bouznika SurfSchool</span>
          </p>
        </div>
      </div>

      {/* Villa Accommodation */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary flex items-center gap-3">
          <span>🏖️</span> Front Side Villa Accommodation
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100">
            <div className="w-20 h-20 bg-primary/10 flex items-center justify-center rounded-xl mb-6 text-primary text-4xl">
              🏡
            </div>
            <h3 className="font-display text-2xl mb-4 text-primary">Oceanfront Villa</h3>
            <ul className="space-y-3 text-neutral/80">
              <li className="flex items-center gap-3">
                <span className="text-accent">🌊</span>
                <span>Direct beach access with stunning ocean views</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🛏️</span>
                <span>Comfortable accommodations for individuals or groups</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🍽️</span>
                <span>Fully equipped kitchen and dining areas</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🚿</span>
                <span>Hot water showers after surf sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">📶</span>
                <span>WiFi and comfortable workspace areas</span>
              </li>
            </ul>
          </div>

          <div className="bg-base rounded-2xl p-8 shadow-surf border border-gray-100">
            <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center rounded-xl mb-6 text-secondary text-4xl">
              🎯
            </div>
            <h3 className="font-display text-2xl mb-4 text-primary">Perfect Location</h3>
            <ul className="space-y-3 text-neutral/80">
              <li className="flex items-center gap-3">
                <span className="text-accent">🏄</span>
                <span>Prime surf spot access at your doorstep</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🚶</span>
                <span>Walking distance to local amenities</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🌅</span>
                <span>Watch sunrise and sunset from your terrace</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🎣</span>
                <span>Multiple surf breaks within short distance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">🛡️</span>
                <span>Safe and secure environment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Surf Guiding Packages */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary flex items-center gap-3">
          <span>🏄‍♂️</span> Surf Guiding Packages
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Weekend Package */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-4 text-accent text-3xl">
              📅
            </div>
            <h3 className="font-display text-xl mb-3 text-primary">Weekend Getaway</h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-neutral">1,500</span>
                <span className="text-lg text-neutral/70">dh</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <span>📅</span>
                <span className="text-sm font-medium">2 Days / 1 Night</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <ul className="text-sm text-neutral/80 space-y-1">
                <li>• Villa accommodation for 1 night</li>
                <li>• 2 guided surf sessions</li>
                <li>• Equipment included</li>
                <li>• Local surf spot guidance</li>
              </ul>
            </div>
          </div>

          {/* Week Package */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg relative">
            <div className="absolute -top-3 -right-3 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold">
              POPULAR
            </div>
            <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-4 text-secondary text-3xl">
              🗓️
            </div>
            <h3 className="font-display text-xl mb-3 text-primary">Week Experience</h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-neutral">8,500</span>
                <span className="text-lg text-neutral/70">dh</span>
              </div>
              <div className="flex items-center gap-2 text-secondary">
                <span>📅</span>
                <span className="text-sm font-medium">7 Days / 6 Nights</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <ul className="text-sm text-neutral/80 space-y-1">
                <li>• Villa accommodation for 6 nights</li>
                <li>• Daily surf sessions (6 sessions)</li>
                <li>• Professional coaching included</li>
                <li>• Multiple surf spot exploration</li>
                <li>• Local area tours included</li>
              </ul>
            </div>
          </div>

          {/* Custom Package */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
            <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-4 text-primary text-3xl">
              ⚙️
            </div>
            <h3 className="font-display text-xl mb-3 text-primary">Custom Package</h3>
            <div className="mb-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-neutral">Custom</span>
              </div>
              <div className="text-xs text-accent font-medium">Tailored to your needs</div>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <ul className="text-sm text-neutral/80 space-y-1">
                <li>• Flexible duration</li>
                <li>• Personalized surf coaching</li>
                <li>• Group discounts available</li>
                <li>• Additional activities can be arranged</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Surf Lessons by Association */}
      <div className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-primary flex items-center gap-3">
          <span>🏄‍♀️</span> Professional Surf Instruction
        </h2>
        
        <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-2xl p-8 border border-accent/20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-accent/20 flex items-center justify-center rounded-xl text-accent text-3xl">
              🎓
            </div>
            <div>
              <h3 className="font-display text-2xl text-primary">Association Bouznika SurfSchool</h3>
              <p className="text-secondary font-medium">Certified Professional Surf Instruction</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-display text-lg mb-3 text-primary">Our Certified Instructors Provide:</h4>
              <ul className="space-y-2 text-neutral/80">
                <li className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Professional surf coaching and technique improvement</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Ocean safety and surf etiquette education</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Beginner to advanced level instruction</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-accent">✓</span>
                  <span>Equipment maintenance and selection guidance</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-display text-lg mb-3 text-primary">All Levels Welcome:</h4>
              <ul className="space-y-2 text-neutral/80">
                <li className="flex items-center gap-3">
                  <span className="text-secondary">🌊</span>
                  <span><strong>Beginners:</strong> First-time surfers, basic techniques</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">🏄</span>
                  <span><strong>Intermediate:</strong> Wave selection, positioning</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-secondary">⚡</span>
                  <span><strong>Advanced:</strong> Performance surfing, style refinement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What's Included */}
      <div className="bg-sandy rounded-2xl p-6 border border-secondary/20 mb-8">
        <div className="flex items-start gap-3 mb-4">
          <span className="text-2xl">📋</span>
          <div>
            <h3 className="font-display text-lg text-primary mb-2">What's Always Included</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="text-neutral/80 space-y-1 text-sm">
                <li>• Comfortable villa accommodation</li>
                <li>• Professional surf instruction</li>
                <li>• All surf equipment (boards, wetsuits)</li>
                <li>• Local surf spot guidance</li>
              </ul>
              <ul className="text-neutral/80 space-y-1 text-sm">
                <li>• Transportation to surf spots</li>
                <li>• Ocean safety briefings</li>
                <li>• WiFi and basic amenities</li>
                <li>• Local area recommendations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Actions */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212676516328?text=Hi! I'd like to book a surf guiding villa experience."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Book Your Villa Experience
          </a>
          <a
            href="/contact"
            className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Get Custom Quote
          </a>
        </div>
        <p className="text-sm text-neutral/60 mt-4">
          Contact us for group bookings, extended stays, or custom packages
        </p>
      </div>
    </div>
  );
} 