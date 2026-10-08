'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { EducationLevelsSection } from '@/components/sections/EducationLevelsSection';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  GraduationCap,
  Baby,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Maximize2,
  X,
  Award,
  ChevronDown,
  Compass,
  FlaskConical,
  Laptop,
  Users,
  ShieldCheck,
  Building,
} from 'lucide-react';
import Link from 'next/link';

// Dedicated O'Level Photos from public/O'LEVEL folder
const OLEVEL_GALLERY_IMAGES = [
  {
    id: 1,
    src: "/O'LEVEL/O'LEVEL.jpeg",
    title: 'Classroom Instruction & Teacher Guidance',
    caption: 'Interactive teaching session in Lower Secondary (O-Level) with dedicated educators providing individual and group support.',
    tag: 'S1 - S3 Classroom',
  },
  {
    id: 2,
    src: "/O'LEVEL/O'LEVEL2.jpeg",
    title: 'Dedicated Student Focus & Study',
    caption: 'O-Level students actively engaged in course study, note taking, and preparing for national academic assessments.',
    tag: 'Academic Rigor',
  },
  {
    id: 3,
    src: "/O'LEVEL/O'LEVEL (2).jpeg",
    title: 'Collaborative Group Learning & Discussion',
    caption: 'Fostering teamwork, communication, and peer-to-peer problem solving according to the Rwanda Competency-Based Curriculum.',
    tag: 'CBC Methodology',
  },
];

const FAQS = [
  {
    q: 'What academic levels are offered under General Education at GS Cyahafi?',
    a: 'GS Cyahafi offers three main general education levels: Nursery & Early Childhood Development (Baby, Middle, Top Class), Primary Education (P1 through P6), and Lower Secondary / Ordinary Level (O-Level S1 through S3).',
  },
  {
    q: 'What curriculum is taught in Primary and O-Level at GS Cyahafi?',
    a: 'We strictly follow the Rwanda Basic Education Board (REB) Competency-Based Curriculum (CBC), emphasizing core subjects like Mathematics, Sciences, Kinyarwanda, English, French, ICT, and Entrepreneurship.',
  },
  {
    q: 'How does O-Level at GS Cyahafi prepare students for future studies?',
    a: 'Upon completing Ordinary Level (S3) and sitting for the NESA National Examinations, students can seamlessly transition into GS Cyahafi’s renowned TVET Technical Secondary School (TSS) streams (Networking, Software Development, Culinary Arts) or pursue Advanced Level (A-Level) academic tracks.',
  },
  {
    q: 'What are the general admission requirements for new students?',
    a: 'Requirements include a completed application form, copy of the student’s birth certificate, official transfer letters or previous report cards (PLE results for O-Level entry), and passport photographs.',
  },
];

