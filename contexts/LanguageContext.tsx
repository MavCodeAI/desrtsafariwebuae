'use client';

import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

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
  why_choose_title: string;
  why_choose_subtitle: string;
  premium_experience_title: string;
  premium_experience_desc: string;
  expert_guides_title: string;
  expert_guides_desc: string;
  award_winning_title: string;
  award_winning_desc: string;
  prime_locations_title: string;
  prime_locations_desc: string;
  packages_title: string;
  packages_subtitle: string;
  cta_title: string;
  cta_subtitle: string;
  book_safari: string;
  contact_us: string;
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
    why_choose_title: 'Why Choose Dubai Desert Safari?',
    why_choose_subtitle: 'Experience the magic of the Arabian desert with our premium safari packages designed for unforgettable adventures.',
    premium_experience_title: 'Premium Experience',
    premium_experience_desc: 'Luxury desert adventures with world-class service',
    expert_guides_title: 'Expert Guides',
    expert_guides_desc: 'Professional local guides with extensive desert knowledge',
    award_winning_title: 'Award Winning',
    award_winning_desc: 'Recognized for excellence in desert tourism worldwide',
    prime_locations_title: 'Prime Locations',
    prime_locations_desc: 'Access to the most spectacular desert landscapes',
    packages_title: 'Our Desert Safari Packages',
    packages_subtitle: 'Choose from our carefully curated selection of desert adventures, each designed to offer unforgettable experiences in Dubai\'s magnificent desert landscape.',
    cta_title: 'Ready for Your Desert Adventure?',
    cta_subtitle: 'Book your unforgettable desert safari experience today and create memories that will last a lifetime.',
    book_safari: 'Book Your Safari',
    contact_us: 'Contact Us',
  },
  ar: {
    nav_home: 'الرئيسية',
    nav_packages: 'الباقات',
    nav_gallery: 'المعرض',
    nav_blog: 'المدونة',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    nav_booking: 'احجز الآن',
    hero_title: 'استمتع بسفاري الصحراء الأمثل',
    hero_subtitle: 'اكتشف سحر صحراء دبي مع ركوب التلال الرملية المثيرة، والمعسكرات التقليدية، والمغامرات التي لا تُنسى.',
    quick_links: 'روابط سريعة',
    contact_info: 'معلومات الاتصال',
    address: 'دبي، الإمارات العربية المتحدة',
    all_rights_reserved: 'جميع الحقوق محفوظة',
    about_title: 'عن سفاري صحراء دبي',
    about_subtitle: 'تعرف أكثر على رحلتنا والتزامنا بتقديم تجارب صحراوية استثنائية',
    book_now: 'احجز الآن',
    why_choose_title: 'لماذا تختار سفاري صحراء دبي؟',
    why_choose_subtitle: 'استمتع بسحر الصحراء العربية مع باقات السفاري المميزة لدينا المصممة لمغامرات لا تُنسى.',
    premium_experience_title: 'تجربة مميزة',
    premium_experience_desc: 'مغامرات صحراوية فاخرة مع خدمة عالمية المستوى',
    expert_guides_title: 'مرشدون خبراء',
    expert_guides_desc: 'مرشدون محليون محترفون بمعرفة واسعة بالصحراء',
    award_winning_title: 'حائز على جوائز',
    award_winning_desc: 'معترف به للتميز في السياحة الصحراوية عالمياً',
    prime_locations_title: 'مواقع متميزة',
    prime_locations_desc: 'وصول إلى أجمل المناظر الصحراوية',
    packages_title: 'باقات سفاري الصحراء لدينا',
    packages_subtitle: 'اختر من مجموعتنا المختارة بعناية من المغامرات الصحراوية، مصممة كل منها لتقديم تجارب لا تُنسى في صحراء دبي الرائعة.',
    cta_title: 'مستعد لمغامرتك الصحراوية؟',
    cta_subtitle: 'احجز تجربة سفاري صحراوك التي لا تُنسى اليوم وأنشئ ذكريات تدوم مدى الحياة.',
    book_safari: 'احجز سفاريك',
    contact_us: 'اتصل بنا',
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
