'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, DollarSign, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PackageDetailClientProps {
  packageData: {
    id: string;
    name: string;
    duration: string;
    price: number;
    priceAED: number;
    description: string;
    full_description: string;
    included: string[];
    excluded: string[];
    images: string[];
    featured?: boolean;
    badge?: string;
  };
}

export default function PackageDetailClient({
  packageData,
}: PackageDetailClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % packageData.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + packageData.images.length) % packageData.images.length
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/packages"
            className="text-[#d4af37] hover:text-[#f4d03f] transition-colors inline-flex items-center gap-2"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Packages
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                style={{
                  backgroundImage: `url(${packageData.images[currentImageIndex]})`,
                }}
              />
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 rounded-full transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {packageData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                    index === currentImageIndex
                      ? 'ring-4 ring-[#d4af37]'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${image})` }}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="text-white">
            <h1 className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-6">
              {packageData.name}
            </h1>

            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2 text-lg">
                <Clock className="w-5 h-5 text-[#d4af37]" />
                <span>{packageData.duration}</span>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-2 text-[#d4af37] font-bold">
                  <DollarSign className="w-5 h-5" />
                  <span>${packageData.price} USD</span>
                </div>
                <div className="text-gray-400">|</div>
                <div className="flex items-center gap-2 text-[#d4af37] font-bold">
                  <span>AED {packageData.priceAED}</span>
                </div>
                <span className="text-base font-normal text-gray-300">
                  / person
                </span>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              {packageData.full_description}
            </p>

            <Link href="/booking">
              <Button
                size="lg"
                className="w-full bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold text-lg py-6 transform hover:scale-105 transition-all"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-8 border border-[#d4af37]/20">
            <h2 className="text-2xl font-bold text-[#d4af37] mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Included
            </h2>
            <ul className="space-y-3 text-gray-300">
              {packageData.included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-8 border border-[#d4af37]/20">
            <h2 className="text-2xl font-bold text-[#d4af37] mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              Excluded
            </h2>
            <ul className="space-y-3 text-gray-300">
              {packageData.excluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
