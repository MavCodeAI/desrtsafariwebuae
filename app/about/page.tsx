'use client';

import { Award, Shield, Users, Heart, Star, Clock } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutPage() {

  const features = [
    {
      icon: Award,
      title: 'Award-Winning Service',
      desc: 'Recognized for excellence in desert tourism and hospitality',
    },
    {
      icon: Shield,
      title: 'Safety First',
      desc: 'Certified drivers and comprehensive insurance for your peace of mind',
    },
    {
      icon: Users,
      title: 'Expert Guides',
      desc: 'Knowledgeable local guides with years of desert experience',
    },
    {
      icon: Heart,
      title: 'Authentic Experience',
      desc: 'Genuine Bedouin culture, traditions, and Arabian hospitality',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'United States',
      rating: 5,
      text:
        'An absolutely magical experience! The sunset dune bashing was thrilling, and the dinner at the camp was exceptional. Highly recommend!',
    },
    {
      name: 'Mohammed Al-Rashid',
      country: 'Saudi Arabia',
      rating: 5,
      text:
        'Perfect organization and wonderful hospitality. The guides were professional and the entertainment was fantastic. A must-do in Dubai!',
    },
    {
      name: 'Emma Thompson',
      country: 'United Kingdom',
      rating: 5,
      text:
        'The overnight safari was unforgettable. Sleeping under the stars and waking up to a desert sunrise - pure magic!',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Desert Safari UAE
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your premier gateway to authentic Arabian desert adventures and unforgettable experiences
          </p>
        </div>

        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url(https://images.pexels.com/photos/3568039/pexels-photo-3568039.jpeg)',
                }}
              />
            </div>
            <div className="text-white space-y-6">
              <h2 className="text-3xl font-bold text-[#d4af37]">Our Story</h2>
              <p className="text-gray-300 leading-relaxed">
                For over a decade, Dubai Desert Safari has been creating
                unforgettable memories for travelers from around the world. What
                started as a passion for sharing the beauty of the Arabian
                desert has grown into Dubai&apos;s premier desert safari operator.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe in offering authentic, sustainable, and safe desert
                experiences that connect people with the timeless beauty of the
                dunes while honoring traditional Bedouin culture and values.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our team of experienced guides and drivers are passionate about
                the desert and committed to ensuring every guest has an
                exceptional experience that exceeds expectations.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-6 border border-[#d4af37]/20 hover:border-[#d4af37] transition-all transform hover:-translate-y-2"
                >
                  <div className="w-14 h-14 bg-[#d4af37]/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-lg p-6 border border-[#d4af37]/20"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#d4af37] text-[#d4af37]"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="text-white font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-400 text-sm">{testimonial.country}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-lg p-12 text-center border border-[#d4af37]/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for Your Desert Adventure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied guests and create memories that will last
            a lifetime
          </p>
          <Link href="/booking">
            <Button
              size="lg"
              className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold text-lg px-12 py-6 transform hover:scale-110 transition-all"
            >
              Book Now
            </Button>
          </Link>
        </section>
      </div>
    </main>
  );
}
