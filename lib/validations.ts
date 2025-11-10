import { z } from 'zod';

// Contact Form Validation
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 digits')
    .regex(/^[+]?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  subject: z.string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters')
});

// Booking Form Validation
export const bookingFormSchema = z.object({
  fullName: z.string()
    .min(2, 'Full name must be at least 2 characters')
    .max(50, 'Full name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Full name must contain only letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters'),
  phone: z.string()
    .min(10, 'Phone number must be at least 10 digits')
    .max(20, 'Phone number must be less than 20 digits')
    .regex(/^[+]?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
  date: z.string()
    .min(1, 'Please select a date')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Date cannot be in the past'),
  packageId: z.string()
    .min(1, 'Please select a package'),
  guests: z.string()
    .transform((val) => parseInt(val))
    .pipe(z.number().min(1, 'At least 1 guest is required').max(20, 'Maximum 20 guests allowed')),
  specialRequests: z.string()
    .max(500, 'Special requests must be less than 500 characters')
    .optional()
    .or(z.literal(''))
});

// Newsletter Subscription Validation
export const newsletterSchema = z.object({
  email: z.string()
    .email('Please enter a valid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email must be less than 100 characters')
});

// Search Validation
export const searchSchema = z.object({
  query: z.string()
    .min(1, 'Search query cannot be empty')
    .max(100, 'Search query must be less than 100 characters')
});

// Review Form Validation (for future use)
export const reviewFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name must contain only letters and spaces'),
  email: z.string()
    .email('Please enter a valid email address'),
  rating: z.number()
    .min(1, 'Please select a rating')
    .max(5, 'Rating must be between 1 and 5'),
  package: z.string()
    .min(1, 'Please select a package'),
  review: z.string()
    .min(10, 'Review must be at least 10 characters')
    .max(1000, 'Review must be less than 1000 characters')
});

// Export types
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type BookingFormData = z.infer<typeof bookingFormSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type SearchFormData = z.infer<typeof searchSchema>;
export type ReviewFormData = z.infer<typeof reviewFormSchema>;
