'use client';

import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function FloatingScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 sm:right-8 bg-[#0a1e34] text-[#b08d57] p-3 rounded-full shadow-lg hover:bg-[#122e4d] hover:scale-110 transition-all duration-300 z-40 border border-[#b08d57]/40 font-[family-name:var(--font-montserrat)]"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}