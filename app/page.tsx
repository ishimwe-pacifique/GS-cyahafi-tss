import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { TestimonialSection } from '@/components/sections/TestimonialSection';
import { StoriesSection } from '@/components/sections/StoriesSection';
import { LatestGallerySection } from '@/components/sections/LatestGallerySection';

export default function Home() {
  return (
    <div className="w-full">
      <Navigation />
      <HeroSection />
      <LatestGallerySection />
      <TestimonialSection />
      <StoriesSection />
      
      <Footer />
    </div>
  );
}
