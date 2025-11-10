'use client';

import HeroSlider from '@/components/HeroSlider';
import PackageCard from '@/components/PackageCard';
import packagesData from '@/data/packages.json';
import { Star, Users, Award, MapPin, Calendar, Clock } from 'lucide-react';

export default function Home() {

  const features = [
    {
      icon: Star,
      title: 'Premium Experience',
      description: 'Luxury desert adventures with world-class service',
      color: 'text-[#d4af37]'
    },
    {
      icon: Users,
      title: 'Expert Guides',
      description: 'Professional local guides with extensive desert knowledge',
      color: 'text-[#d4af37]'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in desert tourism worldwide',
      color: 'text-[#d4af37]'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Access to the most spectacular desert landscapes',
      color: 'text-[#d4af37]'
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-desert">
      <HeroSlider />

      {/* Features Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gold-glow animate-float">
              Why Choose Dubai Desert Safari?
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8 rounded-full shadow-lg shadow-[#d4af37]/50"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of the Arabian desert with our premium safari packages designed for unforgettable adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group animate-fade-in-up glass-morphism p-8 rounded-2xl hover:scale-105 transition-all duration-500 border border-[#d4af37]/20 hover:border-[#d4af37]/50 premium-card-hover" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className={`w-16 h-16 ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 relative`}>
                    <div className="absolute inset-0 bg-[#d4af37]/20 rounded-full blur-xl group-hover:bg-[#d4af37]/40 transition-all"></div>
                    <Icon className="w-full h-full relative z-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#d4af37] transition-colors gold-glow">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 gold-glow animate-float">
              Our Desert Safari Packages
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8 rounded-full shadow-lg shadow-[#d4af37]/50"></div>
            <p className="text-xl text-[#d4af37] max-w-2xl mx-auto font-medium">
              Choose from our carefully curated selection of desert adventures, each designed to offer unforgettable experiences in Dubai&apos;s magnificent desert landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {packagesData.map((pkg, index) => (
              <div key={pkg.id} className="animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <div className="glass-morphism p-12 rounded-3xl border border-[#d4af37]/30 luxury-gradient relative overflow-hidden">
            <div className="absolute inset-0 premium-shimmer opacity-30"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gold-glow relative z-10">
              Ready for Your Desert Adventure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Book your unforgettable desert safari experience today and create memories that will last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
              <a href="/booking" className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ffd700] text-[#1a1a2e] px-10 py-4 text-lg font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/50 transform hover:scale-105">
                Book Your Safari
              </a>
              <a href="/contact" className="border-2 border-[#d4af37] text-[#d4af37] px-10 py-4 rounded-full font-semibold hover:bg-[#d4af37] hover:text-[#1a1a2e] transition-all duration-300 shadow-lg hover:shadow-[#d4af37]/30 transform hover:scale-105">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
