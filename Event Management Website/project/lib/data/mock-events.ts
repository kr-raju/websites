import { Event } from '../types/event';

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year. Network with industry leaders and learn about the latest innovations.',
    date: 'June 15, 2024',
    location: 'San Francisco, CA',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    attendees: 500,
    category: 'Technology',
    organizer: {
      name: 'Tech Events Inc',
      id: 'org1',
    },
  },
  {
    id: '2',
    title: 'Music Festival',
    description: 'A three-day music festival featuring top artists from around the world. Experience amazing performances and unforgettable moments.',
    date: 'July 20-22, 2024',
    location: 'Austin, TX',
    imageUrl: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80',
    attendees: 1200,
    category: 'Music',
    organizer: {
      name: 'Festival Productions',
      id: 'org2',
    },
  },
  {
    id: '3',
    title: 'Food & Wine Expo',
    description: 'Discover culinary delights from renowned chefs and taste exceptional wines from around the globe.',
    date: 'August 5, 2024',
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80',
    attendees: 300,
    category: 'Food & Drink',
    organizer: {
      name: 'Gourmet Events',
      id: 'org3',
    },
  },
];