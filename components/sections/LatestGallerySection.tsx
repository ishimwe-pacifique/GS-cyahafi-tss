'use client';

import { useState } from 'react';
import { Container } from '../layout/Container';
import { ImageIcon, Maximize2, ArrowRight, X } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

const galleryData = [
  {
    id: 1,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    alt: 'Secondary School Assembly',
    category: 'General Education',
    flex: 'flex-[2]', 
  },
  {
    id: 2,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg',
    alt: 'Advanced IT Lab Training',
    category: 'Technical Dept',
    flex: 'flex-[1]',
  },
  {
    id: 3,
    src: '/Student1.jpeg',
    alt: 'Practical Workshop Session',
    category: 'TVET Programs',
    flex: 'flex-[1]',
  },
  {
    id: 4,
    src: '/image1.jpeg',
    alt: 'Foundational Learning',
    category: 'Nursery & Primary',
    flex: 'flex-[1]',
  },
];

export function LatestGallerySection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-white font-montserrat overflow-hidden">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-[#b08d57]"></span>
            <span className="text-[#b08d57] font-bold uppercase tracking-[0.2em] text-[10px]">Gallery</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#0a1e34] tracking-tighter leading-none mb-6">
            Inside <span className="text-[#b08d57]">GS Cyahafi</span> TSS
          </h2>
          <p className="text-gray-500 font-medium max-w-lg leading-relaxed">
            A glimpse into our secondary school life, from high-level technical workshops 
            to dedicated general education classrooms.
          </p>
        </div>

        {/* --- Interactive Accordion Gallery --- */}
        <div className="flex flex-col md:flex-row gap-4 h-[600px] w-full group/main">
          {galleryData.map((image) => (
            <div
              key={image.id}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedImage(image.src)}
              className={`relative overflow-hidden rounded-[2rem] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer shadow-2xl
                ${hoveredId === image.id ? 'md:flex-[3] flex-[4]' : image.flex} 
                ${hoveredId !== null && hoveredId !== image.id ? 'md:flex-[0.8] flex-[0.5] opacity-40 grayscale-[50%]' : 'opacity-100'}
              `}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-1000 scale-[1.05]"
              />

              <div className={`absolute inset-0 bg-gradient-to-t from-[#0a1e34] via-transparent to-transparent transition-opacity duration-500 
                ${hoveredId === image.id ? 'opacity-90' : 'opacity-60'}`} 
              />

              {/* Icon Badge */}
              <div className={`absolute top-8 right-8 transition-all duration-500 hidden md:block
                ${hoveredId === image.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              >
                <div className="bg-white/10 backdrop-blur-xl p-4 rounded-full border border-white/20 text-white shadow-2xl hover:bg-[#b08d57] transition-colors">
                  <Maximize2 size={24} />
                </div>
              </div>

              {/* Content Box */}
              <div className={`absolute inset-0 flex flex-col justify-end p-8 md:p-12 transition-all duration-500
                ${hoveredId === image.id ? 'translate-x-0 opacity-100' : 'md:translate-x-4 opacity-0 md:opacity-0'}`}
              >
                <div className="md:max-w-xs">
                  <p className="text-[#b08d57] font-black uppercase tracking-[0.2em] text-[10px] mb-3">
                    {image.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4 tracking-tight">
                    {image.alt}
                  </h3>
                  <div className="h-1 w-12 bg-[#b08d57] rounded-full"></div>
                </div>
              </div>
              
              {/* Vertical Title (Hidden on expand) */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-500 hidden md:flex
                ${hoveredId === image.id ? 'opacity-0 scale-95' : 'opacity-100 scale-100 delay-100'}`}
              >
                <p className="rotate-90 text-white/40 font-bold uppercase tracking-[0.4em] text-[10px] whitespace-nowrap">
                  {image.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="mt-12 flex justify-center">
          <Link href="/gallery">
            <Button className="group bg-[#0a1e34] hover:bg-[#b08d57] text-white px-10 py-7 rounded-full transition-all duration-500 flex items-center gap-3 font-bold uppercase text-[10px] tracking-[0.15em] shadow-xl">
              Full Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* --- LIGHTBOX MODAL --- */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm transition-all animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <div className="relative w-[90%] h-[80%] max-w-6xl">
              <img 
                src={selectedImage} 
                alt="Full View" 
                className="w-full h-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
              />
            </div>
          </div>
        )}

        <p className="mt-6 md:hidden text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Tap an image to see full size
        </p>
      </Container>
    </section>
  );
}