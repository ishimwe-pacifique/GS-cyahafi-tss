import { Users, BookOpen, GraduationCap } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Card } from '../ui/Card';

export function AboutSection() {
  const values = [
    {
      icon: Users,
      title: 'Community Focused',
      description:
        'We believe in nurturing well-rounded individuals who contribute positively to society.',
    },
    {
      icon: BookOpen,
      title: 'Quality Education',
      description:
        'Committed to providing quality education at all levels from early childhood to technical training.',
    },
    {
      icon: GraduationCap,
      title: 'Excellence',
      description:
        'Dedicated to academic excellence and professional skill development for all our students.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <Container>
        <SectionHeader
          title="About GS Cyahafi"
          description="A government-aided school dedicated to excellence in education, located in Gitega, Nyarugenge District, Kigali."
        />

        <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg"
            alt="Classroom Learning Environment at GS Cyahafi TSS"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <Card key={value.title}>
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
