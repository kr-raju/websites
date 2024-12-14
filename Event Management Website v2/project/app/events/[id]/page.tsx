'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Event } from '@/lib/types/event';
import { mockEvents } from '@/lib/data/mock-events';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    // TODO: Replace with actual API call
    const foundEvent = mockEvents.find(e => e.id === id);
    setEvent(foundEvent || null);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-center">Event not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
            <Image
              src={event.imageUrl}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-5 w-5" />
              {event.date}
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-5 w-5" />
              {event.location}
            </div>
            <div className="flex items-center text-muted-foreground">
              <Users className="mr-2 h-5 w-5" />
              {event.attendees} attendees
            </div>
          </div>

          <div className="prose max-w-none mb-8">
            <p className="text-lg">{event.description}</p>
          </div>

          <div className="flex gap-4">
            <Button size="lg">Register Now</Button>
            <Button size="lg" variant="outline">Share Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
}