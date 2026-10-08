'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { STORIES_DATA, Story } from '@/lib/stories';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import {
  ArrowLeft,
  Calendar,
  Maximize2,
  X,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

export default function StoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const storyId = params.id as string;

  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; caption: string } | null>(null);

  // Find the story matching route parameter id
  const story = STORIES_DATA.find((s) => s.id === storyId) || STORIES_DATA[0];

  // Other stories for related section
  const relatedStories = STORIES_DATA.filter((s) => s.id !== story.id).slice(0, 3);

  const galleryList = story.galleryImages && story.galleryImages.length > 0
    ? story.galleryImages
    : [story.image];

  return (
    <div className="w-full bg-slate-50 font-montserrat min-h-screen text-[#0a1e34]">
      <Navigation />

      {/* --- TOP BREADCRUMB & ACTION BAR --- */}
      <div className="bg-[#0a1e34] text-white py-6 border-b border-slate-800">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => router.push('/#stories')}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#b08d57] hover:text-white transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Stories & News</span>
            </button>

            <div className="flex items-center gap-3 text-xs text-slate-300 font-bold uppercase tracking-wider">
              <span className="bg-[#b08d57] text-[#0a1e34] px-3 py-1 text-[10px] font-black">
                {story.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-[#b08d57]" /> {story.date}
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* --- ARTICLE HERO SECTION --- */}
      <section className="py-12 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#0a1e34]/5 border border-[#b08d57]/30 px-4 py-1.5 rounded-full">
              <Sparkles size={14} className="text-[#b08d57]" />
              <span className="text-[#b08d57] font-black uppercase tracking-[0.2em] text-[11px]">
                Official School News Release
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0a1e34] leading-tight">
              {story.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed border-l-4 border-[#b08d57] pl-4 italic">
              {story.excerpt}
            </p>
          </div>
        </Container>
      </section>

      {/* --- FEATURED MAIN COVER IMAGE --- */}
      <section className="py-10 bg-slate-900">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div
              onClick={() => setActiveLightboxImg({ src: story.image, caption: story.title })}
              className="group relative bg-black rounded-xl border-2 border-[#b08d57]/60 overflow-hidden cursor-pointer shadow-2xl p-2 flex items-center justify-center"
            >
              <img
                src={story.image}
                alt={story.title}
                className="w-full max-h-[560px] object-contain object-center group-hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#0a1e34]/90 text-[#b08d57] border border-[#b08d57] flex items-center justify-center shadow-2xl">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-wider mt-3">
              📷 Featured Photo: {story.title} (Click to expand)
            </p>
          </div>
        </Container>
      </section>

      {/* --- ARTICLE CONTENT BODY --- */}
      <section className="py-16 bg-white border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Story Full Paragraphs - Clean rendering with no cards */}
            <div className="space-y-6 text-slate-700 text-base md:text-lg font-medium leading-relaxed">
              {story.fullStory.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="first-letter:text-3xl first-letter:font-black first-letter:text-[#0a1e34]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- COMPLETE ARTICLE PHOTO GALLERY --- */}
      <section className="py-16 bg-slate-100 border-b border-slate-200">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-xs">
                Event Photo Collection
              </span>
              <h2 className="text-3xl font-black uppercase text-[#0a1e34] mt-2 mb-3">
                Event Gallery & Photos ({galleryList.length} Photos)
              </h2>
              <div className="w-16 h-1 bg-[#b08d57] mx-auto" />
              <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
                Click any photo to enlarge and view in full high-resolution.
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryList.map((imgSrc, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveLightboxImg({ src: imgSrc, caption: `${story.title} - Photo ${idx + 1}` })}
                  className="group relative bg-white rounded-xl border border-slate-300 overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 p-1 flex items-center justify-center"
                >
                  <img
                    src={imgSrc}
                    alt={`Event Photo ${idx + 1}`}
                    className="w-full h-auto max-h-[360px] object-cover rounded transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded">
                    <div className="w-10 h-10 rounded-full bg-[#0a1e34]/90 text-[#b08d57] border border-[#b08d57] flex items-center justify-center shadow-lg">
                      <Maximize2 size={18} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- RELATED NEWS / STORIES --- */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-10 border-b-2 border-[#0a1e34] pb-4">
              <h3 className="text-2xl font-black uppercase text-[#0a1e34]">
                Related <span className="text-[#b08d57]">News & Stories</span>
              </h3>
              <Link href="/#stories">
                <Button className="bg-[#0a1e34] hover:bg-[#b08d57] text-white text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-none">
                  View All
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedStories.map((item) => (
                <Link key={item.id} href={`/stories/${item.id}`} className="group">
                  <div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="relative h-48 bg-slate-900 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 bg-[#0a1e34] text-white px-2.5 py-1 text-[9px] font-black uppercase">
                          {item.category}
                        </span>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                          {item.date}
                        </p>
                        <h4 className="text-base font-black text-[#0a1e34] uppercase line-clamp-2 leading-snug group-hover:text-[#b08d57] transition-colors mb-2">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 font-medium line-clamp-2 leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 flex items-center text-[10px] font-black uppercase tracking-widest text-[#0a1e34]">
                      Read Story <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- LIGHTBOX OVERLAY --- */}
      {activeLightboxImg && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-[#0a1e34] border-2 border-[#b08d57] rounded-xl overflow-hidden shadow-2xl text-white">
            <button
              onClick={() => setActiveLightboxImg(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/70 hover:bg-[#b08d57] text-white hover:text-[#0a1e34] rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            <div className="max-h-[80vh] bg-black flex items-center justify-center p-2">
              <img
                src={activeLightboxImg.src}
                alt={activeLightboxImg.caption}
                className="w-full max-h-[80vh] object-contain"
              />
            </div>
            <div className="p-4 bg-[#0a1e34] text-center border-t border-slate-700">
              <p className="text-sm font-black uppercase text-[#b08d57]">{activeLightboxImg.caption}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
