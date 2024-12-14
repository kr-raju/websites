import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onGetStarted: () => void;
}

export function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Create Unforgettable
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {' '}
            Events
          </span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Your all-in-one platform for planning, managing, and hosting exceptional events that leave lasting impressions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" onClick={onGetStarted}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}