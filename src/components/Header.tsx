import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-base sticky top-0 z-50 shadow-surf">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <Link href="/" className="text-3xl font-display tracking-wide text-base flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="inline-block transform -rotate-3">🏄‍♂️</span>
          <span>SurfShaper</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-base">
            <li>
              <Link href="/about" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Gallery</Link>
            </li>
            <li>
              <Link href="/surf-coach" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Surf Coach</Link>
            </li>
            <li>
              <Link href="/board-repair" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Board Repair</Link>
            </li>
            <li>
              <Link href="/contact" className="bg-accent hover:bg-accent/90 text-white font-bold py-2 px-5 rounded-full transition-all transform hover:-translate-y-0.5 shadow-md">Contact</Link>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </header>
  );
} 