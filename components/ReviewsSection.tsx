'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, User } from 'lucide-react';
import reviewsData from '@/data/reviews.json';

interface ReviewsSectionProps {
  limit?: number;
  title?: string;
  showPackage?: boolean;
}

export default function ReviewsSection({
  limit,
  title,
  showPackage = true,
}: ReviewsSectionProps) {
  const displayedReviews = limit ? reviewsData.slice(0, limit) : reviewsData;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {title || 'What Our Guests Say'}
          </h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Real experiences from real travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <Card
              key={review.id}
              className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:border-[#d4af37] transition-all"
            >
              <CardContent className="pt-6 space-y-4">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-[#d4af37]/20 flex items-center justify-center">
                    <User className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{review.name}</h3>
                    <p className="text-gray-400 text-sm">{review.country}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>

                {/* Package */}
                {showPackage && (
                  <div className="inline-block px-3 py-1 bg-[#d4af37]/20 rounded-full">
                    <p className="text-sm text-[#d4af37] font-semibold">
                      {review.package}
                    </p>
                  </div>
                )}

                {/* Review Text */}
                <p className="text-gray-300 italic">
                  &quot;{review.review}&quot;
                </p>

                {/* Date */}
                <p className="text-gray-400 text-sm">
                  {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
