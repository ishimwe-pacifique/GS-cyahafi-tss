'use client';

import { useState } from 'react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-white font-montserrat">
      <Navigation />

      {/* --- HERO SECTION: BOLD ARCHITECTURAL --- */}
      <section className="relative pt-48 pb-24 bg-[#0a1e34] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 grayscale">
           <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl border-l-4 border-[#b08d57] pl-8">
            <p className="text-[#b08d57] font-black uppercase tracking-[0.3em] text-[10px] mb-4">Official Channels</p>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
              Get In <br /> Touch
            </h1>
            <p className="text-lg text-slate-300 font-medium max-w-xl">
              For admissions, partnerships, or general inquiries, our administration team is available to assist you during official working hours.
            </p>
          </div>
        </Container>
      </section>

      {/* --- CONTACT INFORMATION GRID --- */}
      <section className="py-24 bg-white border-b border-slate-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-slate-200">
            {[
              { icon: MapPin, title: "Address", detail: ["Kabahizi, Gitega", "Nyarugenge, Kigali", "Rwanda"] },
              { icon: Phone, title: "Phone", detail: ["+250 722 792 705", "Mon-Fri, 8AM-5PM"] },
              { icon: Mail, title: "Email", detail: ["gscyahafi@gmail.com", ""] },
              { icon: Clock, title: "Hours", detail: ["Mon-Fri: 8AM-5PM", "Sat: 9AM-12PM"] }
            ].map((item, i) => (
              <div key={i} className="p-10 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <item.icon className="w-8 h-8 text-[#b08d57] mb-6" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#0a1e34] mb-4">{item.title}</h3>
                {item.detail.map((line, idx) => (
                  <p key={idx} className="text-slate-500 text-sm font-bold leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* --- FORM SECTION --- */}
      <section className="py-24 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border-4 border-[#0a1e34] p-8 md:p-16 shadow-2xl relative">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#b08d57] mx-auto mb-6" />
                  <h2 className="text-3xl font-black text-[#0a1e34] uppercase tracking-tighter mb-4">Message Sent</h2>
                  <p className="text-slate-500 mb-8 font-medium">Thank you for contacting GS Cyahafi TSS. We will respond within 24 hours.</p>
                  <Button onClick={() => setIsSubmitted(false)} className="bg-[#0a1e34] text-white rounded-none px-8 py-4 font-black uppercase text-[10px] tracking-widest">Send Another</Button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-black text-[#0a1e34] uppercase tracking-tighter mb-4">Send us a Message</h2>
                  <p className="text-slate-500 mb-10 font-medium">Please fill out the form below for official school inquiries.</p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-4 rounded-none border border-slate-200 focus:outline-none focus:border-[#b08d57] bg-slate-50 text-sm font-medium transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-4 rounded-none border border-slate-200 focus:outline-none focus:border-[#b08d57] bg-slate-50 text-sm font-medium transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Message Inquiry</label>
                      <textarea
                        rows={5}
                        required
                        className="w-full px-4 py-4 rounded-none border border-slate-200 focus:outline-none focus:border-[#b08d57] bg-slate-50 text-sm font-medium resize-none transition-all"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-[#0a1e34] hover:bg-[#b08d57] text-white rounded-none font-black uppercase text-xs tracking-[0.3em] transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>

            {/* --- MAP SECTION: KEPT AS IS BUT STYLED SHARP --- */}
            <div className="mt-12">
               <div className="border-4 border-[#0a1e34] overflow-hidden shadow-2xl">
                <div className="w-full h-96 bg-slate-200 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.814188079439!2d30.0531343!3d-1.944869!2m3!1f0!2f90!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca53ee02e53e3%3A0xebc558398f713cf6!2sCyahafi%20High%20School!5e0!3m2!1sen!2srw!16s%2Fg%2F11h94ys1p9"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Cyahafi High School Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}