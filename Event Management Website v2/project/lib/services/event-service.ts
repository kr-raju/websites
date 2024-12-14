import { EventFormData } from '@/lib/validations/event';
import { Event, EventFilters } from '@/lib/types/event';
import { mockEvents } from '@/lib/data/mock-events';

export async function createEvent(data: EventFormData): Promise<Event> {
  // TODO: Replace with actual API call
  const newEvent: Event = {
    id: Math.random().toString(36).substr(2, 9),
    ...data,
    attendees: 0,
    organizer: {
      id: 'user-1',
      name: 'Current User',
    },
  };
  
  return newEvent;
}

export async function getUserEvents(userId: string): Promise<Event[]> {
  // TODO: Replace with actual API call
  return mockEvents.filter(event => event.organizer.id === userId);
}

export async function getFilteredEvents(filters: EventFilters): Promise<Event[]> {
  let events = [...mockEvents];

  if (filters.category && filters.category !== 'all') {
    events = events.filter(event => event.category.toLowerCase() === filters.category.toLowerCase());
  }

  if (filters.sortBy) {
    events = sortEvents(events, filters.sortBy);
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    events = events.filter(event => 
      event.title.toLowerCase().includes(searchLower) ||
      event.description.toLowerCase().includes(searchLower)
    );
  }

  return events;
}

function sortEvents(events: Event[], sortBy: EventFilters['sortBy']): Event[] {
  return [...events].sort((a, b) => {
    switch (sortBy) {
      case 'date':
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'popularity':
        return b.attendees - a.attendees;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });
}