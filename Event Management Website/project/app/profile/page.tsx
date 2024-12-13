'use client';

import { ProfileHeader } from '@/components/profile/profile-header';
import { ProfileForm } from '@/components/profile/profile-form';
import { useAuth } from '@/contexts/auth-context';
import { redirect } from 'next/navigation';

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <ProfileHeader user={user} />
        <ProfileForm user={user} />
      </div>
    </div>
  );
}