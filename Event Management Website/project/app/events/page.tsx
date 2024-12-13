import { EventCard } from '@/components/ui/event-card';
import { mockEvents } from '@/lib/data/mock-events';

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-muted-foreground">Discover and join amazing events happening around you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event) => (
            <EventCard
              key={event.id}
              id={event.id}
              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
              imageUrl={event.imageUrl}
              attendees={event.attendees}
            />
          ))}
        </div>
      </div>
    </div>
  );
}