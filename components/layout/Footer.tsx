'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Youtube 
} from 'lucide-react';

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

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook', hover: 'hover:bg-blue-600' },
    // Replaced Twitter icon/label with X and black hover style
    { 
      icon: <span className="font-sans font-bold text-base leading-none">X</span>, 
      href: '#', 
      label: 'X (Twitter)', 
      hover: 'hover:bg-[#000000]' 
    },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram', hover: 'hover:bg-pink-600' },
    { icon: <Youtube size={18} />, href: '#', label: 'YouTube', hover: 'hover:bg-[#FF0000]' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn', hover: 'hover:bg-blue-700' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Socials */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/logocyaha.png" 
                  alt="GS Cyahafi TSS Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain" 
                />
                <span className="font-bold text-lg">GS Cyahafi TSS</span>
              </div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Building a brighter future through quality education and technical excellence.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 bg-primary-foreground/10 rounded-lg text-primary-foreground transition-all duration-300 ${social.hover} hover:text-white hover:-translate-y-1 flex items-center justify-center`}
                  style={{ width: '38px', height: '38px' }} // Ensure 'X' wrapper has fixed size
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span className="h-px w-2 bg-accent/50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex flex-col">
                <span className="text-xs font-bold uppercase text-accent/80">Phone</span>
                <span>+250 722 792 705 </span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold uppercase text-accent/80">Email</span>
                <span>gscyahafi@gmail.com</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs font-bold uppercase text-accent/80">Location</span>
                <span>Gitega, Kigali, Rwanda</span>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Our Programs</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              {footerPrograms.map((program) => (
                <li key={program} className="flex items-center gap-2">
                   <span className="h-1 w-1 rounded-full bg-accent"></span>
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-8 mt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} GS Cyahafi TSS. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}