export default function AcademicLevelsPage() {
  const [activeLightboxImg, setActiveLightboxImg] = useState<{ src: string; title: string; caption: string } | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="w-full bg-white font-montserrat min-h-screen text-[#0a1e34]">
      <Navigation />

      {/* --- HERO BANNER SECTION WITH CLEAN IMAGE SHOWCASE --- */}
      <section className="relative min-h-[360px] sm:min-h-[450px] md:min-h-[520px] bg-slate-900 text-white overflow-hidden flex flex-col justify-end pb-8">
        {/* Background Image - Bright, Clean & 100% Clearly Visible */}
        <div className="absolute inset-0 z-0">
          <img
            src="/O'LEVEL/O'LEVEL.jpeg"
            alt="GS Cyahafi General Education"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
          />
          {/* Very light bottom gradient to blend seamlessly into level chips */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e34]/90 via-transparent to-black/20" />
        </div>

        <Container>
          {/* Quick Stats & Level Navigation Chips Banner */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/20 pt-6">
            <a href="#ecd-nursery" className="group">
              <div className="bg-[#0a1e34]/90 backdrop-blur-md p-4 border border-[#b08d57]/50 rounded-lg flex items-center gap-4 transition-all duration-300 hover:border-[#b08d57] hover:bg-[#0a1e34] shadow-xl">
                <div className="w-11 h-11 rounded bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#b08d57] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Baby size={22} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#b08d57] transition-colors">Nursery & ECD</p>
                  <p className="text-[11px] text-slate-300 font-medium">Baby, Middle & Top Class</p>
                </div>
              </div>
            </a>

            <a href="#primary-school" className="group">
              <div className="bg-[#0a1e34]/90 backdrop-blur-md p-4 border border-[#b08d57]/50 rounded-lg flex items-center gap-4 transition-all duration-300 hover:border-[#b08d57] hover:bg-[#0a1e34] shadow-xl">
                <div className="w-11 h-11 rounded bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#b08d57] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <BookOpen size={22} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#b08d57] transition-colors">Primary School</p>
                  <p className="text-[11px] text-slate-300 font-medium">Grades P1 through P6</p>
                </div>
              </div>
            </a>

            <a href="#lower-secondary" className="group">
              <div className="bg-[#0a1e34]/90 backdrop-blur-md p-4 border border-[#b08d57]/50 rounded-lg flex items-center gap-4 transition-all duration-300 hover:border-[#b08d57] hover:bg-[#0a1e34] shadow-xl">
                <div className="w-11 h-11 rounded bg-[#b08d57]/20 border border-[#b08d57]/40 flex items-center justify-center text-[#b08d57] flex-shrink-0 group-hover:scale-110 transition-transform">
                  <GraduationCap size={22} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase text-white group-hover:text-[#b08d57] transition-colors">Ordinary Level</p>
                  <p className="text-[11px] text-slate-300 font-medium">Lower Secondary S1 - S3</p>
                </div>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* --- FEATURED O'LEVEL SPOTLIGHT & PHOTO GALLERY SECTION --- */}
      <section id="olevel-spotlight" className="py-20 bg-white border-b border-slate-200">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-[#0a1e34]/5 border border-[#b08d57]/30 px-3.5 py-1 rounded-full mb-3">
                <GraduationCap size={14} className="text-[#b08d57]" />
                <span className="text-[#b08d57] font-black uppercase tracking-[0.2em] text-[11px]">
                  Secondary School Life & Student Spotlight
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0a1e34]">
                Ordinary Level <span className="text-[#b08d57]">(O-Level S1 - S3)</span> in Action
              </h2>
              <div className="w-16 h-1 bg-[#b08d57] my-3" />
              <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                Take an exclusive look into our lower secondary learning environment. Our O-Level program combines academic rigor, practical STEM problem-solving, and collaborative student teamwork.
              </p>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 bg-slate-100 text-[#0a1e34] border border-slate-300 px-4 py-2 text-xs font-black uppercase tracking-wider">
                <ShieldCheck size={16} className="text-[#b08d57]" /> REB Competency Based
              </span>
            </div>
          </div>

          {/* O'Level 3-Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OLEVEL_GALLERY_IMAGES.map((img) => (
              <div
                key={img.id}
                className="group bg-white border border-slate-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-1"
              >
                {/* Image Container with Hover Zoom & Click Lightbox */}
                <div
                  onClick={() => setActiveLightboxImg(img)}
                  className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-slate-900 cursor-pointer rounded-lg"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e34]/90 via-transparent to-black/30 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 bg-[#0a1e34] text-white border border-[#b08d57] text-[10px] font-black uppercase tracking-wider px-3 py-1 shadow">
                    {img.tag}
                  </div>

                  {/* Zoom Icon Button */}
                  <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-[#0a1e34]/90 text-[#b08d57] border border-[#b08d57]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Maximize2 size={16} />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-black uppercase text-[#0a1e34] leading-snug mb-2 group-hover:text-[#b08d57] transition-colors">
                      {img.title}
                    </h3>
                    <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                      {img.caption}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveLightboxImg(img)}
                    className="w-full mt-2 py-2.5 px-4 bg-slate-100 hover:bg-[#0a1e34] text-[#0a1e34] hover:text-white border border-slate-300 hover:border-[#0a1e34] text-[11px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                  >
                    <span>Enlarge Photo</span>
                    <Maximize2 size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- GENERAL EDUCATION LEVELS COMPONENT WITH INTERACTIVE CARDS --- */}
      <EducationLevelsSection />

      {/* --- 4 PILLARS OF ACADEMIC EXCELLENCE --- */}
      <section className="py-20 bg-white border-y border-slate-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-xs">
              Why Parents & Students Choose GS Cyahafi
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0a1e34] mt-2 mb-4">
              Pillars of <span className="text-[#b08d57]">General Education Excellence</span>
            </h2>
            <div className="w-16 h-1 bg-[#b08d57] mx-auto mb-6" />
            <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
              We provide a supportive, disciplined, and modern learning environment where every learner develops intellectual curiosity and strong civic character.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl hover:border-[#0a1e34] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-[#0a1e34] text-[#b08d57] rounded-lg flex items-center justify-center mb-4">
                <FlaskConical size={24} />
              </div>
              <h3 className="text-base font-black uppercase text-[#0a1e34] mb-2">STEM & Hands-on Science</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Modern physics, chemistry, and biology labs for lower secondary O-Level students to conduct practical experiments.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl hover:border-[#0a1e34] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-[#0a1e34] text-[#b08d57] rounded-lg flex items-center justify-center mb-4">
                <Laptop size={24} />
              </div>
              <h3 className="text-base font-black uppercase text-[#0a1e34] mb-2">Digital Literacy & ICT</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Computer labs equipping students with typing, basic programming, internet research, and digital problem-solving skills.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl hover:border-[#0a1e34] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-[#0a1e34] text-[#b08d57] rounded-lg flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-base font-black uppercase text-[#0a1e34] mb-2">Qualified Teaching Staff</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Experienced educators certified by REB, dedicated to individual student progress and continuous assessment.
              </p>
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 p-6 rounded-xl hover:border-[#0a1e34] transition-colors shadow-sm">
              <div className="w-12 h-12 bg-[#0a1e34] text-[#b08d57] rounded-lg flex items-center justify-center mb-4">
                <Compass size={24} />
              </div>
              <h3 className="text-base font-black uppercase text-[#0a1e34] mb-2">Direct TVET Pathways</h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                O-Level graduates enjoy seamless entry options into GS Cyahafi’s high-demand Technical Secondary School (TSS) options.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- FAQ SECTION FOR GENERAL EDUCATION --- */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-xs">
                Parents & Students Guide
              </span>
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0a1e34] mt-2 mb-3">
                Frequently Asked <span className="text-[#b08d57]">Questions</span>
              </h2>
              <div className="w-14 h-1 bg-[#b08d57] mx-auto" />
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-200 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-black uppercase text-sm text-[#0a1e34] hover:text-[#b08d57] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-[#b08d57] transition-transform duration-300 flex-shrink-0 ${openFaqIndex === idx ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-5 pt-0 border-t border-slate-100 text-slate-600 text-xs md:text-sm font-medium leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* --- ENROLLMENT BANNER (GENERAL EDUCATION) --- */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto bg-[#0a1e34] text-white border-4 border-[#b08d57] p-8 md:p-14 shadow-2xl relative rounded-xl overflow-hidden">
            {/* Background Accent Gradient */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#b08d57]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-5">
              <div className="inline-block bg-[#b08d57] text-[#0a1e34] font-black uppercase tracking-[0.2em] text-[10px] px-3 py-1">
                Student Registration & Intake
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                Enroll Your Child for Nursery, Primary, or O-Level
              </h2>

              <p className="text-slate-300 font-medium text-sm md:text-base leading-relaxed max-w-2xl">
                General Education admissions are open. Visit our administration office in Nyarugenge, Kigali or reach out online for entry requirements, transfer procedures, and school fee details.
              </p>

              <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <CheckCircle2 size={16} className="text-[#b08d57]" /> Certified Experienced Teachers
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <CheckCircle2 size={16} className="text-[#b08d57]" /> REB Competency Curriculum
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <CheckCircle2 size={16} className="text-[#b08d57]" /> Safe & Equipping Environment
                </div>
              </div>

              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Link href="/contact">
                  <Button className="bg-[#b08d57] hover:bg-white hover:text-[#0a1e34] text-[#0a1e34] rounded-none px-8 py-6 font-black uppercase text-xs tracking-[0.2em] transition-all flex items-center gap-3 shadow-xl active:scale-95">
                    <span>Contact Admissions Office</span>
                    <ArrowRight size={16} />
                  </Button>
                </Link>
                <a
                  href="tel:+250788000000"
                  className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white underline underline-offset-4"
                >
                  Call Administration Office
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- LIGHTBOX MODAL FOR O'LEVEL PHOTOS --- */}
      {activeLightboxImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-4xl w-full bg-[#0a1e34] border-2 border-[#b08d57] rounded-xl overflow-hidden shadow-2xl text-white">
            {/* Close Button */}
            <button
              onClick={() => setActiveLightboxImg(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-[#b08d57] text-white hover:text-[#0a1e34] rounded-full transition-colors"
              aria-label="Close photo overlay"
            >
              <X size={22} />
            </button>

            {/* Photo */}
            <div className="max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeLightboxImg.src}
                alt={activeLightboxImg.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>

            {/* Caption Footer */}
            <div className="p-6 bg-[#0a1e34] border-t border-slate-700">
              <h3 className="text-xl font-black uppercase text-[#b08d57] mb-1">
                {activeLightboxImg.title}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm font-medium leading-relaxed">
                {activeLightboxImg.caption}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

