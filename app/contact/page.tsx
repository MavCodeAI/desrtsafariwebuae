'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, User, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Message sent successfully! We will contact you soon.');
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'Dubai, United Arab Emirates',
      link: 'https://maps.google.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+971 50 123 4567',
      link: 'tel:+971501234567',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@dubaidesert.com',
      link: 'mailto:info@dubaidesert.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '24/7 Available',
      link: null,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] hover:border-[#d4af37] transition-all transform hover:-translate-y-2"
              >
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#d4af37]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-300 hover:text-[#d4af37] transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.content}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
            <CardHeader>
              <CardTitle className="text-2xl text-[#d4af37] flex items-center gap-2">
                <MessageSquare className="w-6 h-6" />
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-[#d4af37]" />
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    {...register('name')}
                    className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37]"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">{errors.name.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#d4af37]" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37]"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#d4af37]" />
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37]"
                      placeholder="+971 50 123 4567"
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-white">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    {...register('subject')}
                    className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37]"
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm">{errors.subject.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register('message')}
                    className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37] min-h-32"
                    placeholder="Tell us more about your inquiry..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold text-lg py-6 transform hover:scale-105 transition-all"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
              <CardHeader>
                <CardTitle className="text-2xl text-[#d4af37]">
                  Location Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828163654!2d54.947284!3d25.076022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            <Card className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#d4af37] mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                    <span>Expert advice for your desert adventure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                    <span>Custom package arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full mt-2"></div>
                    <span>Special group discounts available</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
