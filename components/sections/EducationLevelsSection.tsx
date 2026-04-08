import { BookOpen, GraduationCap, Hammer } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';

export function EducationLevelsSection() {
  const levels = [
    {
      icon: BookOpen,
      title: 'Nursery & Primary',
      description:
        'Building strong foundational skills in literacy, numeracy, and critical thinking for our youngest learners.',
      features: [
        'Early childhood development',
        'Primary education (P1-P6)',
        'Character development',
      ],
      bgColor: 'bg-primary',
    },
    {
      icon: GraduationCap,
      title: 'Secondary Education',
      description:
        'Excellence in O-Level education with focus on academic achievement and personal growth.',
      features: [
        'O-Level curriculum',
        'Core and elective subjects',
        'Leadership development',
      ],
      bgColor: 'bg-primary',
    },
    {
      icon: Hammer,
      title: 'TVET / TSS',
      description:
        'Technical Secondary School for vocational mastery and professional skill development.',
      features: [
        'Vocational training',
        'Hands-on experience',
        'Career preparation',
      ],
      bgColor: 'bg-accent text-accent-foreground',
    },
  ];

  return (
    <section id="levels" className="py-20 bg-muted">
      <Container>
        <SectionHeader
          title="Our Educational Levels"
          description="Comprehensive education programs designed to develop students at every stage"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level) => {
            const Icon = level.icon;
            const isHighlight = level.bgColor === 'bg-accent text-accent-foreground';

            return (
              <div
                key={level.title}
                className={`${level.bgColor} ${isHighlight ? 'text-accent-foreground' : 'text-primary-foreground'} rounded-2xl p-8 hover:shadow-2xl transition-all hover:-translate-y-1`}
              >
                <div
                  className={`${isHighlight ? 'bg-primary/20' : 'bg-accent/20'} w-16 h-16 rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon
                    className={`w-8 h-8 ${isHighlight ? 'text-primary' : 'text-accent'}`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3">{level.title}</h3>
                <p
                  className={`${isHighlight ? 'text-accent-foreground/90' : 'text-primary-foreground/90'} mb-4 leading-relaxed`}
                >
                  {level.description}
                </p>
                <ul
                  className={`space-y-2 text-sm ${isHighlight ? 'text-accent-foreground/80' : 'text-primary-foreground/80'}`}
                >
                  {level.features.map((feature) => (
                    <li key={feature}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
