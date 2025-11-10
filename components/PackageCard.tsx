'use client';

import Link from 'next/link';
import { Clock, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';

interface PackageCardProps {
  id: string;
  name: string;
  duration: string;
  price: number;
  priceAED: number;
  description: string;
  images: string[];
  featured?: boolean;
  badge?: string;
}

export default function PackageCard({
  id,
  name,
  duration,
  price,
  priceAED,
  description,
  images,
  featured,
  badge,
}: PackageCardProps) {

  return (
    <Card className="group overflow-hidden border-[#d4af37]/30 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] hover:border-[#d4af37] transition-all duration-500 relative premium-card-hover shadow-2xl hover:shadow-[#d4af37]/20 flex flex-col h-full min-h-[450px] sm:min-h-[500px]">
      {badge && (
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a1a2e] px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-xs font-bold shadow-lg gold-border-glow animate-pulse">
          {badge}
        </div>
      )}
      <div className="relative h-48 sm:h-64 overflow-hidden flex-shrink-0">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a1a2e] px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold text-sm sm:text-lg shadow-2xl gold-border-glow transform group-hover:scale-110 transition-transform duration-300">
          <div className="text-center">
            <div className="text-xs sm:text-sm opacity-90">USD</div>
            <div className="text-sm sm:text-base">${price}</div>
            <div className="text-xs opacity-75 border-t border-[#1a1a2e]/20 pt-0.5 sm:pt-1 mt-0.5 sm:mt-1">
              AED {priceAED}
            </div>
          </div>
        </div>
      </div>

      <CardContent className="p-4 sm:p-6 relative flex flex-col flex-grow">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300 gold-glow flex-shrink-0">
          {name}
        </h3>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-4 sm:mb-5 text-[#d4af37] flex-shrink-0">
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#d4af37]/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37]" />
            <span className="text-xs sm:text-sm font-semibold">{duration}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-[#d4af37]/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full">
            <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37]" />
            <span className="text-xs sm:text-sm font-semibold">${price} USD / {priceAED} AED</span>
          </div>
        </div>

        <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm flex-grow line-clamp-3">{description}</p>

        <div className="pt-3 sm:pt-4 border-t border-[#d4af37]/20 flex-shrink-0">
          <Link href={`/booking?package=${id}`}>
            <Button className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ffd700] text-[#1a1a2e] py-2.5 sm:py-3 text-sm sm:text-lg font-bold shadow-lg hover:shadow-[#d4af37]/50 transform hover:scale-105 transition-all duration-300 min-h-[40px] sm:min-h-[44px]">
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
