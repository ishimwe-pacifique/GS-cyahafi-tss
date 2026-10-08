'use client';

import { useState } from 'react';
import {
  Baby,
  BookOpen,
  GraduationCap,
  CheckCircle2,
  Clock,
  Award,
  ArrowRight,
  X,
  FileText,
  Building2,
  Users,
  Image as ImageIcon,
  Sparkles,
} from 'lucide-react';
import { Container } from '../layout/Container';

export interface AcademicLevel {
  id: string;
  badge: string;
  title: string;
  kinyarwandaTitle: string;
  grades: string;
  ageRange: string;
  icon: typeof Baby;
  image: string;
  images?: string[];
  description: string;
  duration: string;
  certification: string;
  subjects: string[];
  facilities: string[];
  keyOutcomes: string[];
  curriculumOverview: string;
  admissionRequirements: string[];
}

export const GENERAL_ACADEMIC_LEVELS: AcademicLevel[] = [
  {
    id: 'ecd-nursery',
    badge: 'Nursery & ECD',
    title: 'Early Childhood Development',
    kinyarwandaTitle: 'Icyiciro cy\'Inshuke',
    grades: 'Baby, Middle & Top Class',
    ageRange: '3 - 6 Years',
    icon: Baby,
    image: '/nursury1.jpeg',
    images: ['/nursury1.jpeg', '/nursury2.jpeg'],
    description:
      'Nurturing young minds in a safe, play-centric environment focused on cognitive, physical, emotional, and social development.',
    duration: '3 Years',
    certification: 'ECD Certificate of Completion',
    subjects: [
      'Early Literacy & Kinyarwanda Storytelling',
      'Basic Numeracy & Shape Recognition',
      'Creative Arts, Drawing & Music',
      'Motor Skills & Outdoor Play',
      'Social Etiquette & Hygiene Habits',
    ],
    facilities: [
      'Dedicated Safe Playground',
      'Colorful Toy & Learning Rooms',
      'Child-Friendly Sanitation Facilities',
      'Rest & Activity Areas',
    ],
    keyOutcomes: [
      'Confident spoken expression in Kinyarwanda & introductory English',
      'Strong fine & gross motor skills development',
      'Smooth transition into Primary Education (P1)',
    ],
    curriculumOverview:
      'Our ECD curriculum is structured around play-based learning and multi-sensory discovery. We foster curiosity, confidence, and early social interaction in a warm, family-like school environment.',
    admissionRequirements: [
      'Child age between 3 and 5 years',
      'Copy of Birth Certificate',
      'Immunization & Health Record',
      '2 Passport-size Photographs',
    ],
  },
  {
    id: 'primary-school',
    badge: 'Primary Education',
    title: 'Primary School (P1 - P6)',
    kinyarwandaTitle: 'Amashuri Abanza',
    grades: 'P1 through P6',
    ageRange: '6 - 12 Years',
    icon: BookOpen,
    image: "/O'LEVEL/Primary.jpeg",
    images: ["/O'LEVEL/Primary.jpeg", '/Student1.jpeg', '/about-banner.jpg'],
    description:
      'Building strong academic foundations in literacy, mathematics, science, and civic values following the Rwanda Competency-Based Curriculum (CBC).',
    duration: '6 Years',
    certification: 'Primary Leaving Examination (PLE) Certificate',
    subjects: [
      'Kinyarwanda & English Language Mastery',
      'Mathematics & Basic Logic',
      'Science & Elementary Technology (SET)',
      'Social Studies & Civic Education',
      'French Language Basics',
      'Creative Arts & Physical Education',
    ],
    facilities: [
      'Fully Stocked School Library',
      'Elementary Science & IT Lab',
      'Sports Ground & Athletics Field',
      'Guidance & Counseling Office',
    ],
    keyOutcomes: [
      'High pass rates in National Primary Leaving Exams (PLE)',
      'Bilingual proficiency in Kinyarwanda and English',
      'Strong problem-solving and scientific inquiry foundations',
    ],
    curriculumOverview:
      'Aligned with REB (Rwanda Basic Education Board) CBC standards, our primary program blends rigorous academics with co-curricular activities, leadership training, and ethics.',
    admissionRequirements: [
      'Completed ECD/Nursery Report Card (for P1 entry)',
      'Official Transfer Letter & Report Cards from previous school (P2-P6)',
      'Copy of Birth Certificate',
    ],
  },
  {
    id: 'lower-secondary',
    badge: 'Ordinary Level',
    title: 'Lower Secondary (O-Level S1 - S3)',
    kinyarwandaTitle: 'Icyiciro Rusange cy\'Amashuri Yisumbuye',
    grades: 'S1, S2 & S3',
    ageRange: '12 - 15 Years',
    icon: GraduationCap,
    image: "/O'LEVEL/O'LEVEL.jpeg",
    images: [
      "/O'LEVEL/O'LEVEL.jpeg",
      "/O'LEVEL/O'LEVEL2.jpeg",
      "/O'LEVEL/O'LEVEL (2).jpeg",
    ],
    description:
      'Comprehensive lower secondary education preparing students for advanced technical (TVET/TSS) or academic secondary tracks with strong STEM and practical focus.',
    duration: '3 Years',
    certification: 'National O-Level Certificate (NESA)',
    subjects: [
      'Mathematics, Physics & Chemistry',
      'Biology & Geography',
      'Computer Science & ICT Literacy',
      'English, Kinyarwanda & French',
      'Entrepreneurship & History',
      'Religious & Moral Education',
    ],
    facilities: [
      'Modern Science Laboratories (Physics/Chem/Bio)',
      'Computer & Internet Lab',
      'Debate Club & Language Center',
      'Sports & Culture Facilities',
    ],
    keyOutcomes: [
      'Top performance in National O-Level Examinations',
      'Solid preparation for Technical or Advanced Secondary pathways',
      'Analytical, digital, and entrepreneurial competencies',
    ],
    curriculumOverview:
      'Prepares teenagers for specialized academic or vocational pathways. We emphasize practical science experiments, digital literacy, and critical debate skills.',
    admissionRequirements: [
      'Pass mark in Primary Leaving Examination (PLE)',
      'Official Placement Letter from NESA / REB',
      'Conduct & Character Certificate',
    ],
  },
];

