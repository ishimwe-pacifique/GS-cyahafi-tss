'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { Container } from './Container';
import { Button } from '../ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Academic Levels', id: 'levels' },
    { label: 'TVET Programs', id: 'tvet' },
    { label: 'Gallery', href: '/gallery' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary text-primary-foreground shadow-lg z-50">
      <Container>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image src="/logocyaha.png" alt="GS Cyahafi TSS Logo" width={48} height={48} className="object-contain" />
            <span className="text-xl font-bold text-balance">GS Cyahafi TSS</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isLink = 'href' in item;
              return isLink ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              );
            })}
            <Button
              variant="primary"
              onClick={() => handleNavClick('contact')}
              className="text-sm"
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {navItems.map((item) => {
              const isLink = 'href' in item;
              return isLink ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-left hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left hover:text-accent transition-colors"
                >
                  {item.label}
                </button>
              );
            })}
            <Button
              variant="primary"
              onClick={() => handleNavClick('contact')}
              className="text-sm w-fit"
            >
              Contact
            </Button>
          </div>
        )}
      </Container>
    </nav>
  );
}
