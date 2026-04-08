import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { Users, BookOpen, GraduationCap, Target } from 'lucide-react';

export const metadata = {
  title: 'About Us - GS Cyahafi TSS',
  description:
    'Learn about GS Cyahafi TSS, our mission, values, and commitment to educational excellence.',
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <Navigation />

      {/* Hero Banner */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              About GS Cyahafi TSS
            </h1>
            <p className="text-lg text-primary-foreground/90">
              Dedicated to excellence in education and technical skill development
            </p>
          </div>
        </Container>
      </section>

      {/* About Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                GS Cyahafi TSS is a government-aided school located in Gitega,
                Nyarugenge District, Kigali, Rwanda. We are committed to
                providing quality education from early childhood through
                technical training.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our institution stands out for its holistic approach to
                education, combining academic excellence with practical skill
                development. We believe in nurturing well-rounded individuals
                who can contribute meaningfully to society.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a modern campus, dedicated staff, and comprehensive
                programs ranging from nursery to technical training, we provide
                an environment where every student can thrive.
              </p>
            </div>

            <div className="w-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg"
                alt="GS Cyahafi TSS Campus"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground p-8">
              <Target className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                To provide quality education and technical training that
                empowers students with knowledge, skills, and values necessary
                for personal success and meaningful contribution to society.
              </p>
            </Card>

            <Card className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-8">
              <GraduationCap className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="leading-relaxed">
                To be a leading institution of educational excellence in Rwanda,
                recognized for producing competent, ethical, and innovative
                individuals who drive sustainable development.
              </p>
            </Card>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <SectionHeader
              title="Our Core Values"
              subtitle="The principles that guide our institution"
            />

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Users,
                  title: 'Community',
                  description:
                    'We foster a supportive environment where everyone belongs',
                },
                {
                  icon: BookOpen,
                  title: 'Excellence',
                  description:
                    'We pursue academic and professional excellence in all endeavors',
                },
                {
                  icon: Target,
                  title: 'Integrity',
                  description:
                    'We conduct ourselves with honesty and strong moral principles',
                },
                {
                  icon: GraduationCap,
                  title: 'Growth',
                  description:
                    'We believe in continuous personal and professional development',
                },
              ].map((value) => {
                const Icon = value.icon;
                return (
                  <Card key={value.title} className="text-center">
                    <Icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                    <h4 className="font-bold text-lg text-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Educational Levels */}
          <div>
            <SectionHeader
              title="Our Educational Programs"
              subtitle="Comprehensive offerings for every stage of development"
            />

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-primary text-primary-foreground p-8">
                <BookOpen className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Nursery & Primary</h3>
                <p className="mb-4">
                  Building strong foundational skills in literacy, numeracy,
                  and character development for our youngest learners.
                </p>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>✓ Early childhood development</li>
                  <li>✓ Primary education (P1-P6)</li>
                  <li>✓ Character building</li>
                </ul>
              </Card>

              <Card className="bg-primary text-primary-foreground p-8">
                <GraduationCap className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">Secondary Education</h3>
                <p className="mb-4">
                  Excellence in O-Level education with focus on academic
                  achievement and personal growth.
                </p>
                <ul className="space-y-2 text-sm text-primary-foreground/90">
                  <li>✓ O-Level curriculum</li>
                  <li>✓ Core and elective subjects</li>
                  <li>✓ Leadership development</li>
                </ul>
              </Card>

              <Card className="bg-secondary text-secondary-foreground p-8">
                <Target className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">TVET / TSS</h3>
                <p className="mb-4">
                  Technical Secondary School for vocational mastery and
                  professional skill development.
                </p>
                <ul className="space-y-2 text-sm text-secondary-foreground/90">
                  <li>✓ Vocational training</li>
                  <li>✓ Hands-on experience</li>
                  <li>✓ Career preparation</li>
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
