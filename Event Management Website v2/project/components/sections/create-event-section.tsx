'use client';

import { CreateEventDialog } from '@/components/events/create-event-dialog';

export function CreateEventSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Host Your Event?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Create your event in minutes and reach thousands of potential attendees. Our platform makes it easy to manage registrations, track attendance, and engage with your audience.
        </p>
        <CreateEventDialog />
      </div>
    </section>
  );
}