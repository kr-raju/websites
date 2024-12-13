'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl: string;
  attendees: number;
}

export function EventCard({
  id,
  title,
  description,
  date,
  location,
  imageUrl,
  attendees,
}: EventCardProps) {
  return (
    <Card className="overflow-hidden">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardHeader>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          {date}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          {location}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Users className="mr-2 h-4 w-4" />
          {attendees} attendees
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/events/${id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}