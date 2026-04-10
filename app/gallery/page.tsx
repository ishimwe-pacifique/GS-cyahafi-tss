import { Container } from '@/components/layout/Container';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { FloatingScrollTop } from '@/components/ui/FloatingScrollTop';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GalleryGrid, type GalleryImage } from '@/components/gallery/GalleryGrid';

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    alt: 'Students gathered during campus assembly',
    category: 'School',
    title: 'School Assembly',
  },
  {
    id: '2',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg',
    alt: 'Interactive classroom learning session',
    category: 'classroom',
    title: 'Classroom Learning',
  },
  {
    id: '3',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    alt: 'Students engaging in group discussions',
    category: 'activities',
    title: 'Student Activities',
  },
  {
    id: '4',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg',
    alt: 'Hands-on TVET training in progress',
    category: 'tvet',
    title: 'TVET Training',
  },
  {
    id: '5',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    alt: 'Culinary students in the kitchen',
    category: 'tvet',
    title: 'Food & Beverage Lab',
  },
  {
    id: '6',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg',
    alt: 'Construction training workshop',
    category: 'tvet',
    title: 'Construction Workshop',
  },
  {
    id: '7',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    alt: 'Sports and recreational activities',
    category: 'activities',
    title: 'Sports Day',
  },
  {
    id: '8',
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg',
    alt: 'School building exterior view',
    category: 'school',
    title: 'School Facilities',
  },
];

export const metadata = {
  title: 'Gallery - GS Cyahafi TSS',
  description: 'Explore photos from GS Cyahafi Technical Secondary School',
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      <Navigation />
      <div className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          </div>
          <Container>
            <div className="relative text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance font-montserrat">
                Gallery
              </h1>
              <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
                Explore the vibrant school life and learning environment at GS Cyahafi TSS
              </p>
            </div>
          </Container>
        </section>

        {/* Gallery Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
          <Container>
            <GalleryGrid images={galleryImages} />
          </Container>
        </section>
      </div>
      <Footer />
      <FloatingScrollTop />
    </div>
  );
}
