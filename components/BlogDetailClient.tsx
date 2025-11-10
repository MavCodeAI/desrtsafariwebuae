'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { toast } from 'sonner';

interface BlogData {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogDetailClient({ blogData }: { blogData: BlogData }) {

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = blogData.title;

    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/blog">
          <Button
            variant="outline"
            className="mb-8 border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Card className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] overflow-hidden">
          {/* Hero Image */}
          <div className="relative h-96 overflow-hidden">
            <img
              src={blogData.image}
              alt={blogData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f1e] via-transparent to-transparent"></div>
            <div className="absolute top-6 right-6">
              <span className="bg-[#d4af37] text-[#1a1a2e] px-4 py-2 rounded-full text-sm font-semibold">
                {blogData.category}
              </span>
            </div>
          </div>

          <CardContent className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blogData.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-[#d4af37]/20">
              <div className="flex items-center gap-2 text-gray-300">
                <User className="w-5 h-5 text-[#d4af37]" />
                <span>{blogData.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar className="w-5 h-5 text-[#d4af37]" />
                <span>{new Date(blogData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock className="w-5 h-5 text-[#d4af37]" />
                <span>{blogData.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6 whitespace-pre-line">
                {blogData.content}
              </div>
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-[#d4af37]/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Share2 className="w-5 h-5 text-[#d4af37]" />
                Share This Article
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => handleShare('facebook')}
                  className="bg-[#1877f2] hover:bg-[#0c63d4] text-white"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  onClick={() => handleShare('twitter')}
                  className="bg-[#1da1f2] hover:bg-[#0d8bd9] text-white"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </Button>
                <Button
                  onClick={() => handleShare('linkedin')}
                  className="bg-[#0a66c2] hover:bg-[#084f94] text-white"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                <Button
                  onClick={() => handleShare('copy')}
                  variant="outline"
                  className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]"
                >
                  Copy Link
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-gradient-to-r from-[#d4af37]/20 to-[#f4d03f]/10 rounded-lg border border-[#d4af37]/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for Your Desert Adventure?
              </h3>
              <p className="text-gray-300 mb-6">
                Book your unforgettable desert safari experience today and create memories that will last a lifetime.
              </p>
              <Link href="/booking">
                <Button
                  size="lg"
                  className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold"
                >
                  Book Now
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
