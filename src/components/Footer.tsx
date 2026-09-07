import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-neutral text-base py-8 mt-12 relative">
      {/* Wave divider at the top of the footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden transform -translate-y-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 text-neutral"
          style={{ fill: 'currentColor' }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo and tagline - kept in one line */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div className="relative w-8 h-8">
                <Image
                  src="/images/logo_surfingatbouz.png"
                  alt="Surfing at Bouz' Logo"
                  fill
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-xl font-display text-base">Surfing at Bouz&#39; by Mehdi Assiry</span>
            </div>
            <p className="text-sm text-base/80">Authentic surf guiding, local hosting, and expert board repairs in Bouznika, Morocco.</p>
          </div>
          
          {/* Quick links - more compact */}
          <div>
            <h3 className="text-secondary font-display text-lg mb-1">Quick Links</h3>
            <ul className="grid gap-0.5">
              <li><Link href="/about" className="text-sm text-base/80 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="text-sm text-base/80 hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link href="/surf-guiding" className="text-sm text-base/80 hover:text-secondary transition-colors">Surf Guiding</Link></li>
              <li><Link href="/surf-coach" className="text-sm text-base/80 hover:text-secondary transition-colors">Surf Coaching</Link></li>
              <li><Link href="/board-repair" className="text-sm text-base/80 hover:text-secondary transition-colors">Board Repairs</Link></li>
              <li><Link href="/store" className="text-sm text-base/80 hover:text-secondary transition-colors">Store</Link></li>
              <li><Link href="/blog" className="text-sm text-base/80 hover:text-secondary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-base/80 hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Contact info - more compact */}
          <div>
            <h3 className="text-secondary font-display text-lg mb-1">Get In Touch</h3>
            <div className="grid gap-0.5">
              <p className="flex items-center gap-2 text-sm text-base/80">
                <span>📍</span> Bouznika, Morocco
              </p>
              <p className="flex items-center gap-2 text-sm text-base/80">
                <span>📱</span> <a href="https://wa.me/212676516329" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">+212 676-516329</a>
                <a href="https://wa.me/212676516329" target="_blank" rel="noopener noreferrer" title="WhatsApp" className="inline-flex items-center ml-2">
                  <Image src="/whatsapp.svg" alt="WhatsApp" width={18} height={18} />
                </a>
              </p>
              <p className="flex items-center gap-2 text-sm text-base/80">
                <span>✉️</span> <a href="mailto:mehdiassiriy@gmail.com" className="hover:text-secondary">mehdiassiriy@gmail.com</a>
              </p>
              <p className="flex items-center gap-2 text-sm text-base/80">
                <Image src="/instagram.svg" alt="Instagram" width={16} height={16} unoptimized />
                <a href="https://www.instagram.com/surfing_at_bouz/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary">@surfing_at_bouz</a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-base/10 mt-4 pt-4 text-center text-xs text-base/60">
          <p>&copy; {new Date().getFullYear()} Surfing at Bouz&#39;. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 