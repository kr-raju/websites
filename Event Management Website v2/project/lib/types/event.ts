export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  attendees: number;
  category: string;
  organizer: {
    name: string;
    id: string;
  };
}

export type EventSort = 'date' | 'popularity' | 'title';

export interface EventFilters {
  category?: string;
  sortBy?: EventSort;
  search?: string;
  startDate?: Date;
  endDate?: Date;
}