export function EducationLevelsSection() {
  const [selectedLevel, setSelectedLevel] = useState<AcademicLevel | null>(null);
  const [activeImageMap, setActiveImageMap] = useState<Record<string, string>>({
    'ecd-nursery': '/nursury1.jpeg',
    'primary-school': "/O'LEVEL/Primary.jpeg",
    'lower-secondary': "/O'LEVEL/O'LEVEL.jpeg",
  });

  const handleSelectImage = (levelId: string, imgPath: string) => {
    setActiveImageMap((prev) => ({
      ...prev,
      [levelId]: imgPath,
    }));
  };

  return (
    <section id="levels" className="py-20 bg-slate-50 font-montserrat text-[#0a1e34]">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0a1e34]/5 border border-[#b08d57]/30 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} className="text-[#b08d57]" />
            <span className="text-[#b08d57] font-black uppercase tracking-[0.25em] text-[11px]">
              General Education Streams
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0a1e34] mb-4">
            Our <span className="text-[#b08d57]">General Education</span>
          </h2>
          <div className="w-20 h-1.5 bg-[#b08d57] mx-auto mb-6" />
          <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
            GS Cyahafi offers fully accredited general education stages from Early Childhood (Nursery) through Primary to Lower Secondary (O-Level), providing students with strong academic foundations and practical life skills.
          </p>
        </div>

        {/* Academic Levels Cards with Images */}
        <div className="space-y-12">
          {GENERAL_ACADEMIC_LEVELS.map((level, index) => {
            const Icon = level.icon;
            const isReversed = index % 2 === 1;
            const currentImg = activeImageMap[level.id] || level.image;
            const imageList = level.images && level.images.length > 0 ? level.images : [level.image];

            return (
              <div
                key={level.id}
                id={level.id}
                className="bg-white border-2 border-[#0a1e34] rounded-xl shadow-xl overflow-hidden grid md:grid-cols-12 gap-0 transition-all duration-300 hover:shadow-2xl group"
              >
                {/* Image Column */}
                <div
                  className={`md:col-span-5 relative min-h-[300px] md:min-h-[420px] bg-slate-900 overflow-hidden flex flex-col justify-between ${
                    isReversed
                      ? 'md:order-2 border-t-2 md:border-t-0 md:border-l-2 border-[#0a1e34]'
                      : 'border-b-2 md:border-b-0 md:border-r-2 border-[#0a1e34]'
                  }`}
                >
                  {/* Main Active Image */}
                  <img
                    src={currentImg}
                    alt={level.title}
                    className="w-full h-full object-cover object-center absolute inset-0 transition-all duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e34]/90 via-[#0a1e34]/20 to-black/30" />

                  {/* Badge on Image */}
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <span className="bg-[#0a1e34]/90 backdrop-blur-md text-white border border-[#b08d57] px-3.5 py-1.5 text-[11px] font-black uppercase tracking-widest shadow-lg">
                      {level.badge}
                    </span>
                    <span className="bg-[#b08d57] text-[#0a1e34] font-black text-[10px] uppercase tracking-wider px-2.5 py-1">
                      {level.grades}
                    </span>
                  </div>

                  {/* Bottom Image Overlay & Thumbnails Selector */}
                  <div className="relative z-10 p-4 space-y-3">
                    <div className="text-white">
                      <p className="text-xs font-bold text-[#b08d57] uppercase tracking-wider">{level.grades}</p>
                      <p className="text-base font-black text-white drop-shadow">{level.kinyarwandaTitle}</p>
                    </div>

                    {/* Thumbnail Switcher if multiple images exist */}
                    {imageList.length > 1 && (
                      <div className="pt-2 border-t border-white/20 flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1">
                          <ImageIcon size={12} className="text-[#b08d57]" /> Photos:
                        </span>
                        <div className="flex items-center gap-2">
                          {imageList.map((img, i) => (
                            <button
                              key={i}
                              onClick={() => handleSelectImage(level.id, img)}
                              className={`w-10 h-10 rounded border-2 overflow-hidden transition-all ${
                                currentImg === img
                                  ? 'border-[#b08d57] scale-110 shadow-md ring-2 ring-[#b08d57]/50'
                                  : 'border-white/50 opacity-70 hover:opacity-100 hover:border-white'
                              }`}
                              title={`View photo ${i + 1} for ${level.title}`}
                            >
                              <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Column */}
                <div className={`md:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between ${isReversed ? 'md:order-1' : ''}`}>
                  <div>
                    {/* Header Info */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#0a1e34] text-[#b08d57] flex-shrink-0 flex items-center justify-center font-bold shadow-md rounded">
                        <Icon size={26} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black text-[#0a1e34] uppercase tracking-tight">
                          {level.title}
                        </h3>
                        <p className="text-xs font-bold text-[#b08d57] tracking-wider uppercase">
                          {level.kinyarwandaTitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-slate-600 text-sm font-medium leading-relaxed mb-6">
                      {level.description}
                    </p>

                    {/* Quick Info Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-slate-100/80 border border-slate-200 p-3 rounded-lg">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Clock size={13} className="text-[#b08d57]" /> Duration
                        </div>
                        <div className="text-xs font-black text-[#0a1e34] mt-0.5">{level.duration}</div>
                      </div>

                      <div className="bg-slate-100/80 border border-slate-200 p-3 rounded-lg">
                        <div className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                          <Award size={13} className="text-[#b08d57]" /> Target Age
                        </div>
                        <div className="text-xs font-black text-[#0a1e34] mt-0.5">{level.ageRange}</div>
                      </div>
                    </div>

                    {/* Key Subjects */}
                    <div className="space-y-2.5 mb-6">
                      <p className="text-[11px] font-black uppercase tracking-widest text-[#0a1e34] flex items-center gap-1.5">
                        <BookOpen size={14} className="text-[#b08d57]" />
                        Core Subjects & Focus Areas:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {level.subjects.slice(0, 4).map((sub, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded border border-slate-200/60">
                            <CheckCircle2 size={14} className="text-[#b08d57] flex-shrink-0" />
                            <span className="truncate">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      🎓 {level.certification}
                    </span>
                    <button
                      onClick={() => setSelectedLevel(level)}
                      className="bg-[#0a1e34] hover:bg-[#b08d57] text-white text-xs font-black uppercase tracking-widest px-6 py-3 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 shadow-lg group-hover:bg-[#0a1e34]"
                    >
                      <span>View Full Curriculum</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      {/* Detail Modal */}
      {selectedLevel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-white border-4 border-[#0a1e34] w-full max-w-3xl rounded-xl max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative text-[#0a1e34]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedLevel(null)}
              className="absolute top-5 right-5 p-2.5 bg-[#0a1e34] text-white hover:bg-[#b08d57] transition-colors rounded-full shadow-lg"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4 mb-6 border-b-2 border-[#0a1e34] pb-5 pr-10">
              <div className="w-14 h-14 bg-[#0a1e34] text-[#b08d57] rounded-lg flex items-center justify-center font-bold shadow-md flex-shrink-0">
                <selectedLevel.icon size={30} />
              </div>
              <div>
                <span className="bg-[#b08d57] text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 inline-block mb-1">
                  {selectedLevel.badge}
                </span>
                <h3 className="text-2xl font-black uppercase text-[#0a1e34] tracking-tight">
                  {selectedLevel.title}
                </h3>
                <p className="text-xs text-[#b08d57] font-bold uppercase">{selectedLevel.kinyarwandaTitle}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-6 text-sm">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <h4 className="text-xs font-black text-[#0a1e34] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <FileText size={15} className="text-[#b08d57]" /> Curriculum Overview & Methodology
                </h4>
                <p className="text-slate-600 font-medium leading-relaxed">{selectedLevel.curriculumOverview}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                  <h4 className="text-xs font-black text-[#0a1e34] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <BookOpen size={15} className="text-[#b08d57]" /> Comprehensive Subject List
                  </h4>
                  <ul className="space-y-2 text-xs font-semibold text-slate-700">
                    {selectedLevel.subjects.map((sub, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#b08d57]" />
                        <span>{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                  <h4 className="text-xs font-black text-[#0a1e34] uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Building2 size={15} className="text-[#b08d57]" /> Secondary School & Learning Facilities
                  </h4>
                  <ul className="space-y-2 text-xs font-semibold text-slate-700">
                    {selectedLevel.facilities.map((fac, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#0a1e34]" />
                        <span>{fac}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg">
                <h4 className="text-xs font-black text-[#0a1e34] uppercase tracking-widest mb-2 flex items-center gap-2">
                  <Users size={15} className="text-[#b08d57]" /> Admission Requirements & Checklist
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-700 mt-3">
                  {selectedLevel.admissionRequirements.map((req, i) => (
                    <li key={i} className="flex items-center gap-2 bg-white p-2 rounded border border-slate-200">
                      <CheckCircle2 size={15} className="text-[#b08d57] flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setSelectedLevel(null)}
                  className="px-5 py-3 text-xs font-black uppercase tracking-wider bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
                >
                  Close Window
                </button>
                <a
                  href="/contact"
                  className="px-6 py-3 text-xs font-black uppercase tracking-widest bg-[#0a1e34] hover:bg-[#b08d57] text-white flex items-center gap-2 transition-colors shadow-md"
                >
                  <span>Apply / Contact School</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

