'use client';

import { useState } from 'react';
import { Container } from '../layout/Container';
import { Button } from '../ui/button';
import { ArrowUpRight, Calendar, Tag, X } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  fullStory: string;
  date: string;
  category: string;
  image: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'FBO: Where Amazing Skills Are Born!',
    excerpt: 'They started as students, but they are finishing as experts. 👩‍🍳🔥',
    fullStory: "Our FBO practicals have become truly amazing to witness. The discipline, the clean work, and the beautiful plating show that these students are ready for the big stage. Watch out world, here they come! 🌍🍴",
    date: 'March 10, 2026',
    category: 'SuccessStory',
    image: '/fbostory.png', 
  },
  {
    id: 2,
    title: 'Morning Discipline, Lifetime Success! 🌅👔',
    excerpt: 'A great day does not just happen; it is built starting at 7:00 AM! Our morning assembly reminds us that success is built on character and discipline....',
    fullStory: "Today’s morning assembly was a powerful reminder of what makes our students stand out. Beyond the technical skills in the workshop, we prioritize character, behavior, and leadership. Hearing our leaders share wisdom on professional conduct reminds us that we are training more than just technicians—we are raising the next generation of Rwandan leaders. Discipline is the bridge between goals and accomplishment. Proud of our students for starting the day with such focus and respect!",
    date: 'March 15, 2026',
    category: 'School News',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
  },
  {
    id: 3,
    title: 'Harvesting Success: The KOICA Cohort 3 Result Sharing Ceremony',
    excerpt: 'The room was filled with a sense of pride as the KOICA Result Sharing event for Cohort 3 officially commenced. This gathering was the culmination of months of dedicated collaboration, marking a transition from learning to mastery for the students involved. The "Result Sharing" is not just a presentation; it is a celebration of the "World Friends Korea" spirit—where expertise meets ambition to create lasting change',
    fullStory: "The KOICA Result Sharing event served as a powerful launchpad for students, marking the successful transition from rigorous training to professional mastery. Through dynamic displays and technical demonstrations, the participants showcased the practical expertise and global standards they acquired from the Cohort 3 Korean volunteers. More than just a presentation of skills, the day celebrated a lasting legacy of mutual respect and institutional growth. As the volunteers conclude their service, they leave behind a empowered generation of local talent—equipped with the discipline and innovation necessary to excel in their future careers.",
    date: 'December 16, 2025',
    category: 'Achievement',
    image: '/Student1.jpeg',
  },
];

export function StoriesSection() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <section className="py-24 px-4 bg-[#ffffff] font-montserrat">
      <Container>
        {/* SHARP HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b-4 border-[#0a1e34] pb-6">
          <div className="max-w-2xl">
            <p className="text-[#b08d57] font-bold uppercase tracking-[0.3em] text-[10px] mb-2">GS Cyahafi TSS Updates</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0a1e34] uppercase tracking-tighter">
              Stories & <span className="text-[#b08d57]">News</span>
            </h2>
          </div>
          <Button className="bg-[#0a1e34] hover:bg-[#b08d57] text-white font-bold px-8 py-3 rounded-none transition-all text-[10px] uppercase tracking-widest">
            View All News
          </Button>
        </div>

        {/* SHARP GRID - No Transparency */}
        <div className="grid md:grid-cols-3 gap-0 border-l border-t border-slate-200">
          {stories.map((story) => (
            <article 
              key={story.id} 
              onClick={() => setSelectedStory(story)}
              className="group flex flex-col bg-white border-r border-b border-slate-200 cursor-pointer transition-all hover:bg-slate-50"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
                <div className="absolute top-0 left-0 bg-[#0a1e34] text-white text-[9px] font-bold px-4 py-2 uppercase tracking-widest">
                  {story.category}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="text-slate-400 text-[10px] font-bold mb-3 uppercase tracking-widest">
                  {story.date}
                </div>
                <h3 className="text-lg font-black text-[#0a1e34] mb-3 leading-tight uppercase group-hover:text-[#b08d57] transition-colors">
                  {story.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3 font-medium">
                  {story.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#0a1e34]">
                  Read Full Story <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* FULL STORY VIEW - Solid Sharp Design */}
        {selectedStory && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0a1e34]">
            <div className="bg-white w-full max-w-4xl h-full md:h-[90vh] overflow-hidden flex flex-col relative">
              
              {/* Close Button - Sharp */}
              <button 
                onClick={() => setSelectedStory(null)}
                className="absolute top-0 right-0 z-50 bg-[#b08d57] text-white p-5 hover:bg-black transition-colors"
              >
                <X size={24} />
              </button>

              <div className="overflow-y-auto">
                <div className="relative h-[350px] w-full">
                  <img src={selectedStory.image} alt={selectedStory.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-10 md:p-16 bg-white">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-[#b08d57] text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                      {selectedStory.category}
                    </span>
                    <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                      {selectedStory.date}
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-black text-[#0a1e34] uppercase leading-tight mb-8 tracking-tighter">
                    {selectedStory.title}
                  </h2>

                  <div className="text-[#0a1e34] text-sm md:text-base leading-[1.8] font-medium border-t-2 border-slate-100 pt-8">
                    <p className="mb-6">{selectedStory.fullStory}</p>
                    <p className="p-4 bg-slate-50 border-l-4 border-[#b08d57] italic">
                      GS Cyahafi TSS is a secondary school committed to academic and technical excellence in Kigali, Rwanda.
                    </p>
                  </div>

                  <div className="mt-12">
                    <Button 
                      onClick={() => setSelectedStory(null)}
                      className="bg-[#0a1e34] text-white px-10 py-4 rounded-none font-black uppercase text-[10px] tracking-[0.2em] transition-all"
                    >
                      Close Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}