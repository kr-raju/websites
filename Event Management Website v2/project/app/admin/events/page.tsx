'use client';

import { useState } from 'react';
import { CreateEventDialog } from '@/components/events/create-event-dialog';
import { EventTable } from '@/components/admin/events/event-table';
import { Event } from '@/lib/types/event';
import { mockEvents } from '@/lib/data/mock-events';

export default function AdminEventsPage() {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const handleDelete = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  const handleUpdate = (updatedEvent: Event) => {
    setEvents(events.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const handleCreate = (newEvent: Event) => {
    setEvents([...events, newEvent]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Event Management</h1>
          <CreateEventDialog onSuccess={handleCreate} />
        </div>
        <EventTable
          events={events}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}