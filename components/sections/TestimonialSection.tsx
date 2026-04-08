import { Card } from '../ui/card';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'David Mutua',
    role: 'Alumni - Secondary Education',
    content: 'GS Cyahafi TSS transformed my educational journey. The quality of teaching and supportive environment helped me achieve my dreams. Highly recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Grace Uwimana',
    role: 'Parent',
    content: 'My child has grown tremendously both academically and personally. The staff is dedicated and the facilities are excellent. A truly wonderful institution.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jean Paul Nzabamwita',
    role: 'TVET Graduate - FBO',
    content: 'The Food and Beverage Operations program equipped me with practical skills that landed me a great job. Very hands-on and professional training.',
    rating: 5,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <Container>
        <SectionHeader
          title="Student & Parent Testimonials"
          subtitle="Hear what our community says about GS Cyahafi TSS"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                "{testimonial.content}"
              </p>

              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
