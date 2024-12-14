'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter } from 'next/navigation';
import { HeroSection } from '@/components/sections/hero-section';
import { FeaturesSection } from '@/components/sections/features-section';
import { CreateEventSection } from '@/components/sections/create-event-section';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  const handleGetStarted = () => {
    if (user) {
      router.push('/admin/events');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection onGetStarted={handleGetStarted} />
      {user && <CreateEventSection />}
      <FeaturesSection />
    </div>
  );
}