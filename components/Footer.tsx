'use client';

import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/booking', label: 'Book Now' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e] text-white border-t border-[#d4af37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#d4af37] mb-4">
              Dubai Desert Safari
            </h3>
            <p className="text-gray-300 mb-4">
              Discover the magic of Dubai's desert with thrilling dune bashing, traditional camps, and unforgettable adventures.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-[#d4af37]/20 hover:bg-[#d4af37] hover:text-[#1a1a2e] flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#d4af37] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#d4af37] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#d4af37] mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <span>+971 50 123 4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-[#d4af37] mt-1 flex-shrink-0" />
                <span>info@dubaidesert.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-8 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Dubai Desert Safari.{' '}
            All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
