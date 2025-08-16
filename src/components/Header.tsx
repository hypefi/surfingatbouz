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
              <Link href="/about" className="hover:text-secondary transition-all duration-300 font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full transform hover:scale-105">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-secondary transition-all duration-300 font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full transform hover:scale-105">Gallery</Link>
            </li>
            <li>
              <Link href="/surf-guiding" className="hover:text-secondary transition-all duration-300 font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full transform hover:scale-105">Surf Guiding</Link>
            </li>
            <li>
              <Link href="/surf-coach" className="hover:text-secondary transition-all duration-300 font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full transform hover:scale-105">Surf Coaching</Link>
            </li>
            <li>
              <Link href="/board-repair" className="hover:text-secondary transition-all duration-300 font-medium py-2 px-1 relative after:absolute after:w-0 after:h-0.5 after:bg-secondary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full transform hover:scale-105">Board Repair</Link>
            </li>
            <li>
              <Link href="/contact" className="bg-accent hover:bg-accent/90 text-primary font-bold py-2 px-5 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md hover:shadow-lg group relative overflow-hidden">
                <span className="relative z-10 group-hover:animate-pulse">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-base text-2xl focus:outline-none transition-all duration-300 hover:scale-125 hover:rotate-180 hover:text-accent transform active:scale-95"
          aria-label="Toggle mobile menu"
        >
          <span className={`transition-all duration-300 ${mobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
            {mobileMenuOpen ? '✕' : '☰'}
          </span>
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
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-all duration-300 font-medium transform hover:scale-105 hover:translate-x-2"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/gallery" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-all duration-300 font-medium transform hover:scale-105 hover:translate-x-2"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link 
                href="/surf-guiding" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-all duration-300 font-medium transform hover:scale-105 hover:translate-x-2"
              >
                Surf Guiding
              </Link>
            </li>
            <li>
              <Link 
                href="/surf-coach" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-all duration-300 font-medium transform hover:scale-105 hover:translate-x-2"
              >
                Surf Coaching
              </Link>
            </li>
            <li>
              <Link 
                href="/board-repair" 
                onClick={closeMobileMenu}
                className="block py-2 px-3 text-base hover:text-secondary hover:bg-base/10 rounded transition-all duration-300 font-medium transform hover:scale-105 hover:translate-x-2"
              >
                Board Repair
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                className="block mt-2 py-2 px-3 bg-accent hover:bg-accent/90 text-primary font-bold rounded-full text-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg group relative overflow-hidden"
              >
                <span className="relative z-10 group-hover:animate-pulse">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 