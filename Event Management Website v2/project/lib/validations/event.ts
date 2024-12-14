import * as z from 'zod';

export const eventFormSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  date: z.string(),
  time: z.string(),
  location: z.string().min(2, 'Location must be at least 2 characters'),
  category: z.string().min(2, 'Category must be at least 2 characters'),
  imageUrl: z.string().url('Invalid image URL'),
});

export type EventFormData = z.infer<typeof eventFormSchema>;