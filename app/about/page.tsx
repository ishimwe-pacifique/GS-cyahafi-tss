import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/ui/card';
import { Users, BookOpen, GraduationCap, Target, Mail, Linkedin } from 'lucide-react';

export const metadata = {
  title: 'About GS Cyahafi TSS | Leading Secondary Education in Kigali',
  description: 'Learn about our mission, vision, and the dedicated team driving technical and academic excellence at GS Cyahafi TSS.',
};

const teamMembers = [
  { name: "Executive Name", role: "School Manager", image: "https://i.pravatar.cc/150?u=1" },
  { name: "Director Name", role: "Director of Studies", image: "https://i.pravatar.cc/150?u=2" },
  { name: "Dean Name", role: "Dean of Students", image: "https://i.pravatar.cc/150?u=3" },
  { name: "Head TVET", role: "TVET Coordinator", image: "https://i.pravatar.cc/150?u=4" },
  { name: "Admin Name", role: "School Accountant", image: "https://i.pravatar.cc/150?u=5" },
  { name: "Staff Name", role: "Quality Assurance", image: "https://i.pravatar.cc/150?u=6" },
  { name: "Staff Name", role: "Secretary", image: "https://i.pravatar.cc/150?u=7" },
];

export default function AboutPage() {
  return (
    <div className="w-full bg-white font-montserrat">
      <Navigation />

      {/* --- HERO SECTION: BOLD & MINIMALIST --- */}
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

      {/* --- MISSION & VISION: ARCHITECTURAL --- */}
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

      {/* --- LEADERSHIP TEAM (7 PEOPLE) --- */}
      <section className="py-24 bg-white">
        <Container>
          <div className="text-center mb-20">
            <p className="text-[#b08d57] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Dedicated Leadership</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#0a1e34] uppercase tracking-tighter">
              Meet Our <span className="text-[#b08d57]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className={`group ${i === 6 ? 'lg:col-start-2' : ''}`}>
                <div className="relative h-80 w-full mb-6 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 border-[12px] border-white/0 group-hover:border-white/20 transition-all" />
                </div>
                <div className="border-l-2 border-[#b08d57] pl-4">
                  <h4 className="text-lg font-black text-[#0a1e34] uppercase leading-none mb-2">{member.name}</h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{member.role}</p>
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