import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import BlogDetailClient from '@/components/BlogDetailClient';
import blogsData from '@/data/blogs.json';

export function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogData = blogsData.find((blog) => blog.slug === params.slug);

  if (!blogData) {
    return notFound();
  }

  return <BlogDetailClient blogData={blogData} />;
}
