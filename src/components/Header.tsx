'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-primary text-base sticky top-0 z-50 shadow-surf">
      <div className="container mx-auto flex justify-between items-center py-4 px-5">
        <Link href="/" className="text-3xl font-display tracking-wide text-base flex items-center gap-2 hover:opacity-90 transition-opacity">
          <span className="inline-block transform -rotate-3">🏄‍♂️</span>
          <span>Surfing at Bouz&#39;</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 text-base">
            <li>
              <Link href="/about" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Gallery</Link>
            </li>
            <li>
              <Link href="/surf-guiding" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Surf Guiding</Link>
            </li>
            <li>
              <Link href="/surf-coach" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Surf Coaching</Link>
            </li>
            <li>
              <Link href="/board-repair" className="hover:text-secondary transition-colors font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all hover:after:w-full">Board Repair</Link>
            </li>
            <li>
              <Link href="/contact" className="bg-accent hover:bg-accent/90 text-primary font-bold py-2 px-5 rounded-full transition-all transform hover:-translate-y-0.5 shadow-md">Contact</Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-base text-2xl focus:outline-none transition-transform duration-200 hover:scale-110"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="bg-primary border-t border-base/10">
          <ul className="flex flex-col space-y-2 px-5 py-4">
            <li>
              <Link 
                href="/about" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-colors font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/gallery" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-colors font-medium"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                href="/surf-guiding" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-colors font-medium"
              >
                Surf Guiding
              </Link>
            </li>
            <li>
              <Link 
                href="/surf-coach" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-colors font-medium"
              >
                Surf Coaching
              </Link>
            </li>
            <li>
              <Link 
                href="/board-repair" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-colors font-medium"
              >
                Board Repair
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                className="block mt-2 py-2 px-3 bg-accent hover:bg-accent/90 text-primary font-bold rounded-full text-center transition-all transform hover:-translate-y-0.5 shadow-md"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 