import { Container } from '../layout/Container';
import { SectionHeader } from '../ui/SectionHeader';
import { Button } from '../ui/button';
import Link from 'next/link';

const galleryImages = [
  {
    id: 1,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image1-1QLrdTn8kYjz4ox5DCoqCEZdvfZxXj.jpeg',
    alt: 'Campus Assembly',
    category: 'Campus',
  },
  {
    id: 2,
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gs%20image2-GBAlBSIn3OZOriyfBaQUotKE7L5dnQ.jpeg',
    alt: 'Classroom Learning',
    category: 'Classroom',
  },
];

export function LatestGallerySection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <Container>
        <SectionHeader
          title="Latest Gallery"
          subtitle="A glimpse into the vibrant campus life at GS Cyahafi TSS"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-2xl h-64 md:h-80 cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm font-semibold text-secondary mb-1">
                    {image.category}
                  </p>
                  <h3 className="text-xl font-bold">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/gallery">
            <Button variant="secondary">View Full Gallery</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
