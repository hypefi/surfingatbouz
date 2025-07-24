export default function BoardRepairPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Board Repair</h1>
      <p className="mb-6">
        Dings happen! We offer professional surfboard repair services to get
        you back in the water quickly.
      </p>

      <h2 className="text-2xl font-semibold mb-6">Repair Services</h2>
      
      {/* Basic Repairs */}
      <div className="mb-8">
        <h3 className="text-xl font-display text-primary mb-4 flex items-center gap-2">
          <span>🔧</span> Basic Repairs
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Small Ding Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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

          {/* Moderate Ding Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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

          {/* Pressure Ding Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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
              <p className="text-sm text-neutral/80">Repair for dents without cracks, restoring board's original shape.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Major Repairs */}
      <div className="mb-8">
        <h3 className="text-xl font-display text-primary mb-4 flex items-center gap-2">
          <span>⚙️</span> Major Repairs
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Fin Box Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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

          {/* Leash Plug Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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

          {/* Delamination Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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
        </div>
      </div>

      {/* Specialty Services */}
      <div className="mb-8">
        <h3 className="text-xl font-display text-primary mb-4 flex items-center gap-2">
          <span>🎨</span> Specialty Services
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Board Painting Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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

          {/* Full Restoration Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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

          {/* Wax Removal & Cleaning Card */}
          <div className="bg-base rounded-2xl p-6 shadow-surf border border-gray-100 transform transition-all hover:scale-105 hover:shadow-lg">
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
      <div className="text-center">
        <a
          href="https://wa.me/212676516328?text=Hi! I'd like to get a quote for board repair services."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent/90 text-primary font-bold py-3 px-8 rounded-full text-lg transition-all transform hover:-translate-y-0.5 shadow-md inline-block"
        >
          Get a Repair Quote on WhatsApp
        </a>
      </div>
    </div>
  );
} 