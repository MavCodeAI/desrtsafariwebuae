'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar, Users, Mail, Phone, User } from 'lucide-react';
import packagesData from '@/data/packages.json';
import { toast } from 'sonner';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import { bookingFormSchema, type BookingFormData } from '@/lib/validations';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

export default function BookingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    watch,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
  });

  const selectedDate = watch('date');

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Booking successful! We will contact you soon.');
      setIsSubmitting(false);
      reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#0f0f1e] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Book Your Desert Safari
          </h1>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Fill in the form below to reserve your unforgettable desert adventure</p>
        </div>

        <Card className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
          <CardHeader>
            <CardTitle className="text-2xl text-[#d4af37]">
              Booking Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-white flex items-center gap-2">
                    <User className="w-4 h-4 text-[#d4af37]" />
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    {...register('fullName')}
                    className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37]"
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-sm">{errors.fullName.message}</p>
                  )}
                </div>

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
                    placeholder="Enter your email address"
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

                <div className="space-y-2">
                  <Label htmlFor="guests" className="text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4af37]" />
                    Number of Guests
                  </Label>
                  <Input
                    id="guests"
                    type="number"
                    min="1"
                    max="20"
                    {...register('guests')}
                    className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37]"
                  />
                  {errors.guests && (
                    <p className="text-red-400 text-sm">{errors.guests.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="package" className="text-white">
                  Select Package
                </Label>
                <Controller
                  name="packageId"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-[#0f0f1e] border-[#d4af37]/30 text-white">
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1a1a2e] border-[#d4af37]/30 text-white">
                        {packagesData.map((pkg) => (
                          <SelectItem
                            key={pkg.id}
                            value={pkg.id}
                            className="hover:bg-[#d4af37]/20 focus:bg-[#d4af37]/20"
                          >
                            {pkg.name} - ${pkg.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.packageId && (
                  <p className="text-red-400 text-sm">{errors.packageId.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#d4af37]" />
                  Select Date
                </Label>
                <AvailabilityCalendar 
                  selectedDate={selectedDate || ''}
                  onDateSelect={(date) => setValue('date', date)}
                  packageId={watch('packageId')}
                />
                {errors.date && (
                  <p className="text-red-400 text-sm">{errors.date.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequests" className="text-white">
                  Special Requests
                </Label>
                <Textarea
                  id="specialRequests"
                  {...register('specialRequests')}
                  className="bg-[#0f0f1e] border-[#d4af37]/30 text-white focus:border-[#d4af37] min-h-32"
                  placeholder="Any special requests or dietary requirements"
                />
                {errors.specialRequests && (
                  <p className="text-red-400 text-sm">{errors.specialRequests.message}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-[#d4af37] hover:bg-[#f4d03f] text-[#1a1a2e] font-bold text-lg py-6 transform hover:scale-105 transition-all"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
