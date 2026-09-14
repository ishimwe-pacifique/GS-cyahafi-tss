'use client';

import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { BookOpen, GraduationCap, Target, Mail, Linkedin, Phone, Compass, Award, Lightbulb, Sparkles } from 'lucide-react';
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

      {/* --- HERO BANNER SECTION --- */}
      <section className="pt-36 pb-16 bg-[#0a1e34] text-white">
        <Container>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Text Column - Orderly arranged text */}
            <div className="md:col-span-7">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 text-white">
                Empowering Tomorrow's Workforce
              </h1>
              <p className="text-slate-300 text-base font-medium leading-relaxed max-w-xl">
                GS CYAHAFI/TSS is a premier secondary institution in Kigali, dedicated to bridging the gap between academic theory and technical mastery.
              </p>
            </div>

            {/* Image Column - Full original crisp image, compact height, no transparent overlay */}
            <div className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden border-2 border-[#b08d57]/40 shadow-2xl bg-slate-900 group">
                <img
                  src="/about-banner.jpg"
                  alt="GS CYAHAFI/TSS Campus"
                  className="w-full h-[300px] md:h-[340px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-3 right-3 bg-[#0a1e34]/95 text-white px-3 py-1 rounded border border-[#b08d57]/50 text-[10px] font-bold uppercase tracking-wider">
                  GS CYAHAFI TSS
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- WELCOME & OUR STORY --- */}
      <section className="py-12 md:py-14 border-b border-slate-100">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-[440px] md:h-[480px] w-full bg-slate-100 shadow-xl overflow-hidden rounded-md">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg"
                  alt="GS Cyahafi TSS Campus"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e34]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#b08d57] p-6 hidden md:block shadow-2xl rounded">
                <p className="text-white font-black text-3xl">Est. 2005</p>
                <p className="text-white/90 text-[10px] uppercase font-bold tracking-widest mt-1">Excellence in Rwanda</p>
              </div>
            </div>

            <div>

              <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e34] uppercase tracking-tight mb-4 border-b-2 border-[#0a1e34] pb-2 inline-block">
                Our Journey & Evolution
              </h2>

              <p className="text-slate-600 mb-4 leading-relaxed text-sm md:text-base font-medium">
                Originally established in 2005 as a primary school and expanded to lower secondary in 2009, the school reached a major milestone in 2023 by officially becoming a Technical Secondary School (TSS). Today, as a proud TVET institution supported by the Government of Rwanda, we offer specialized career trades in Building Construction (BDC) and Food and Beverage Operations (FBO) to equip students with practical skills for the future.
              </p>

              <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base font-medium">
                To support this rich academic and technical evolution, our school has grown to feature 50 classrooms. Our vibrant learning environment is managed by a dedicated Seven-member administrative team and driven by 67 qualified teachers. All in all, we have a beautiful setting where our children can thrive. Should you wish to visit and see our school firsthand, please do not hesitate to contact us.
              </p>

              {/* Stats Highlights */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200">
                <div className="text-center p-3 bg-slate-50 rounded border-b-2 border-[#b08d57]">
                  <p className="text-2xl font-black text-[#0a1e34]">50</p>
                  <p className="text-[10px] font-bold text-[#b08d57] uppercase tracking-wider">Classrooms</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded border-b-2 border-[#0a1e34]">
                  <p className="text-2xl font-black text-[#0a1e34]">67</p>
                  <p className="text-[10px] font-bold text-[#b08d57] uppercase tracking-wider">Teachers</p>
                </div>
                <div className="text-center p-3 bg-slate-50 rounded border-b-2 border-[#b08d57]">
                  <p className="text-2xl font-black text-[#0a1e34]">10</p>
                  <p className="text-[10px] font-bold text-[#b08d57] uppercase tracking-wider">Admin Staff</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- MISSION & VISION --- */}
      <section className="py-12 md:py-14 bg-slate-50">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e34] uppercase tracking-tight">
              Vision & <span className="text-[#b08d57]">Mission</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border-2 border-[#0a1e34] shadow-xl rounded overflow-hidden">
            {/* Vision */}
            <div className="p-8 md:p-10 bg-[#0a1e34] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Compass className="w-8 h-8 text-[#b08d57]" />
                  <span className="text-xs font-bold text-[#b08d57] uppercase tracking-widest">School Vision</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-tight text-[#b08d57]">
                  The Light of the Nation
                </h3>
                <p className="text-slate-300 leading-relaxed font-medium text-sm md:text-base">
                  GS CYAHAFI/TSS: The light of the Nation with aims for the development of each student through the free expression of their thoughts and the development of self-confidence, with respect for themselves and others; openness to the world and creativity, while maintaining a critical mind and a sense of responsibility, especially as a young citizen.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-8 md:p-10 bg-white text-[#0a1e34] flex flex-col justify-between border-t-2 md:border-t-0 md:border-l-2 border-[#0a1e34]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-[#b08d57]" />
                  <span className="text-xs font-bold text-[#b08d57] uppercase tracking-widest">School Mission</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold uppercase mb-4 tracking-tight">
                  Educational Excellence
                </h3>
                <p className="text-slate-600 leading-relaxed font-medium text-sm md:text-base">
                  The school's mission is to provide students with basic education of international standard by promoting active and participatory methods to enable students to acquire skills and develop their autonomy to play an active and creative role in their social life and professional to come.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- CORE VALUES --- */}
      <section className="py-12 md:py-14 bg-white border-b border-slate-100">
        <Container>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e34] uppercase tracking-tight">
              School Core <span className="text-[#b08d57]">Values</span>
            </h2>
            <p className="max-w-xl mx-auto text-slate-500 text-xs md:text-sm mt-2 font-medium">
              The values shared by school staff, the executive committee, students, and parents of students:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Value 1 */}
            <div className="bg-slate-50 p-6 md:p-8 border-t-4 border-[#0a1e34] shadow-sm hover:shadow-md transition-all duration-300 group rounded-b">
              <div className="w-10 h-10 bg-[#0a1e34] text-[#b08d57] flex items-center justify-center font-bold text-base mb-4 group-hover:bg-[#b08d57] group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-base font-bold text-[#0a1e34] uppercase mb-3 tracking-tight">
                Autonomy & Active Participation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                We make it a point of honor that our students benefit from the strengths of participatory pedagogy. Indeed, by allowing the learner to participate directly in his/her own learning, by offering him/her adapted teaching material and by means of differentiated learning techniques, always leaving the necessary space for the pupil to discover its skills and possibilities.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-slate-50 p-6 md:p-8 border-t-4 border-[#b08d57] shadow-sm hover:shadow-md transition-all duration-300 group rounded-b">
              <div className="w-10 h-10 bg-[#b08d57] text-white flex items-center justify-center font-bold text-base mb-4 group-hover:bg-[#0a1e34] group-hover:text-[#b08d57] transition-colors">
                02
              </div>
              <h3 className="text-base font-bold text-[#0a1e34] uppercase mb-3 tracking-tight">
                Creativity
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                GS CYAHAFI/TSS also wants its students to become aware of their capacities to create. For this, we support learning involving all the senses taking into account the different types of learning: the visual type, the auditory type and the sensory type. We help our students to develop their creative spirit to find solutions to real situations encountered in everyday life.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-slate-50 p-6 md:p-8 border-t-4 border-[#0a1e34] shadow-sm hover:shadow-md transition-all duration-300 group rounded-b">
              <div className="w-10 h-10 bg-[#0a1e34] text-[#b08d57] flex items-center justify-center font-bold text-base mb-4 group-hover:bg-[#b08d57] group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-base font-bold text-[#0a1e34] uppercase mb-3 tracking-tight">
                Excellence, Discipline & Respect
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                Finally, we see excellence as a goal to be achieved for the school, but also for each of the students, teachers and educational partners. This goal must be achieved with respect for self and others, all organized by clear rules of discipline.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* --- LEADERSHIP TEAM --- */}
      <section id="team" className="py-12 md:py-14 bg-white">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a1e34] uppercase tracking-tight">
              Meet Our <span className="text-[#b08d57]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {teamMembers.map((member, i) => (
              <div key={i} className={`group ${i === 6 ? 'lg:col-start-2 lg:col-span-2 flex items-center gap-8' : ''}`}>
                <div className={`relative overflow-hidden rounded ${i === 6 ? 'h-64 w-64 flex-shrink-0' : 'h-72 w-full mb-4'}`}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 border-[8px] border-white/0 group-hover:border-white/20 transition-all" />
                </div>
                <div className="border-l-2 border-[#b08d57] pl-4">
                  <h4 className="text-base font-bold text-[#0a1e34] uppercase leading-tight mb-1">{member.name}</h4>
                  <p className="text-[10px] font-bold text-[#b08d57] uppercase tracking-widest mb-2">{member.role}</p>

                  <div className="flex items-center gap-2 mb-3 text-slate-500 group-hover:text-[#0a1e34] transition-colors">
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
      <section className="py-12 md:py-14 bg-[#0a1e34] text-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-0 border border-slate-700 rounded overflow-hidden">
            {[
              { icon: BookOpen, title: "Nursery & Primary", desc: "Foundational literacy and numeracy focused on character and early cognitive development." },
              { icon: GraduationCap, title: "Ordinary Level", desc: "A rigorous O-Level curriculum designed to prepare students for higher national academic standards." },
              { icon: Target, title: "TVET / TSS (BDC & FBO)", desc: "Specialized Technical Secondary tracks offering Building Construction (BDC) & Food & Beverage Operations (FBO)." }
            ].map((item, i) => (
              <div key={i} className="p-8 md:p-10 border-r border-slate-700 last:border-r-0 hover:bg-slate-800 transition-colors">
                <item.icon className="w-8 h-8 text-[#b08d57] mb-6" />
                <h3 className="text-lg font-bold uppercase mb-3 tracking-tight">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.desc}</p>
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