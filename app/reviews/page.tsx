'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, User, TrendingUp } from 'lucide-react';
import reviewsData from '@/data/reviews.json';

export default function ReviewsPage() {
  const [selectedPackage, setSelectedPackage] = useState('all');

  const packages = ['all', ...Array.from(new Set(reviewsData.map((r) => r.package)))];

  const filteredReviews =
    selectedPackage === 'all'
      ? reviewsData
      : reviewsData.filter((r) => r.package === selectedPackage);

  const averageRating = (
    reviewsData.reduce((acc, r) => acc + r.rating, 0) / reviewsData.length
  ).toFixed(1);

  const stats = [
    { label: 'Total Reviews', value: reviewsData.length },
    { label: 'Average Rating', value: `${averageRating} / 5.0` },
    { label: '5-Star Reviews', value: reviewsData.filter((r) => r.rating === 5).length },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Customer Reviews
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See what our guests say about their desert safari experiences
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-center"
            >
              <CardContent className="pt-8 pb-6">
                <TrendingUp className="w-10 h-10 text-[#d4af37] mx-auto mb-4" />
                <h3 className="text-4xl font-bold text-[#d4af37] mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-300">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {packages.map((pkg) => (
              <Button
                key={pkg}
                onClick={() => setSelectedPackage(pkg)}
                variant={selectedPackage === pkg ? 'default' : 'outline'}
                className={
                  selectedPackage === pkg
                    ? 'bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-semibold'
                    : 'border-[#d4af37]/30 text-gray-300 hover:bg-[#d4af37]/20 hover:text-white'
                }
              >
                {pkg === 'all' ? 'All Packages' : pkg}
              </Button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <Card
              key={review.id}
              className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:border-[#d4af37] transition-all"
            >
              <CardContent className="pt-6 space-y-4">
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
                <div className="inline-block px-3 py-1 bg-[#d4af37]/20 rounded-full">
                  <p className="text-sm text-[#d4af37] font-semibold">
                    {review.package}
                  </p>
                </div>

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

        {filteredReviews.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No reviews found for this package.</p>
          </div>
        )}
      </div>
    </main>
  );
}
