'use client';

import { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from '../ui/button';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switches appearance when user scrolls past top banner
      setIsScrolled(window.scrollY > 70);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about', hasDropdown: true },
    { label: 'Academic Levels', href: '/academic-levels' },
    { label: 'TVET Programs', href: '/tvet-programs' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Pages', href: '/pages', hasDropdown: true },
  ];

  return (
    <>
      {/* 1. TOP BANNER (Large, Crisp, Bold Official Header Banner) */}
      <div className="w-full bg-white border-b border-slate-200/90 py-3 sm:py-4 shadow-sm relative z-40">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Logo Banner - Large, Crisp & High Visibility */}
            <div className="flex-1 flex justify-center lg:justify-start items-center w-full overflow-x-auto">
              <img
                src="/header-logo-banner.png"
                alt="GS CYAHAFI TSS Official Header Banner"
                className="h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 w-auto max-w-full object-contain drop-shadow-sm transition-transform duration-300"
              />
            </div>

            {/* Contact & Social Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 flex-shrink-0 border-t md:border-t-0 md:border-l border-slate-200/60 pt-3 md:pt-0 md:pl-6 w-full md:w-auto">
              <a
                href="tel:+250 722 792 705"
                className="flex items-center gap-2 bg-[#0a1e34] hover:bg-[#b08d57] text-white px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95"
              >
                <Phone size={14} className="text-[#b08d57]" />
                <span>Tel: +250 722 792 705</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#1877F2] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Facebook size={15} />
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-black text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Twitter size={15} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#E4405F] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Instagram size={15} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#0A66C2] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Linkedin size={15} />
                </a>
                <a
                  href="https://wa.me/+250 722 792 705"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#25D366] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <MessageCircle size={15} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#FF0000] text-slate-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-sm"
                >
                  <Youtube size={15} />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* 2. MAIN NAVBAR (STICKY AT TOP) */}
      <header
        className={`sticky top-0 z-50 w-full font-montserrat transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a1e34]/95 backdrop-blur-md shadow-xl border-b border-[#b08d57]/30'
            : 'bg-[#0a1e34] shadow-md border-b border-slate-800'
        }`}
      >
        <Container>
          <div className="flex justify-between items-center h-16">
            {/* Brand Logo inside Nav */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <Image
                src="/logocyaha.png"
                alt="GS Cyahafi TSS Logo"
                width={38}
                height={38}
                className="object-contain group-hover:scale-105 transition-transform"
              />
              <span className="text-lg md:text-xl font-black text-white tracking-tight">
                GS Cyahafi <span className="text-[#b08d57]">TSS</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                // 1. ABOUT DROPDOWN
                if (item.hasDropdown && item.label === 'About') {
                  return (
                    <div key={item.label} className="relative group py-2">
                      <Link
                        href="/about"
                        className="flex items-center gap-1 text-slate-100 hover:text-[#b08d57] font-semibold text-sm transition-colors"
                      >
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-[#b08d57]" />
                      </Link>
                      <div className="absolute top-full left-0 mt-1 w-52 bg-[#0a1e34] border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 overflow-hidden">
                        <Link
                          href="/about"
                          className="block px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-[#b08d57] hover:text-white transition-colors"
                        >
                          About School Overview
                        </Link>
                        <Link
                          href="/about#team"
                          className="block px-4 py-3 text-xs font-semibold text-slate-200 hover:bg-[#b08d57] hover:text-white transition-colors border-t border-slate-800"
                        >
                          Meet Our Leadership & Team
                        </Link>
                      </div>
                    </div>
                  );
                }

                // 2. PAGES DROPDOWN
                if (item.hasDropdown && item.label === 'Pages') {
                  return (
                    <div key={item.label} className="relative group py-2">
                      <button className="flex items-center gap-1 text-slate-100 hover:text-[#b08d57] font-semibold text-sm transition-colors">
                        {item.label}
                        <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-[#b08d57]" />
                      </button>
                      <div className="absolute top-full left-0 mt-1 w-48 bg-[#0a1e34] border border-slate-700 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50 overflow-hidden">
                        <Link
                          href="/pages/quizzes"
                          className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-[#b08d57] hover:text-white transition-colors"
                        >
                          Quizzes
                        </Link>
                        <Link
                          href="/pages/exams"
                          className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-[#b08d57] hover:text-white transition-colors"
                        >
                          Exams & Papers
                        </Link>
                        <Link
                          href="/pages/documents"
                          className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-[#b08d57] hover:text-white transition-colors"
                        >
                          Official Documents
                        </Link>
                        <Link
                          href="/pages/announcements"
                          className="block px-4 py-2.5 text-xs font-semibold text-slate-200 hover:bg-[#b08d57] hover:text-white transition-colors"
                        >
                          Announcements
                        </Link>
                      </div>
                    </div>
                  );
                }

                // Standard Direct Link (Academic Levels, TVET Programs, Home, Gallery)
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-slate-100 hover:text-[#b08d57] font-semibold text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* Action Buttons */}
              <div className="flex items-center gap-3 ml-2">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    className="text-xs font-bold uppercase tracking-wider bg-[#b08d57] hover:bg-[#9a7b4c] text-white px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95"
                  >
                    Contact Us
                  </Button>
                </Link>
                <Link href="/admin/login">
                  <Button
                    variant="outline"
                    className="text-xs font-bold uppercase tracking-wider border-[#b08d57] text-[#b08d57] hover:bg-[#b08d57] hover:text-white px-4 py-2 rounded-xl transition-all active:scale-95"
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white hover:text-[#b08d57] transition-colors focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-6 pt-2 flex flex-col gap-4 border-t border-slate-700/60 bg-[#0a1e34] px-4 rounded-b-xl shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto">
              {/* Mobile Social Bar */}
              <div className="flex items-center justify-center gap-3 py-2 bg-slate-900/60 rounded-lg">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-[#b08d57]">
                  <Facebook size={16} />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-[#b08d57]">
                  <Twitter size={16} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-[#b08d57]">
                  <Instagram size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-[#b08d57]">
                  <Linkedin size={16} />
                </a>
                <a href="https://wa.me/250 722 792 705" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-[#25D366]">
                  <MessageCircle size={16} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-300 hover:text-[#FF0000]">
                  <Youtube size={16} />
                </a>
              </div>

              {navItems.map((item) => {
                if (item.label === 'About') {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsAboutOpen(!isAboutOpen)}
                        className="flex items-center justify-between w-full text-left font-semibold text-white hover:text-[#b08d57] transition-colors py-1"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform text-[#b08d57] ${isAboutOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isAboutOpen && (
                        <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#b08d57] pl-4">
                          <Link href="/about" className="hover:text-[#b08d57] text-sm py-1 text-slate-300" onClick={() => setIsMenuOpen(false)}>
                            About School Overview
                          </Link>
                          <Link href="/about#team" className="hover:text-[#b08d57] text-sm py-1 text-slate-300" onClick={() => setIsMenuOpen(false)}>
                            Meet Our Team
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                if (item.label === 'Pages') {
                  return (
                    <div key={item.label}>
                      <button
                        onClick={() => setIsPagesOpen(!isPagesOpen)}
                        className="flex items-center justify-between w-full text-left font-semibold text-white hover:text-[#b08d57] transition-colors py-1"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform text-[#b08d57] ${isPagesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isPagesOpen && (
                        <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-[#b08d57] pl-4">
                          <Link href="/pages/quizzes" className="hover:text-[#b08d57] text-sm py-1 text-slate-300" onClick={() => setIsMenuOpen(false)}>
                            Quizzes
                          </Link>
                          <Link href="/pages/exams" className="hover:text-[#b08d57] text-sm py-1 text-slate-300" onClick={() => setIsMenuOpen(false)}>
                            Exams
                          </Link>
                          <Link href="/pages/documents" className="hover:text-[#b08d57] text-sm py-1 text-slate-300" onClick={() => setIsMenuOpen(false)}>
                            Documents
                          </Link>
                          <Link href="/pages/announcements" className="hover:text-[#b08d57] text-sm py-1 text-slate-300" onClick={() => setIsMenuOpen(false)}>
                            Announcements
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-left font-semibold text-white hover:text-[#b08d57] transition-colors py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="flex items-center gap-3 pt-3">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="flex-1">
                  <Button variant="primary" className="text-xs font-bold uppercase tracking-wider bg-[#b08d57] text-white w-full py-3 rounded-xl">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/admin/login" onClick={() => setIsMenuOpen(false)} className="flex-1">
                  <Button variant="outline" className="text-xs font-bold uppercase tracking-wider border-[#b08d57] text-[#b08d57] hover:bg-[#b08d57] hover:text-white w-full py-3 rounded-xl">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}