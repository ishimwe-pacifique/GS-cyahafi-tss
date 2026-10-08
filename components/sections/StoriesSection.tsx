'use client';

import { Container } from '../layout/Container';
import { Button } from '../ui/button';
import { ArrowUpRight, Calendar, Tag, Sparkles } from 'lucide-react';
import { STORIES_DATA } from '@/lib/stories';
import Link from 'next/link';

export function StoriesSection() {
  return (
    <section id="stories" className="py-24 px-4 bg-white font-montserrat">
      <Container>
        {/* SHARP HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-4 border-[#0a1e34] pb-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#0a1e34]/5 border border-[#b08d57]/30 px-3.5 py-1 rounded-full mb-2">
              <Sparkles size={14} className="text-[#b08d57]" />
              <span className="text-[#b08d57] font-black uppercase tracking-[0.2em] text-[10px]">
                GS Cyahafi TSS Newsroom
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1e34] uppercase tracking-tighter">
              Latest Stories & <span className="text-[#b08d57]">News</span>
            </h2>
          </div>
          <Link href="/stories/koica-5th-cohort">
            <Button className="bg-[#0a1e34] hover:bg-[#b08d57] text-white font-black px-8 py-3 rounded-none transition-all text-[10px] uppercase tracking-widest shadow-md">
              View Featured News
            </Button>
          </Link>
        </div>

        {/* STORIES GRID - Direct Page Links (NO MODALS) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STORIES_DATA.map((story) => (
            <Link key={story.id} href={`/stories/${story.id}`} className="group">
              <article className="h-full flex flex-col bg-slate-50 border-2 border-slate-200 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#0a1e34] hover:shadow-xl group">
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a1e34] text-white text-[9px] font-black px-3 py-1 uppercase tracking-widest border border-[#b08d57]/50 shadow">
                    {story.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-slate-400 text-[10px] font-bold mb-2 uppercase tracking-widest flex items-center gap-1.5">
                      <Calendar size={12} className="text-[#b08d57]" />
                      {story.date}
                    </div>
                    <h3 className="text-base font-black text-[#0a1e34] mb-3 leading-snug uppercase group-hover:text-[#b08d57] transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3 font-medium">
                      {story.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1e34] group-hover:text-[#b08d57]">
                    <span>Read Full Story</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}