'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en';

interface TranslationKeys {
  nav_home: string;
  nav_packages: string;
  nav_gallery: string;
  nav_blog: string;
  nav_about: string;
  nav_contact: string;
  nav_booking: string;
  hero_title: string;
  hero_subtitle: string;
  quick_links: string;
  contact_info: string;
  address: string;
  all_rights_reserved: string;
  about_title: string;
  about_subtitle: string;
  book_now: string;
}

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav_home: 'Home',
    nav_packages: 'Packages',
    nav_gallery: 'Gallery',
    nav_blog: 'Blog',
    nav_about: 'About',
    nav_contact: 'Contact',
    nav_booking: 'Book Now',
    hero_title: 'Experience the Ultimate Desert Safari',
    hero_subtitle: 'Discover the magic of Dubai\'s desert with thrilling dune bashing, traditional camps, and unforgettable adventures.',
    quick_links: 'Quick Links',
    contact_info: 'Contact Info',
    address: 'Dubai, United Arab Emirates',
    all_rights_reserved: 'All rights reserved',
    about_title: 'About Dubai Desert Safari',
    about_subtitle: 'Learn more about our journey and commitment to exceptional desert experiences',
    book_now: 'Book Now',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: keyof TranslationKeys): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
