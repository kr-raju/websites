import { Event } from '@/lib/types/event';
import { EventCard } from '@/components/ui/event-card';
import { cn } from '@/lib/utils';

interface EventGridProps {
  events: Event[];
  className?: string;
}

export function EventGrid({ events, className }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className={cn("text-center py-12", className)}>
        <p className="text-muted-foreground">No events found</p>
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {events.map((event) => (
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
  );
}