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
  description,
  images,
  featured,
  badge,
}: PackageCardProps) {

  return (
    <Card className="group overflow-hidden border-[#d4af37]/30 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#1a1a2e] hover:border-[#d4af37] transition-all duration-500 relative premium-card-hover shadow-2xl hover:shadow-[#d4af37]/20">
      {badge && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a1a2e] px-4 py-1.5 rounded-full text-xs font-bold shadow-lg gold-border-glow animate-pulse">
          {badge}
        </div>
      )}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={images[0]}
          alt={name}
          fill
          className="object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/80" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] text-[#1a1a2e] px-5 py-2.5 rounded-full font-bold text-lg shadow-2xl gold-border-glow transform group-hover:scale-110 transition-transform duration-300">
          ${price}
        </div>
      </div>

      <CardContent className="p-6 relative">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300 gold-glow">
          {name}
        </h3>

        <div className="flex items-center gap-4 mb-5 text-[#d4af37]">
          <div className="flex items-center gap-2 bg-[#d4af37]/10 px-3 py-1.5 rounded-full">
            <Clock className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-semibold">{duration}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#d4af37]/10 px-3 py-1.5 rounded-full">
            <DollarSign className="w-4 h-4 text-[#d4af37]" />
            <span className="text-sm font-semibold">${price}/person</span>
          </div>
        </div>

        <p className="text-gray-300 mb-6 line-clamp-3 leading-relaxed text-sm">{description}</p>

        <div className="pt-4 border-t border-[#d4af37]/20">
          <Link href={`/booking?package=${id}`}>
            <Button className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ffd700] text-[#1a1a2e] py-3 text-lg font-bold shadow-lg hover:shadow-[#d4af37]/50 transform hover:scale-105 transition-all duration-300">
              Book Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
