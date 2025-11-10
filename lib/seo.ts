import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

const defaultMetadata = {
  siteName: 'Dubai Desert Safari',
  defaultTitle: 'Dubai Desert Safari | Unforgettable Arabian Adventures',
  defaultDescription:
    'Experience the magic of Dubai\'s desert with thrilling dune bashing, camel rides, traditional BBQ dinners, and authentic Bedouin culture. Book your unforgettable desert safari today!',
  defaultKeywords: [
    'Dubai desert safari',
    'desert safari UAE',
    'dune bashing Dubai',
    'camel riding Dubai',
    'overnight desert safari',
    'Dubai tourism',
    'Arabian desert adventure',
    'BBQ dinner desert',
    'sandboarding Dubai',
    'Bedouin culture experience',
  ],
  defaultImage: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
  baseUrl: 'https://dubaidesert.com',
};

export function generateSEO({
  title,
  description,
  keywords,
  image,
  url,
}: SEOProps = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${defaultMetadata.siteName}`
    : defaultMetadata.defaultTitle;
  const pageDescription = description || defaultMetadata.defaultDescription;
  const pageKeywords = keywords
    ? [...defaultMetadata.defaultKeywords, ...keywords]
    : defaultMetadata.defaultKeywords;
  const pageImage = image || defaultMetadata.defaultImage;
  const pageUrl = url ? `${defaultMetadata.baseUrl}${url}` : defaultMetadata.baseUrl;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords.join(', '),
    authors: [{ name: 'Dubai Desert Safari Team' }],
    creator: 'Dubai Desert Safari',
    publisher: 'Dubai Desert Safari',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: defaultMetadata.siteName,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
      creator: '@dubaidesert',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export const defaultSEO = generateSEO();
