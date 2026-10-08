'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { TvetProgramsSection } from '@/components/sections/TvetProgramsSection';
import { Button } from '@/components/ui/button';
import { ChefHat, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function TvetProgramsPage() {
  return (
    <div className="w-full bg-white font-montserrat min-h-screen text-[#0a1e34]">
      <Navigation />

      {/* --- HERO BANNER SECTION WITH CLEAN TVET HERO IMAGE --- */}
      <section className="relative min-h-[360px] sm:min-h-[440px] bg-slate-900 text-white overflow-hidden flex flex-col justify-end pb-8">
        {/* Background Image - Clean TVET Practical Showcase */}
        <div className="absolute inset-0 z-0">
          <img
            src="/TVET/fbo.jpeg"
            alt="GS Cyahafi TVET Technical Programs"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e34]/95 via-[#0a1e34]/60 to-black/30" />
        </div>

        <Container>
          <div className="relative z-10 max-w-3xl mb-6">
            <p className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-xs mb-2">
              Technical Secondary School (TSS)
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow">
              TVET Trades <span className="text-[#b08d57]">(FBO & BDC)</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mt-2">
              Practical technical education specializing in Food & Beverage Operations (FBO) and Building Construction (BDC).
            </p>
          </div>

          {/* Department Quick Chips (NO CARDS - Minimalist Open Design) */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/20 pt-6">
            <a href="#fbo" className="group">
              <div className="bg-[#0a1e34]/90 backdrop-blur-md p-4 border border-[#b08d57]/50 rounded-lg flex items-center gap-4 transition-all hover:border-[#b08d57]">
                <div className="w-11 h-11 rounded bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#b08d57] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <ChefHat size={22} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#b08d57] transition-colors">Food & Beverage Operations (FBO)</p>
                  <p className="text-[11px] text-slate-300 font-medium">Culinary Arts, Pastry & Hospitality</p>
                </div>
              </div>
            </a>

            <a href="#bdc" className="group">
              <div className="bg-[#0a1e34]/90 backdrop-blur-md p-4 border border-[#b08d57]/50 rounded-lg flex items-center gap-4 transition-all hover:border-[#b08d57]">
                <div className="w-11 h-11 rounded bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#b08d57] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Hammer size={22} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#b08d57] transition-colors">Building Construction (BDC)</p>
                  <p className="text-[11px] text-slate-300 font-medium">Masonry, Concrete & Architectural Drawing</p>
                </div>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* --- TVET TRADES COMPONENT (FBO & BDC WITH ALL 8 IMAGES, NO CARDS, ENGLISH ONLY) --- */}
      <TvetProgramsSection />

      {/* --- SIMPLE & DIRECT ADMISSION BANNER (NO CARDS) --- */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-xs">
              Registration & Admissions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
              Enroll in FBO or BDC Technical Trades
            </h2>
            <p className="text-slate-300 text-sm font-medium leading-relaxed max-w-xl mx-auto">
              TVET graduates receive NESA Level 5 Advanced Technical Diplomas and qualify for direct admission to Rwanda Polytechnic (RP / IPRC) or immediate employment.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#b08d57]" /> Industrial Internship Program
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#b08d57]" /> Fully Equipped Workshops
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#b08d57]" /> Level 5 National Certificate
              </div>
            </div>

            <div className="pt-6">
              <Link href="/contact">
                <Button className="bg-[#b08d57] hover:bg-white hover:text-[#0a1e34] text-[#0a1e34] rounded-none px-8 py-6 font-black uppercase text-xs tracking-widest transition-all shadow-xl inline-flex items-center gap-2">
                  <span>Contact Admissions Office</span>
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}

