'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { Container } from './Container';
import { Button } from '../ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Academic Levels', id: 'levels' },
    { label: 'TVET Programs', id: 'tvet' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Pages', href: '/pages', hasDropdown: true },
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
              if (item.hasDropdown && item.label === 'About') {
                return (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 hover:text-accent transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-primary rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href="/about" className="block px-4 py-2 hover:bg-primary/80 text-sm">
                        About School
                      </Link>
                      <Link href="/about#team" className="block px-4 py-2 hover:bg-primary/80 text-sm">
                        Meet Our Team
                      </Link>
                    </div>
                  </div>
                );
              }
              if (item.hasDropdown && item.label === 'Pages') {
                return (
                  <div key={item.label} className="relative group">
                    <button className="flex items-center gap-1 hover:text-accent transition-colors">
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-primary rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <Link href="/pages/quizzes" className="block px-4 py-2 hover:bg-primary/80 text-sm">
                        Quizzes
                      </Link>
                      <Link href="/pages/exams" className="block px-4 py-2 hover:bg-primary/80 text-sm">
                        Exams
                      </Link>
                      <Link href="/pages/documents" className="block px-4 py-2 hover:bg-primary/80 text-sm">
                        Documents
                      </Link>
                      <Link href="/pages/announcements" className="block px-4 py-2 hover:bg-primary/80 text-sm">
                        Announcements
                      </Link>
                    </div>
                  </div>
                );
              }
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
            <Link href="/contact">
              <Button
                variant="primary"
                className="text-sm"
              >
                Contact
              </Button>
            </Link>
            <Link href="/admin/login">
              <Button
                variant="outline"
                className="text-sm border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Login
              </Button>
            </Link>
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
              if (item.hasDropdown && item.label === 'About') {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className="flex items-center justify-between w-full text-left hover:text-accent transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isAboutOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-white/20 pl-4">
                        <Link href="/about" className="hover:text-accent text-sm" onClick={() => setIsMenuOpen(false)}>
                          About School
                        </Link>
                        <Link href="/about#team" className="hover:text-accent text-sm" onClick={() => setIsMenuOpen(false)}>
                          Meet Our Team
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
              if (item.hasDropdown && item.label === 'Pages') {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setIsPagesOpen(!isPagesOpen)}
                      className="flex items-center justify-between w-full text-left hover:text-accent transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isPagesOpen && (
                      <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-white/20 pl-4">
                        <Link href="/pages/quizzes" className="hover:text-accent text-sm" onClick={() => setIsMenuOpen(false)}>
                          Quizzes
                        </Link>
                        <Link href="/pages/exams" className="hover:text-accent text-sm" onClick={() => setIsMenuOpen(false)}>
                          Exams
                        </Link>
                        <Link href="/pages/documents" className="hover:text-accent text-sm" onClick={() => setIsMenuOpen(false)}>
                          Documents
                        </Link>
                        <Link href="/pages/announcements" className="hover:text-accent text-sm" onClick={() => setIsMenuOpen(false)}>
                          Announcements
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }
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
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="primary"
                className="text-sm w-fit"
              >
                Contact
              </Button>
            </Link>
            <Link href="/admin/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                variant="outline"
                className="text-sm w-fit border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Login
              </Button>
            </Link>
          </div>
        )}
      </Container>
    </nav>
  );
}
