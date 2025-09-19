import Image from 'next/image';

export default function BoardRepairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary">Board Repair</h1>
      <p className="mb-6 text-lg text-neutral/80">
        Dings happen! We offer professional surfboard repair services to get
        you back in the water quickly.
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">Repair Services</h2>
      
      {/* Basic Repairs */}
      <div className="mb-8">
        <h3 className="text-xl font-display text-primary mb-4 flex items-center gap-2">
          <span>🔧</span> Basic Repairs
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Small Ding Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need a Small Ding Repair (100dh) for up to 1cm damage on my surfboard. Can you help?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-4 text-secondary text-3xl">
                🩹
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Small Ding Repair</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-neutral">100</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <span>📏</span>
                  <span className="text-sm font-medium">Up to 1cm (Rail/Deck)</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Quick fix for minor dings and surface damage. Perfect for small impacts.</p>
              </div>
            </div>
          </a>

          {/* Moderate Ding Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need a Moderate Ding Repair (200dh) for up to 5cm damage on my surfboard. Can you help?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-4 text-accent text-3xl">
                🔨
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Moderate Ding Repair</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-neutral">200</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <span>📏</span>
                  <span className="text-sm font-medium">Up to 5cm</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Professional repair for medium-sized damage requiring fiberglass work.</p>
              </div>
            </div>
          </a>

          {/* Pressure Ding Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need a Pressure Ding Repair (150dh) for impact damage on my surfboard. Can you help?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-4 text-primary text-3xl">
                💥
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Pressure Ding</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-neutral">150</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <span>⚡</span>
                  <span className="text-sm font-medium">Impact damage</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Repair for dents without cracks, restoring board&#39;s original shape.</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Major Repairs */}
      <div className="mb-8">
        <h3 className="text-xl font-display text-primary mb-4 flex items-center gap-2">
          <span>⚙️</span> Major Repairs
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fin Box Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need a Fin Box Repair (500dh) for my surfboard. Can you help with the replacement or repair?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-4 text-accent text-3xl">
                🦈
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Fin Box Repair</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-neutral">500</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Complete fin box replacement or repair. Critical for board performance.</p>
              </div>
            </div>
          </a>

          {/* Leash Plug Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need a Leash Plug Repair (400dh) for my surfboard. Can you help with the installation or repair?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-4 text-secondary text-3xl">
                🔗
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Leash Plug Repair</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-neutral">400</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Professional leash plug installation or repair for secure leash attachment.</p>
              </div>
            </div>
          </a>

          {/* Delamination Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need a Delamination Repair (500%2Bdh) for foam separation on my surfboard. Can I get a quote for the repair?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-4 text-primary text-3xl">
                🩺
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Delamination Repair</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-neutral">500+</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
                <div className="text-xs text-accent font-medium">Quote Required</div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Complex repair for foam separation. Pricing varies by extent of damage.</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Specialty Services */}
      <div className="mb-8">
        <h3 className="text-xl font-display text-primary mb-4 flex items-center gap-2">
          <span>🎨</span> Specialty Services
        </h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Board Painting Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I'm interested in Board Painting %26 Art services for my surfboard. Can I get a custom quote?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-xl mb-4 text-accent text-3xl">
                🎨
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Board Painting & Art</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  {/* <span className="text-2xl font-bold text-neutral">800+</span> */}
                  {/* <span className="text-lg text-neutral/70">dh</span> */}
                </div>
                <div className="text-xs text-accent font-medium">Custom Quote</div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Custom artwork, logos, or complete board painting. Make your board unique!</p>
              </div>
            </div>
          </a>

          {/* Full Restoration Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I'm interested in Full Restoration service for my surfboard. Can you assess the board and provide a quote?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-secondary/10 flex items-center justify-center rounded-xl mb-4 text-secondary text-3xl">
                ✨
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Full Restoration</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  {/* <span className="text-2xl font-bold text-neutral">1500+</span> */}
                  {/* <span className="text-lg text-neutral/70">dh</span> */}
                </div>
                <div className="text-xs text-accent font-medium">Assessment Required</div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Complete board overhaul including multiple repairs, sanding, and refinishing.</p>
              </div>
            </div>
          </a>

          {/* Wax Removal & Cleaning Card */}
          <a
            href="https://wa.me/212676516329?text=Hi! I need Deep Cleaning service (50dh) for my surfboard. Can you help with wax removal and cleaning?"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-card rounded-2xl p-6 shadow-surf border border-gray-200 transform transition-all hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-xl mb-4 text-primary text-3xl">
                🧽
              </div>
              <h4 className="font-display text-lg mb-3 text-primary">Deep Cleaning</h4>
              <div className="mb-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-neutral">50</span>
                  <span className="text-lg text-neutral/70">dh</span>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-neutral/80">Professional wax removal, cleaning, and board conditioning service.</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Important Information */}
      <div className="bg-sandy rounded-2xl p-6 border border-secondary/20 mb-6">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-2xl">⚠️</span>
          <div>
            <h3 className="font-display text-lg text-primary mb-2">Important Notes</h3>
            <ul className="text-neutral/80 space-y-1 text-sm">
              <li>• Prices are estimates in Moroccan Dirham (dh) and may vary based on damage assessment</li>
              <li>• Complex repairs require on-site evaluation for accurate pricing</li>
              <li>• Repair time varies from same-day to several days depending on complexity</li>
            </ul>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-2xl">💰</span>
          <div>
            <h3 className="font-display text-lg text-primary mb-2">Special Discount</h3>
            <p className="text-neutral/80">
              <span className="font-semibold text-accent">40% discount</span> for more than 10 dings on a single board.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212676516329?text=Hi! I&#39;d like to get a quote for board repair services."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
          >
            Get a Repair Quote on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/bloc.operatoire/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-primary font-bold py-3 px-6 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block justify-center"
          >
                          <Image src="/instagram.svg" alt="Instagram" width={20} height={20} unoptimized />
            Board Repair Gallery
          </a>
        </div>
        <p className="text-sm text-neutral/60">
          Follow @bloc.operatoire for before/after repair photos and tips
        </p>
      </div>
    </div>
  );
} 