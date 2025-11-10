'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg',
    alt: 'Desert Sunset',
  },
  {
    image: 'https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg',
    alt: 'Camel Ride',
  },
  {
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    alt: 'Desert Camp',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[10000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform:
                index === currentSlide ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Desert Safari Adventures
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in-up animation-delay-200">
            Experience the magic of the Arabian desert with our unforgettable safari tours
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold text-lg px-8 py-6 rounded-full transform hover:scale-110 transition-all shadow-2xl animate-fade-in-up animation-delay-400"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-[#d4af37]/20 hover:bg-[#d4af37]/40 backdrop-blur-sm p-3 rounded-full transition-all border border-[#d4af37]/30"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-[#d4af37]/20 hover:bg-[#d4af37]/40 backdrop-blur-sm p-3 rounded-full transition-all border border-[#d4af37]/30"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide
                ? 'w-12 bg-[#d4af37]'
                : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
