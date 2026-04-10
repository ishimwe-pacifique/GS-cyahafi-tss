'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Container } from '../layout/Container';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jean Paul',
    role: 'TVET Graduate - FBO',
    content: 'The Food and Beverage Operations program equipped me with practical skills that landed me a great job. Very hands-on and professional training.',
    image: '/user-avatar-male-5.png',
  },
  {
    id: 2,
    name: 'Mutoni Alice',
    role: 'Parent - Nursery',
    content: 'The school has provided my children with outstanding education and character development. The staff is very supportive and caring.',
    image: '/person-with-blue-shirt-that-says-name-person_1029948-7040_flRrNN8.png',
  },
  {
    id: 3,
    name: 'Nshuti Eric',
    role: 'Alumni - BDC (Construction)',
    content: 'GS Cyahafi TSS transformed my technical journey. The quality of BDC training helped me become a professional in the construction industry.',
    image: '/user-avatar-male-5.png',
  },
  {
    id: 4,
    name: 'Uwase Solange',
    role: 'Student - General Education',
    content: 'A great learning environment with excellent teachers. The focus on discipline and academic excellence is what makes this school unique.',
    image: '/person-with-blue-shirt-that-says-name-person_1029948-7040_flRrNN8.png',
  },
];

export function TestimonialSection() {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-slide logic to toggle between the two pairs
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Split testimonials into groups of 2 to match the image layout
  const displayedTestimonials = activeTab === 0 
    ? testimonials.slice(0, 2) 
    : testimonials.slice(2, 4);

  return (
    <section className="relative py-28 bg-[#1a2e44] overflow-hidden font-montserrat">
      {/* Background Image with Dark Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image1.jpeg" // Your school background
          alt="GS Cyahafi Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-[#0f233a]/85" />
      </div>

      <Container className="relative z-10 text-white">
        {/* Header Section - Positioned exactly like the image */}
        <div className="mb-20">
          <div className="inline-block border-b-2 border-white/30 mb-2">
            <h4 className="text-sm font-bold uppercase tracking-widest pb-1">
              Testimonial
            </h4>
          </div>
          <h2 className="text-3xl md:text-4xl font-black">
    What they say
  </h2>
        </div>

        {/* Testimonials Grid (2 columns) */}
        <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12 min-h-[200px] transition-all duration-500 ease-in-out">
          {displayedTestimonials.map((item) => (
            <div key={item.id} className="flex gap-6 items-start animate-in fade-in slide-in-from-right-5 duration-700">
              
              {/* Avatar Column */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Yellow Quote Badge */}
                <div className="absolute -top-3 -right-3 bg-[#FFC107] p-2 rounded-lg shadow-xl">
                  <Quote size={20} className="fill-[#1a2e44] text-[#1a2e44]" />
                </div>
              </div>

              {/* Content Column */}
              <div className="space-y-5">
                <p className="text-[15px] md:text-base text-gray-200 leading-relaxed font-medium">
                  {item.content}
                </p>
                <div>
                  <h5 className="text-lg font-extrabold text-white">
                    {item.name}
                  </h5>
                  <p className="text-sm font-semibold text-gray-400">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-20">
          <button 
            onClick={() => setActiveTab(0)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${activeTab === 0 ? 'bg-[#FFC107] scale-125' : 'bg-white/40'}`} 
          />
          <button 
            onClick={() => setActiveTab(1)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${activeTab === 1 ? 'bg-[#FFC107] scale-125' : 'bg-white/40'}`} 
          />
        </div>
      </Container>
    </section>
  );
}