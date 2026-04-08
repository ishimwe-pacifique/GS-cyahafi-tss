import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

interface Story {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
}

const stories: Story[] = [
  {
    id: 1,
    title: 'Success Story: From TVET to Employment',
    excerpt:
      'Meet John, a BDC graduate who now leads construction projects across Kigali. His journey from classroom to successful career...',
    date: 'March 2024',
    category: 'Alumni Success',
  },
  {
    id: 2,
    title: 'Campus Expansion Project Completed',
    excerpt:
      'We are proud to announce the completion of our new modern classrooms and learning facilities. This expansion ensures...',
    date: 'February 2024',
    category: 'Campus News',
  },
  {
    id: 3,
    title: 'FBO Students Win Regional Competition',
    excerpt:
      'Our Food and Beverage Operations students showcased their culinary excellence at the national TVET competition, earning top...',
    date: 'January 2024',
    category: 'Achievement',
  },
];

export function StoriesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <Container>
        <SectionHeader
          title="Stories & News"
          subtitle="Stay updated with the latest developments at GS Cyahafi TSS"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <Card key={story.id} className="flex flex-col group">
              <div className="w-full h-48 bg-gradient-to-br from-primary to-primary/80 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-primary-foreground/30">
                  📰
                </div>
              </div>

              <div className="flex-grow">
                <p className="text-sm font-semibold text-secondary mb-2">
                  {story.category}
                </p>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                  {story.title}
                </h3>
                <p className="text-muted-foreground mb-4">{story.excerpt}</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{story.date}</p>
                <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary">View All News</Button>
        </div>
      </Container>
    </section>
  );
}
