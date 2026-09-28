'use client';

import { Container } from '@/components/layout/Container';
import {
  Phone,
  MessageCircle,
  Users,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'directors' | 'support';
  phone: string;
  image: string;
  badge: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ht',
    name: 'Francoise Nyiraneza Kaburame',
    role: 'Head Teacher',
    category: 'executive',
    phone: '+250 785 792 705',
    image: '/team/HT.jpeg',
    badge: 'Executive Leadership',
    bio: 'Guiding GS CYAHAFI/TSS towards academic excellence, TVET program expansion, and holistic student development.',
  },
  {
    id: 'dos-gen',
    name: 'Nahimana Didie',
    role: 'DOS General',
    category: 'directors',
    phone: '+250 788 800 422',
    image: '/team/DOS GENERAL.png',
    badge: 'Director of Studies - General',
    bio: 'Directing general education academics, teaching standards, and curriculum implementation.',
  },
  {
    id: 'dos-tss',
    name: 'Tuyumvire Lois',
    role: 'DOS TSS',
    category: 'directors',
    phone: '+250 785 636 090',
    image: '/team/DOS TSS.jpeg',
    badge: 'Director of Studies - TSS',
    bio: 'Leading Technical Secondary School programs in Building Construction (BDC) and Food & Beverage Operations (FBO).',
  },
  {
    id: 'dod',
    name: 'Nshimiyimana Peter',
    role: 'DOD',
    category: 'directors',
    phone: '+250 783 362 752',
    image: '/team/Prefe.jpeg',
    badge: 'Director of Discipline',
    bio: 'Ensuring student welfare, discipline, ethics, and a conducive learning environment.',
  },
  {
    id: 'bursar',
    name: 'Musabyimana Bosco',
    role: 'Accountant',
    category: 'support',
    phone: '+250 788 325 391',
    image: '/team/Bursar1(1).png',
    badge: 'Finance & Accounts',
    bio: 'Managing institutional financial planning, budget allocation, and accounting operations.',
  },
  {
    id: 'logistics',
    name: 'Mutuyimana Cesarie',
    role: 'Logistician',
    category: 'support',
    phone: '+250 789 092 235',
    image: '/team/Logistician.jpeg',
    badge: 'Logistics & Procurement',
    bio: 'Coordinating school inventory, equipment procurement, and facility maintenance.',
  },
  {
    id: 'it',
    name: 'Ishimwe Pacifique',
    role: 'IT Support',
    category: 'support',
    phone: '+250 784 196 391',
    image: '/team/it-support.jpg',
    badge: 'IT & Systems',
    bio: 'Overseeing digital infrastructure, computer labs, system security, and technical support.',
  },
  {
    id: 'secretary',
    name: 'Ntakirutimana Devotha',
    role: 'Secretary',
    category: 'support',
    phone: '+250 782 996 497',
    image: '/team/secretary.jpg',
    badge: 'Administrative Office',
    bio: 'Managing front office operations, official correspondence, and student records.',
  },
  {
    id: 'librarian',
    name: 'Nshimiyimana Solange',
    role: 'Librarian',
    category: 'support',
    phone: '+250 791 435 073',
    image: '/placeholder-user.jpg',
    badge: 'Library & Resources',
    bio: 'Curating educational literature, student reading material, and research resources.',
  },
];

const COLORS = {
  navy: '#0A1E34',
  gold: '#C9A227',
  white: '#FFFFFF',
};

/* ---------------------------------------------------------
   SIMPLE TEAM CARD
--------------------------------------------------------- */

function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imgSrc, setImgSrc] = useState(member.image);

  return (
    <article className="group bg-white border border-[#0A1E34]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* PHOTO */}
      <div className="relative h-64 overflow-hidden bg-[#0A1E34]">
        <img
          src={imgSrc}
          alt={member.name}
          onError={() => setImgSrc('/placeholder-user.jpg')}
          className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
        />

        {/* Simple dark overlay */}
        <div className="absolute inset-0 bg-[#0A1E34]/20 group-hover:bg-transparent transition-all duration-300" />

        {/* Role */}
        <div className="absolute bottom-4 left-4">
          <span className="inline-block bg-[#C9A227] text-[#0A1E34] px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
            {member.role}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h4 className="text-lg font-extrabold text-[#0A1E34] leading-tight">
          {member.name}
        </h4>

        <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#C9A227]">
          {member.badge}
        </p>

        <p className="mt-3 text-xs leading-relaxed text-[#0A1E34]/65 line-clamp-2">
          {member.bio}
        </p>
      </div>

      {/* PHONE */}
      <div className="px-5 pb-5">
        <a
          href={`tel:${member.phone.replace(/\s+/g, '')}`}
          className="flex items-center justify-center gap-2 w-full rounded-lg border border-[#0A1E34]/15 py-2.5 text-xs font-bold text-[#0A1E34] hover:bg-[#0A1E34] hover:text-white transition-all"
        >
          <Phone size={14} className="text-[#C9A227]" />
          {member.phone}
        </a>
      </div>
    </article>
  );
}

