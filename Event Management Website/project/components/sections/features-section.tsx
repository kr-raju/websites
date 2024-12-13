import { CalendarDays, Users, MapPin } from 'lucide-react';
import { FeatureCard } from '@/components/ui/feature-card';

export function FeaturesSection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Eventify</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<CalendarDays className="h-10 w-10" />}
            title="Easy Planning"
            description="Intuitive tools to create and manage your events with ease. From scheduling to ticketing, we've got you covered."
          />
          <FeatureCard
            icon={<Users className="h-10 w-10" />}
            title="Community Driven"
            description="Connect with like-minded event organizers and attendees. Share experiences and grow together."
          />
          <FeatureCard
            icon={<MapPin className="h-10 w-10" />}
            title="Location Freedom"
            description="Host events anywhere. Our platform supports both in-person and virtual events with seamless integration."
          />
        </div>
      </div>
    </section>
  );
}