export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  attendees: number;
  category: string;
  organizer: {
    name: string;
    id: string;
  };
}