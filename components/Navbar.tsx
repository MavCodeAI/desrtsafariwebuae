'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Navbar() {
  const { language, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav_home') },
    { href: '/packages', label: t('nav_packages') },
    { href: '/gallery', label: t('nav_gallery') },
    { href: '/blog', label: t('nav_blog') },
    { href: '/about', label: t('nav_about') },
    { href: '/contact', label: t('nav_contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0f0f1e]/95 backdrop-blur-xl shadow-2xl border-b border-[#d4af37]/30 gold-border-glow'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between h-20 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
          <Link
            href="/"
            className="text-2xl font-bold text-[#d4af37] hover:text-[#f4d03f] transition-all duration-300 gold-glow transform hover:scale-105"
          >
            {language === 'ar' ? 'سفاري صحراء دبي' : 'Dubai Desert Safari'}
          </Link>

          <div className={`hidden md:flex items-center ${language === 'ar' ? 'space-x-reverse' : ''} space-x-8`}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-[#d4af37] transition-all duration-300 text-base font-medium relative group"
              >
                {link.label}
                <span className={`absolute bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] group-hover:w-full transition-all duration-300`}></span>
              </Link>
            ))}

            <LanguageSwitcher />

            <Link href="/booking">
              <Button className="bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ffd700] text-[#1a1a2e] font-bold shadow-lg hover:shadow-[#d4af37]/50 transform hover:scale-105 transition-all duration-300">
                {t('nav_booking')}
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#d4af37] p-2"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f0f1e]/98 backdrop-blur-md border-t border-[#d4af37]/20">
          <div className={`px-4 py-6 ${language === 'ar' ? 'text-right' : ''} space-y-4`}>
            <div className="flex justify-center mb-4">
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white hover:text-[#d4af37] transition-colors text-lg font-medium py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full bg-gradient-to-r from-[#d4af37] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#ffd700] text-[#1a1a2e] font-bold shadow-lg">
                {t('nav_booking')}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
