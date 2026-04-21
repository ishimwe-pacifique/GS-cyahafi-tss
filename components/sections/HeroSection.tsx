'use client';

import { useState, useEffect, useCallback } from 'react';
import { useScrollToSection } from '@/hooks/useScrollToSection';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    title: 'Welcome to',
    subtitle: 'GS Cyahafi TSS',
    description: 'At GS Cyahafi TSS, we are dedicated to providing high-quality general and technical secondary education that equips our students with the skills they need for success in the workforce and in life.',
  },
  {
    image: '/Student1.jpeg',
    title: 'Excellence in',
    subtitle: 'Technical Training',
    description: 'Our TVET programs prepare students with hands-on practical skills for immediate employment in the modern workforce.',
  },
  {
    image: '/image1.jpeg',
    title: 'Building Future',
    subtitle: 'Leaders & Innovators',
    description: "From Nursery to Secondary, we build a strong foundation for every student's academic and professional growth.",
  },
];

export function HeroSection() {
  const scrollToSection = useScrollToSection();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Memoize nextSlide to prevent render errors
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 9000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden font-montserrat bg-[#0a1e34]">
      
      {/* 1. BACKGROUND SLIDER */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-[8000ms]`}
          >
            <img
              src={slide.image}
              alt={slide.subtitle}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Minimal overlay for clarity */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
          </div>
        ))}
      </div>

      {/* 2. NAVIGATION */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all group active:scale-90"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all group active:scale-90"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* 3. CONTENT AREA - Reduced Title Font Size */}
      <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 mb-20">
        <div key={currentSlide} className="max-w-3xl animate-fade-in-up">
          <h1 className="text-white text-3xl md:text-5xl font-black leading-tight mb-4 uppercase tracking-tighter">
            {slides[currentSlide].title} <br />
            <span className="text-white">{slides[currentSlide].subtitle}</span>
          </h1>

          <p className="max-w-xl text-gray-100 text-sm md:text-base font-medium leading-relaxed mb-10">
            {slides[currentSlide].description}
          </p>

          <button 
            onClick={() => scrollToSection('programs')}
            className="bg-[#b08d57] hover:bg-[#9a7b4c] text-white font-black px-10 py-4 rounded-sm transition-all flex items-center gap-3 shadow-2xl text-xs uppercase tracking-widest active:scale-95 group"
          >
            Explore Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 4. OFFICIAL PARTNERS - Only MINEDUC, RTB, REB */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-4">
        <div className="bg-[#0a1e34] w-full max-w-5xl rounded-t-[2rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border-t border-white/5">
          <div className="text-white flex-shrink-0">
            <h3 className="text-lg md:text-xl font-black leading-tight uppercase">
              Official Partners
            </h3>
          </div>

          <div className="bg-white rounded-xl py-4 px-8 md:px-12 flex justify-around items-center gap-8 md:gap-16 w-full md:w-auto shadow-inner">
            <img src="/seal_480x480.jpg" alt="MINEDUC" className="h-8 md:h-12 object-contain" />
            <img src="/logortb.jpg" alt="RTB" className="h-8 md:h-12 object-contain" />
            <img src="/REB_Logo.png" alt="REB" className="h-8 md:h-12 object-contain" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800;900&display=swap');

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}