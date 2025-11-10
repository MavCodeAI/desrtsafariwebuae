'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    title: 'Dune Bashing Adventure',
    category: 'adventure',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/3785930/pexels-photo-3785930.jpeg',
    title: 'Desert Sunset',
    category: 'landscape',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/1188470/pexels-photo-1188470.jpeg',
    title: 'Camel Riding',
    category: 'activities',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg',
    title: 'Camping Under Stars',
    category: 'camping',
  },
  {
    id: 5,
    url: 'https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg',
    title: 'Traditional Camp',
    category: 'camping',
  },
  {
    id: 6,
    url: 'https://images.pexels.com/photos/3568037/pexels-photo-3568037.jpeg',
    title: 'BBQ Dinner Setup',
    category: 'dining',
  },
  {
    id: 7,
    url: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg',
    title: 'Golden Dunes',
    category: 'landscape',
  },
  {
    id: 8,
    url: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
    title: 'Desert Journey',
    category: 'adventure',
  },
  {
    id: 9,
    url: 'https://images.pexels.com/photos/3568038/pexels-photo-3568038.jpeg',
    title: 'Desert Camp Entertainment',
    category: 'entertainment',
  },
  {
    id: 10,
    url: 'https://images.pexels.com/photos/2449600/pexels-photo-2449600.jpeg',
    title: 'Luxury Desert Experience',
    category: 'vip',
  },
  {
    id: 11,
    url: 'https://images.pexels.com/photos/3568040/pexels-photo-3568040.jpeg',
    title: 'Arabic Coffee Ceremony',
    category: 'culture',
  },
  {
    id: 12,
    url: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
    title: 'Sandboarding Fun',
    category: 'activities',
  },
];

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'adventure', label: 'Adventure' },
  { id: 'landscape', label: 'Landscape' },
  { id: 'activities', label: 'Activities' },
  { id: 'camping', label: 'Camping' },
  { id: 'dining', label: 'Dining' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'culture', label: 'Culture' },
  { id: 'vip', label: 'VIP' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages =
    selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the breathtaking beauty of Dubai's desert through our collection of memorable moments
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              className={
                selectedCategory === category.id
                  ? 'bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-semibold'
                  : 'border-[#d4af37]/30 text-gray-300 hover:bg-[#d4af37]/20 hover:text-white'
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group relative overflow-hidden border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:border-[#d4af37] transition-all cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.url}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] via-transparent to-transparent opacity-60"></div>
                <div className="absolute inset-0 bg-[#d4af37]/0 group-hover:bg-[#d4af37]/20 transition-all flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-all transform scale-50 group-hover:scale-100" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No images found in this category.</p>
          </div>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl bg-[#1a1a2e] border-[#d4af37]/20 p-0">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#d4af37] hover:bg-[#f4d03f] rounded-full flex items-center justify-center transition-all"
                >
                  <X className="w-6 h-6 text-[#1a1a2e]" />
                </button>
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  priority
                />
                <div className="p-6 bg-gradient-to-b from-transparent to-[#1a1a2e]">
                  <h2 className="text-2xl font-bold text-[#d4af37] mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-300 capitalize">
                    Category: {selectedImage.category}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
