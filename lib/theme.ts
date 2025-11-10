// Modern Color Theme Configuration
export const THEME = {
  // Primary Brand Colors - Modern Blue/Cyan Theme
  primary: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4', // Main Primary Color
    600: '#00acc1',
    700: '#0097a7',
    800: '#00838f',
    900: '#006064',
  },
  
  // Secondary/Accent Colors - Modern Orange/Amber
  secondary: {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800', // Main Secondary Color
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
  },
  
  // Background Colors - Dark Modern Theme
  background: {
    primary: '#0a0e27',    // Deep Navy
    secondary: '#151932',  // Dark Blue
    tertiary: '#1e2139',   // Medium Blue
    light: '#2a2d47',      // Light Blue
    card: '#1a1d3e',       // Card Background
  },
  
  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: '#b8bcc8',
    tertiary: '#8892b0',
    inverse: '#0a0e27',
  },
  
  // Border Colors
  border: {
    primary: '#00bcd4',
    secondary: '#26c6da',
    tertiary: '#4dd0e1',
    subtle: 'rgba(0, 188, 212, 0.2)',
  },
  
  // Status Colors
  status: {
    success: '#00e676',
    warning: '#ff9800',
    error: '#ff5252',
    info: '#2979ff',
  },
  
  // Gradient Colors
  gradients: {
    primary: 'linear-gradient(135deg, #0a0e27 0%, #151932 50%, #1e2139 100%)',
    card: 'linear-gradient(135deg, #1a1d3e 0%, #2a2d47 100%)',
    button: 'linear-gradient(135deg, #00bcd4 0%, #00acc1 100%)',
    buttonHover: 'linear-gradient(135deg, #26c6da 0%, #00bcd4 100%)',
    text: 'linear-gradient(135deg, #ffffff 0%, #b8bcc8 100%)',
  },
  
  // Shadow Colors
  shadows: {
    small: '0 2px 4px rgba(0, 188, 212, 0.1)',
    medium: '0 4px 12px rgba(0, 188, 212, 0.15)',
    large: '0 8px 24px rgba(0, 188, 212, 0.2)',
    glow: '0 0 20px rgba(0, 188, 212, 0.3)',
  },
};

// CSS Custom Properties for Tailwind
export const cssVariables = {
  '--color-primary': THEME.primary[500],
  '--color-primary-light': THEME.primary[400],
  '--color-primary-dark': THEME.primary[600],
  '--color-secondary': THEME.secondary[500],
  '--color-secondary-light': THEME.secondary[400],
  '--color-secondary-dark': THEME.secondary[600],
  '--color-bg-primary': THEME.background.primary,
  '--color-bg-secondary': THEME.background.secondary,
  '--color-bg-tertiary': THEME.background.tertiary,
  '--color-bg-card': THEME.background.card,
  '--color-text-primary': THEME.text.primary,
  '--color-text-secondary': THEME.text.secondary,
  '--color-text-tertiary': THEME.text.tertiary,
  '--color-border-primary': THEME.border.primary,
  '--color-border-secondary': THEME.border.secondary,
  '--color-border-subtle': THEME.border.subtle,
  '--gradient-primary': THEME.gradients.primary,
  '--gradient-card': THEME.gradients.card,
  '--gradient-button': THEME.gradients.button,
  '--gradient-button-hover': THEME.gradients.buttonHover,
};

// Tailwind CSS Extensions
export const tailwindExtensions = {
  theme: {
    extend: {
      colors: {
        primary: THEME.primary,
        secondary: THEME.secondary,
        'bg-primary': THEME.background.primary,
        'bg-secondary': THEME.background.secondary,
        'bg-tertiary': THEME.background.tertiary,
        'bg-light': THEME.background.light,
        'bg-card': THEME.background.card,
        'text-primary': THEME.text.primary,
        'text-secondary': THEME.text.secondary,
        'text-tertiary': THEME.text.tertiary,
        'border-primary': THEME.border.primary,
        'border-secondary': THEME.border.secondary,
        'border-subtle': THEME.border.subtle,
      },
      backgroundImage: {
        'gradient-primary': THEME.gradients.primary,
        'gradient-card': THEME.gradients.card,
        'gradient-button': THEME.gradients.button,
        'gradient-button-hover': THEME.gradients.buttonHover,
      },
      boxShadow: {
        'primary-small': THEME.shadows.small,
        'primary-medium': THEME.shadows.medium,
        'primary-large': THEME.shadows.large,
        'primary-glow': THEME.shadows.glow,
      },
    },
  },
};
