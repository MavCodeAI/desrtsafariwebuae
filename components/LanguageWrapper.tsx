'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { ReactNode } from 'react';

interface LanguageWrapperProps {
  children: ReactNode;
}

export default function LanguageWrapper({ children }: LanguageWrapperProps) {
  const { language } = useLanguage();

  return (
    <div lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
}
