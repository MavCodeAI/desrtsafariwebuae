'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, Search } from 'lucide-react';
import blogsData from '@/data/blogs.json';
import Image from 'next/image';

const categories = ['All', 'Tips & Guides', 'Travel Planning', 'Culture', 'Photography', 'Family Travel', 'Nature'];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch =
      (blog.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
      (blog.excerpt || '').toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Travel Blog
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert guides, tips, and stories from the Arabian Desert
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 space-y-6">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-[#1a1a2e] border-[#d4af37]/30 text-white focus:border-[#d4af37] h-12"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-semibold'
                    : 'border-[#d4af37]/30 text-gray-300 hover:bg-[#d4af37]/20 hover:text-white'
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <Card
              key={blog.id}
              className="group border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:border-[#d4af37] transition-all overflow-hidden transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-[#d4af37] text-[#1a1a2e] px-3 py-1 rounded-full text-sm font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <h2 className="text-xl font-bold text-white group-hover:text-[#d4af37] transition-colors line-clamp-2">
                  {blog.title}
                </h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 line-clamp-3">{blog.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-[#d4af37]/20">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  <Link href={`/blog/${blog.slug}`}>
                    <Button
                      size="sm"
                      className="bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-semibold"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-xl">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