/* ---------------------------------------------------------
   HEAD TEACHER
--------------------------------------------------------- */

function HeadTeacherCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-[#0A1E34] rounded-2xl overflow-hidden shadow-xl">
      <div className="grid md:grid-cols-2">

        {/* IMAGE */}
        <div className="relative min-h-[360px]">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder-user.jpg';
            }}
            className="absolute inset-0 w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
          />

          <div className="absolute top-5 left-5">
            <span className="bg-[#C9A227] text-[#0A1E34] px-3 py-1.5 rounded-md text-[10px] font-black uppercase tracking-widest">
              Head Teacher
            </span>
          </div>
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center p-7 md:p-10">

          <div className="flex items-center gap-2 text-[#C9A227] mb-4">
            <Sparkles size={15} />
            <span className="text-[10px] font-bold uppercase tracking-[0.18em]">
              School Leadership
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight">
            {member.name}
          </h3>

          <p className="mt-2 text-sm font-bold uppercase tracking-wider text-[#C9A227]">
            {member.role}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-white/70">
            {member.bio}
          </p>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-3 mt-7 pt-6 border-t border-white/10">

            <a
              href={`tel:${member.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 bg-[#C9A227] text-[#0A1E34] px-4 py-3 rounded-lg text-xs font-black uppercase tracking-wide hover:bg-white transition-all"
            >
              <Phone size={15} />
              Call
            </a>

            <a
              href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0A1E34] px-4 py-3 rounded-lg text-xs font-black uppercase tracking-wide hover:bg-[#C9A227] transition-all"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>

          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   MAIN TEAM SECTION
--------------------------------------------------------- */

export function TeamSection() {
  const [activeTab, setActiveTab] =
    useState<'all' | 'executive' | 'directors' | 'support'>('all');

  const headTeacher = teamMembers.find((m) => m.id === 'ht')!;
  const directors = teamMembers.filter((m) => m.category === 'directors');
  const supportStaff = teamMembers.filter((m) => m.category === 'support');

  const tabs = [
    { id: 'all', label: 'All', count: teamMembers.length },
    { id: 'executive', label: 'Leadership', count: 1 },
    { id: 'directors', label: 'Directors', count: directors.length },
    { id: 'support', label: 'Staff', count: supportStaff.length },
  ] as const;

  return (
    <section
      id="team"
      className="py-16 md:py-20 bg-white"
    >
      <Container>

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-12">

          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-[#C9A227]" />

            <span className="text-[#C9A227] text-[10px] font-black uppercase tracking-[0.2em]">
              Our Team
            </span>

            <span className="w-8 h-[2px] bg-[#C9A227]" />
          </div>

          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A1E34]">
            Meet Our <span className="text-[#C9A227]">Team</span>
          </h2>

          <p className="mt-4 text-sm md:text-base leading-relaxed text-[#0A1E34]/60">
            Dedicated professionals committed to academic excellence,
            student development, and the success of GS CYAHAFI/TSS.
          </p>

          {/* FILTERS */}
          <div className="flex flex-wrap justify-center gap-2 mt-7">
            {tabs.map((tab) => {
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest
                    border transition-all duration-200
                    ${active
                      ? 'bg-[#0A1E34] text-white border-[#0A1E34]'
                      : 'bg-white text-[#0A1E34] border-[#0A1E34]/15 hover:border-[#C9A227] hover:text-[#C9A227]'
                    }
                  `}
                >
                  {tab.label}
                  <span className="ml-1.5 opacity-60">
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ALL */}
        {activeTab === 'all' && (
          <div className="space-y-14">

            {/* HEAD TEACHER */}
            <div>
              <SectionTitle title="School Leadership" />
              <HeadTeacherCard member={headTeacher} />
            </div>

            {/* DIRECTORS */}
            <div>
              <SectionTitle title="Directors" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {directors.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                  />
                ))}
              </div>
            </div>

            {/* STAFF */}
            <div>
              <SectionTitle title="Administration & Staff" />

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {supportStaff.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    member={member}
                  />
                ))}
              </div>
            </div>

          </div>
        )}

        {/* EXECUTIVE */}
        {activeTab === 'executive' && (
          <div className="max-w-4xl mx-auto">
            <HeadTeacherCard member={headTeacher} />
          </div>
        )}

        {/* DIRECTORS */}
        {activeTab === 'directors' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {directors.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        )}

        {/* STAFF */}
        {activeTab === 'support' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportStaff.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
              />
            ))}
          </div>
        )}

      </Container>
    </section>
  );
}

/* ---------------------------------------------------------
   SECTION TITLE
--------------------------------------------------------- */

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div className="w-1 h-6 bg-[#C9A227] rounded-full" />

      <h3 className="text-sm font-black uppercase tracking-widest text-[#0A1E34]">
        {title}
      </h3>

      <div className="flex-1 h-px bg-[#0A1E34]/10" />
    </div>
  );
}

export default TeamSection;