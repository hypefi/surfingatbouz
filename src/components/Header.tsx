import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-5 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-display tracking-wide">
          SurfShaper Co. {/* Replace with actual name */}
        </Link>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><Link href="/about" className="hover:text-secondary">About</Link></li>
            <li><Link href="/gallery" className="hover:text-secondary">Gallery</Link></li>
            <li><Link href="/surf-coach" className="hover:text-secondary">Surf Coach</Link></li>
            <li><Link href="/board-repair" className="hover:text-secondary">Board Repair</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 