'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { BookOpen, GraduationCap, Target, Mail, Linkedin, Phone } from 'lucide-react';
import { useEffect } from 'react';

const teamMembers = [
  { 
    name: "Francoise Nyiraneza Kaburame", 
    role: "Head Teacher", 
    phone: "+250 788 000 000", 
    image: "/team/head-teacher.jpg" // Put your image in public/team/head-teacher.jpg
  },
  { 
    name: "Nahimana Didie", 
    role: "DOS General", 
    phone: "+250 788 000 000", 
    image: "/team/dos-general.jpg" 
  },
  { 
    name: "Tuyumvire Lois", 
    role: "DOS TSS", 
    phone: "+250 788 000 000", 
    image: "/team/dos-tss.jpg" 
  },
  { 
    name: "Peter", 
    role: "DOD", 
    phone: "+250 788 000 000", 
    image: "/team/dod.jpg" 
  },
  { 
    name: "BOSCO", 
    role: "Accountant", 
    phone: "+250 788 000 000", 
    image: "/team/accountant.jpg" 
  },
  { 
    name: "XXXXXXXXX", 
    role: "Secretary", 
    phone: "+250 788 000 000", 
    image: "/team/secretary.jpg" 
  },
  { 
    name: "Ishimwe Pacifique", 
    role: "IT Support", 
    phone: "+250 784 196 391", 
    image: "/team/it-support.jpg" 
  },
];

export default function AboutPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#team') {
      const element = document.getElementById('team');
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="w-full bg-white font-montserrat">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="pt-40 pb-20 bg-[#0a1e34] text-white">
        <Container>
          <div className="border-l-4 border-[#b08d57] pl-8">
            <p className="text-[#b08d57] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Established Excellence</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Empowering <br /> Tomorrow's <br /> Workforce
            </h1>
            <p className="max-w-xl text-slate-400 text-lg font-medium leading-relaxed">
              GS Cyahafi TSS is a premier secondary institution in Kigali, dedicated to bridging the gap between academic theory and technical mastery.
            </p>
          </div>
        </Container>
      </section>

      {/* --- CORE NARRATIVE --- */}
      <section className="py-24 border-b border-slate-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] w-full bg-slate-100">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg"
                alt="GS Cyahafi TSS Campus"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#b08d57] p-8 hidden md:block">
                <p className="text-white font-black text-4xl">100%</p>
                <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest">Commitment</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-[#0a1e34] uppercase tracking-tighter mb-8 border-b-4 border-[#0a1e34] pb-4 inline-block">
                Who We Are
              </h2>
              <p className="text-slate-600 mb-6 leading-[1.8] font-medium">
                Located in the heart of Gitega, Nyarugenge District, GS Cyahafi TSS stands as a beacon of progress. As a government-aided secondary school, we operate with a clear mandate: to produce graduates who are both academically rigorous and technically proficient.
              </p>
              <p className="text-slate-600 leading-[1.8] font-medium">
                Our holistic approach integrates foundational Nursery and Primary education with advanced O-Level and specialized Technical Secondary School (TSS) tracks, ensuring a continuous journey of growth for every student.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-0 border-4 border-[#0a1e34]">
            <div className="p-12 bg-[#0a1e34] text-white">
              <Target className="w-12 h-12 text-[#b08d57] mb-8" />
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                To provide quality education and technical training that empowers students with knowledge, skills, and values necessary for personal success and meaningful contribution to Rwanda's sustainable development.
              </p>
            </div>
            <div className="p-12 bg-white text-[#0a1e34]">
              <GraduationCap className="w-12 h-12 text-[#b08d57] mb-8" />
              <h3 className="text-3xl font-black uppercase mb-6 tracking-tight">Our Vision</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                To be a leading institution of educational excellence in Rwanda, recognized for producing competent, ethical, and innovative individuals who drive the national workforce forward.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- LEADERSHIP TEAM --- */}
      <section id="team" className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <p className="text-[#b08d57] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Dedicated Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1e34] uppercase tracking-tighter">
              Meet Our <span className="text-[#b08d57]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {teamMembers.map((member, i) => (
              <div key={i} className={`group ${i === 6 ? 'lg:col-start-2 lg:col-span-2 flex items-center gap-8' : ''}`}>
                <div className={`relative overflow-hidden ${i === 6 ? 'h-64 w-64 flex-shrink-0' : 'h-80 w-full mb-6'}`}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/20 transition-all" />
                </div>
                <div className="border-l-2 border-[#b08d57] pl-4">
                  <h4 className="text-lg font-black text-[#0a1e34] uppercase leading-tight mb-1">{member.name}</h4>
                  <p className="text-[10px] font-bold text-[#b08d57] uppercase tracking-widest mb-3">{member.role}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-slate-500 group-hover:text-[#0a1e34] transition-colors">
                    <Phone size={14} className="text-[#b08d57]" />
                    <span className="text-xs font-bold">{member.phone}</span>
                  </div>

                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Mail size={14} className="text-slate-400 hover:text-[#b08d57] cursor-pointer" />
                    <Linkedin size={14} className="text-slate-400 hover:text-[#b08d57] cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- EDUCATIONAL PATHWAYS --- */}
      <section className="py-24 bg-[#0a1e34] text-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-0 border border-slate-700">
            {[
              { icon: BookOpen, title: "Nursery & Primary", desc: "Foundational literacy and numeracy focused on character and early cognitive development." },
              { icon: GraduationCap, title: "Ordinary Level", desc: "A rigorous O-Level curriculum designed to prepare students for higher national academic standards." },
              { icon: Target, title: "TVET / TSS", desc: "Specialized Technical Secondary tracks for vocational mastery in construction, IT, and hospitality." }
            ].map((item, i) => (
              <div key={i} className="p-12 border-r border-slate-700 last:border-r-0 hover:bg-slate-800 transition-colors">
                <item.icon className="w-10 h-10 text-[#b08d57] mb-8" />
                <h3 className="text-xl font-black uppercase mb-4 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className="w-8 h-1 bg-[#b08d57]" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}