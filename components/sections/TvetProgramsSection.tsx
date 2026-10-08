'use client';

import { useState } from 'react';
import {
  ChefHat,
  Hammer,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  Maximize2,
  X,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';

// All 8 TVET images from public/TVET folder
const ALL_TVET_IMAGES = [
  { src: '/TVET/fbo.jpeg', title: 'Food & Beverage Culinary Training', dept: 'FBO' },
  { src: '/TVET/fbo1.jpeg', title: 'Food Service & Practical Preparation', dept: 'FBO' },
  { src: '/TVET/fbo2.jpeg', title: 'Hospitality & Kitchen Hygiene Practice', dept: 'FBO' },
  { src: '/TVET/BDC.jpeg', title: 'Masonry & Structural Practice', dept: 'BDC' },
  { src: '/TVET/BDC1.jpeg', title: 'Building Construction Workshop', dept: 'BDC' },
  { src: '/TVET/BDC2.jpeg', title: 'Site Measurement & Bricklaying', dept: 'BDC' },
  { src: '/TVET/BDC3.jpeg', title: 'Concrete Engineering & Scaffolding', dept: 'BDC' },
  { src: '/TVET/BDC4.jpeg', title: 'Practical Construction Project Work', dept: 'BDC' },
];

const FBO_IMAGES = ['/TVET/fbo.jpeg', '/TVET/fbo1.jpeg', '/TVET/fbo2.jpeg'];
const BDC_IMAGES = [
  '/TVET/BDC.jpeg',
  '/TVET/BDC1.jpeg',
  '/TVET/BDC2.jpeg',
  '/TVET/BDC3.jpeg',
  '/TVET/BDC4.jpeg',
];

export function TvetProgramsSection() {
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="bg-white font-montserrat text-[#0a1e34]">
      {/* --- DEPARTMENT 1: FOOD & BEVERAGE OPERATIONS (FBO) --- */}
      <section id="fbo" className="py-16 border-b border-slate-200">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#0a1e34]/5 border border-[#b08d57]/30 px-3.5 py-1 rounded-full mb-3">
                <ChefHat size={16} className="text-[#b08d57]" />
                <span className="text-[#b08d57] font-black uppercase tracking-[0.2em] text-xs">
                  FBO Department
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0a1e34]">
                Food & Beverage Operations
              </h2>
              <div className="w-16 h-1 bg-[#b08d57] my-3" />
              <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                Comprehensive practical training in professional culinary arts, baking, food safety, restaurant service, and hospitality management.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#b08d57]" /> 3 Years Duration</span>
              <span className="flex items-center gap-1.5"><Award size={14} className="text-[#b08d57]" /> Level 5 Diploma</span>
            </div>
          </div>

          {/* FBO Photo Showcase - Slim, Very Small Frame */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {FBO_IMAGES.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImg({ src: imgSrc, title: `Food & Beverage Operations - Photo ${idx + 1}` })}
                className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 p-1 flex items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={`FBO Training ${idx + 1}`}
                  className="w-full h-auto max-h-[480px] object-cover rounded transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Minimal zoom icon on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                  <div className="w-10 h-10 rounded-full bg-[#0a1e34]/90 text-[#b08d57] border border-[#b08d57] flex items-center justify-center shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Competencies - Clean Open List */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-xl border border-slate-200">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#0a1e34] mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-[#b08d57]" /> Practical Skills Learned
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Professional Culinary Preparation</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Pastry & Bakery Production</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Food Hygiene & HACCP Standards</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Restaurant Table & Bar Service</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Menu Planning & Costing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Industrial Internship Placement</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- DEPARTMENT 2: BUILDING CONSTRUCTION (BDC) --- */}
      <section id="bdc" className="py-16 border-b border-slate-200 bg-slate-50/50">
        <Container>
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#0a1e34]/5 border border-[#b08d57]/30 px-3.5 py-1 rounded-full mb-3">
                <Hammer size={16} className="text-[#b08d57]" />
                <span className="text-[#b08d57] font-black uppercase tracking-[0.2em] text-xs">
                  BDC Department
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0a1e34]">
                Building Construction
              </h2>
              <div className="w-16 h-1 bg-[#b08d57] my-3" />
              <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                Hands-on practical education in structural masonry, concrete technology, architectural drawing, measurement, and site safety management.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#b08d57]" /> 3 Years Duration</span>
              <span className="flex items-center gap-1.5"><Award size={14} className="text-[#b08d57]" /> Level 5 Diploma</span>
            </div>
          </div>

          {/* BDC Photo Showcase - Slim, Very Small Frame */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {BDC_IMAGES.map((imgSrc, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImg({ src: imgSrc, title: `Building Construction - Photo ${idx + 1}` })}
                className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 p-1 flex items-center justify-center"
              >
                <img
                  src={imgSrc}
                  alt={`BDC Training ${idx + 1}`}
                  className="w-full h-auto max-h-[420px] object-cover rounded transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Minimal zoom button on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                  <div className="w-10 h-10 rounded-full bg-[#0a1e34]/90 text-[#b08d57] border border-[#b08d57] flex items-center justify-center shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Competencies - Clean Open List */}
          <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#0a1e34] mb-4 flex items-center gap-2">
              <Sparkles size={16} className="text-[#b08d57]" /> Practical Skills Learned
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Bricklaying & Wall Masonry</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Reinforced Concrete Works</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Architectural Blueprint Reading</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Site Levelling & Surveying</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Construction Site Safety Protocols</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 size={16} className="text-[#b08d57] flex-shrink-0" />
                <span>Building Materials Testing</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- ALL 8 TVET PHOTOS GALLERY - SLIM VERY SMALL FRAME --- */}
      <section className="py-16 border-b border-slate-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-xs">
              Hands-On Practical Training
            </span>
            <h2 className="text-3xl font-black uppercase text-[#0a1e34] mt-2 mb-3">
              TVET Workshop & Practice Gallery
            </h2>
            <div className="w-16 h-1 bg-[#b08d57] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_TVET_IMAGES.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveLightboxImg({ src: img.src, title: img.title })}
                className="group relative bg-white rounded-lg border border-slate-200 overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 p-1 flex items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto max-h-[380px] object-cover rounded transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                  <div className="w-10 h-10 rounded-full bg-[#0a1e34]/90 text-[#b08d57] border border-[#b08d57] flex items-center justify-center shadow-lg">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- LIGHTBOX OVERLAY --- */}
      {activeLightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#0a1e34] border border-[#b08d57] rounded-lg overflow-hidden shadow-2xl text-white">
            <button
              onClick={() => setActiveLightboxImg(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-[#b08d57] text-white hover:text-[#0a1e34] rounded-full transition-colors"
            >
              <X size={22} />
            </button>
            <div className="max-h-[75vh] bg-black flex items-center justify-center">
              <img
                src={activeLightboxImg.src}
                alt={activeLightboxImg.title}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>
            <div className="p-4 bg-[#0a1e34] text-center border-t border-slate-700">
              <p className="text-sm font-black uppercase text-[#b08d57]">{activeLightboxImg.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

