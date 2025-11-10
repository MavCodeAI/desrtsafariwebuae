// Image configuration for local hosting
export const IMAGE_CONFIG = {
  // Base URLs
  baseUrl: process.env.NODE_ENV === 'production' 
    ? 'https://dubaidesert.com' 
    : 'http://localhost:3000',
  
  // Image paths
  paths: {
    gallery: '/images/gallery',
    packages: '/images/packages',
    blog: '/images/blog',
    hero: '/images/hero',
    logos: '/images/logos',
  },
  
  // Default images for fallbacks
  fallbacks: {
    gallery: '/images/gallery/fallback.jpg',
    package: '/images/packages/fallback.jpg',
    blog: '/images/blog/fallback.jpg',
    hero: '/images/hero/fallback.jpg',
  },
  
  // Image sizes for optimization
  sizes: {
    gallery: {
      thumbnail: { width: 300, height: 200 },
      medium: { width: 600, height: 400 },
      large: { width: 1200, height: 800 },
    },
    package: {
      thumbnail: { width: 400, height: 300 },
      medium: { width: 800, height: 600 },
    },
    blog: {
      thumbnail: { width: 400, height: 210 },
      medium: { width: 800, height: 420 },
      large: { width: 1200, height: 630 },
    },
    hero: {
      mobile: { width: 640, height: 360 },
      tablet: { width: 1024, height: 576 },
      desktop: { width: 1920, height: 1080 },
    },
  },
  
  // Quality settings
  quality: {
    webp: 80,
    jpg: 85,
    png: 90,
  },
  
  // Lazy loading settings
  lazyLoading: {
    threshold: 0.1,
    rootMargin: '50px',
  },
};

// Helper function to get optimized image URL
export function getOptimizedImageUrl(
  path: string, 
  size: 'thumbnail' | 'medium' | 'large' | 'mobile' | 'tablet' | 'desktop' = 'medium'
): string {
  return `${IMAGE_CONFIG.baseUrl}${path}?w=${getImageWidth(size)}&q=${IMAGE_CONFIG.quality.webp}&format=webp`;
}

// Helper function to get image width
function getImageWidth(size: string): number {
  const sizeMap: Record<string, number> = {
    thumbnail: 300,
    medium: 600,
    large: 1200,
    mobile: 640,
    tablet: 1024,
    desktop: 1920,
  };
  return sizeMap[size] || 600;
}

// Helper function to generate srcset for responsive images
export function generateSrcSet(basePath: string, sizes: string[]): string {
  return sizes
    .map(size => `${getOptimizedImageUrl(basePath, size as any)} ${getImageWidth(size)}w`)
    .join(', ');
}

// Helper function to get sizes attribute
export function getSizesAttr(breakpoints: string[]): string {
  return breakpoints.join(', ');
}
