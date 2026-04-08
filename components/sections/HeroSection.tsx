'use client';

import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden font-sans">
      
      {/* 1. BACKGROUND ENGINE - Maximum Image Clarity */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg')", 
          }}
        />
        {/* Semi-transparent dark overlay to make white text "pop" */}
        <div className="absolute inset-0 bg-black/40 shadow-inner" /> 
      </div>

      {/* 2. MAIN CONTENT AREA - Montserrat Font applied */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24">
        <div className="max-w-3xl animate-fade-in-up" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          
          {/* Headline - Clean Montserrat Bold */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Welcome to <br />
            <span className="text-white">GS Cyahafi TSS</span>
          </h1>

          {/* Body Text - Montserrat Regular */}
          <p className="max-w-2xl text-gray-100 text-sm md:text-base lg:text-lg font-medium leading-relaxed mb-10 opacity-95">
            At GS Cyahafi TSS, we are dedicated to providing 
            <span className="font-bold text-white px-1"> high-quality general and technical secondary education </span> 
            that equips our students with the skills they need for success in the workforce and in life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('programs')}
              className="bg-[#b08d57] hover:bg-[#9a7b4c] text-white font-bold px-8 py-3 rounded-sm transition-all flex items-center gap-2 active:scale-95 shadow-xl text-xs uppercase tracking-widest"
            >
              Explore Programs <ArrowRight size={16} />
            </button>
            
            {/* <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-bold px-8 py-3 rounded-sm transition-all active:scale-95 text-xs uppercase tracking-widest"
            >
              Contact Admissions
            </button> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        /* Import Montserrat if not already in your layout */
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}