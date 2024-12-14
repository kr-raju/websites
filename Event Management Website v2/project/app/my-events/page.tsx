'use client';

import { useAuth } from '@/contexts/auth-context';
import { EventGrid } from '@/components/events/event-grid';
import { EventFilters } from '@/components/events/event-filters';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { EventSort } from '@/lib/types/event';

export default function MyEventsPage() {
  const { user } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<EventSort>('date');

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">My Events</h1>
          <p className="text-muted-foreground">
            Manage your events and track attendance
          </p>
        </div>

        <EventFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <EventGrid
          events={[]} // TODO: Replace with actual user events
          className="mt-8"
        />
      </div>
    </div>
  );
}