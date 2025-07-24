'use client';

import { useTheme } from '@/app/providers';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-12 rounded-full overflow-hidden group transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-secondary-dark"
      aria-label="Toggle theme"
    >
      {/* Background with wave effect */}
      <div className={`absolute inset-0 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-ocean-deep' 
          : 'bg-ocean-light'
      }`}>
        <div className={`
          absolute w-full h-[300%] transition-transform duration-1000
          ${theme === 'dark' ? '-top-[200%]' : 'top-0'}
          ${theme === 'dark' ? 'bg-ocean-light' : 'bg-ocean-deep'}
          transform-gpu
          animate-wave
        `} />
      </div>

      {/* Sun/Moon Icon */}
      <div className={`
        absolute inset-0 flex items-center justify-center
        transition-transform duration-500
        ${theme === 'dark' ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}
      `}>
        <span className="text-2xl" role="img" aria-label="Moon">
          🌙
        </span>
      </div>
      <div className={`
        absolute inset-0 flex items-center justify-center
        transition-transform duration-500
        ${theme === 'dark' ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'}
      `}>
        <span className="text-2xl" role="img" aria-label="Sun">
          ☀️
        </span>
      </div>
    </button>
  );
} 