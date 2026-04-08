'use client';

import { useState } from 'react';
import Image from 'next/image';

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(images.map((img) => img.category))];
  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === category
                ? 'bg-secondary text-secondary-foreground shadow-lg'
                : 'bg-card border border-border text-foreground hover:bg-muted'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <button
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all hover:scale-105"
          >
            <div className="aspect-video bg-muted relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all" />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold text-balance">{image.title}</h3>
              <p className="text-sm text-white/80">{image.category}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] overflow-auto rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-secondary text-secondary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-xl hover:bg-secondary/90 z-10"
            >
              ✕
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto"
            />
            <div className="bg-card p-6 border-t border-border">
              <h2 className="text-2xl font-bold text-primary mb-2">
                {selectedImage.title}
              </h2>
              <p className="text-muted-foreground">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
