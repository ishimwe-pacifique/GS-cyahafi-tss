import { ChefHat, Hammer } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/Button';

export function TvetProgramsSection() {
  const programs = [
    {
      icon: ChefHat,
      title: 'Food & Beverage Operations',
      description:
        'Master the art and science of culinary excellence and hospitality management. Our FBO program equips students with professional skills in food preparation, kitchen management, and customer service.',
      highlights: [
        'Culinary techniques and food safety',
        'Menu planning and nutrition',
        'Hospitality and customer service',
        'Kitchen equipment operation',
        'Food service management',
      ],
    },
    {
      icon: Hammer,
      title: 'Bricklaying & Concrete Works',
      description:
        'Build your future in construction and infrastructure. Our BDC program develops expertise in masonry, bricklaying, concrete work, and construction management for modern building projects.',
      highlights: [
        'Bricklaying and masonry techniques',
        'Concrete mixing and pouring',
        'Building construction basics',
        'Safety protocols and standards',
        'Site management and planning',
      ],
    },
  ];

  return (
    <section id="tvet" className="py-20 bg-background">
      <Container>
        <SectionHeader
          title="Specialized TVET Departments"
          description="Cutting-edge vocational programs designed to prepare students for successful careers"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="bg-gradient-to-br from-card to-muted border-2 border-secondary rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <div className="bg-secondary p-8 flex items-center gap-4">
                  <Icon className="w-12 h-12 text-secondary-foreground" />
                  <h3 className="text-2xl font-bold text-secondary-foreground">
                    {program.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-primary">
                      Program Highlights:
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {program.highlights.map((highlight) => (
                        <li key={highlight}>✓ {highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="primary">Learn More</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
