'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';

export function Footer() {
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Gallery', href: '/gallery' },
  ];

  const footerPrograms = [
    'FBO - Food & Beverage',
    'BDC - Construction',
    'Academic Programs',
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logocyaha.png" alt="GS Cyahafi TSS Logo" width={40} height={40} className="object-contain" />
              <span className="font-bold">GS Cyahafi TSS</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Building a brighter future through quality education.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Phone: +250 XXX XXX XXX</li>
              <li>Email: info@gscyahafi.rw</li>
              <li>Location: Gitega, Kigali</li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {footerPrograms.map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 GS Cyahafi TSS. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
