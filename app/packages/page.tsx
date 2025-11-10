'use client';

import { useState } from 'react';
import PackageCard from '@/components/PackageCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal } from 'lucide-react';
import packagesData from '@/data/packages.json';

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [durationFilter, setDurationFilter] = useState('all');

  const filteredPackages = packagesData.filter((pkg) => {
    const matchesSearch =
      (pkg.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (pkg.description || '').toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'budget' && (pkg.price || 0) < 100) ||
      (priceFilter === 'standard' && (pkg.price || 0) >= 100 && (pkg.price || 0) < 200) ||
      (priceFilter === 'premium' && (pkg.price || 0) >= 200);

    const matchesDuration =
      durationFilter === 'all' ||
      (durationFilter === 'short' && (pkg.duration || '').includes('3')) ||
      (durationFilter === 'medium' && (pkg.duration || '').includes('4')) ||
      (durationFilter === 'long' && ((pkg.duration || '').includes('5') || (pkg.duration || '').includes('12')));

    return matchesSearch && matchesPrice && matchesDuration;
  });

  const resetFilters = () => {
    setSearchTerm('');
    setPriceFilter('all');
    setDurationFilter('all');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Desert Safari Packages
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of desert safari experiences, from thrilling dune bashing adventures to luxurious overnight camps under the stars.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search packages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-[#1a1a2e] border-[#d4af37]/30 text-white focus:border-[#d4af37] h-12"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5 text-[#d4af37]" />
              <span className="text-white font-semibold">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="px-4 py-2 rounded-md bg-[#1a1a2e] border border-[#d4af37]/30 text-white focus:border-[#d4af37] cursor-pointer"
              >
                <option value="all">All Prices</option>
                <option value="budget">Budget (&lt; $100)</option>
                <option value="standard">Standard ($100-$200)</option>
                <option value="premium">Premium ($200+)</option>
              </select>

              <select
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
                className="px-4 py-2 rounded-md bg-[#1a1a2e] border border-[#d4af37]/30 text-white focus:border-[#d4af37] cursor-pointer"
              >
                <option value="all">All Durations</option>
                <option value="short">Short (3 hours)</option>
                <option value="medium">Medium (4-5 hours)</option>
                <option value="long">Long (12+ hours)</option>
              </select>

              {(searchTerm || priceFilter !== 'all' || durationFilter !== 'all') && (
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]"
                >
                  Reset Filters
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <p className="text-gray-400">
            Showing {filteredPackages.length} of {packagesData.length} packages
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} {...pkg} />
          ))}
        </div>

        {filteredPackages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl mb-4">No packages found matching your criteria.</p>
            <Button
              onClick={resetFilters}
              className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-semibold"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </main>
  );
}
