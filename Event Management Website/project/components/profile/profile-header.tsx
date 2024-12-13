'use client';

import { User } from '@/lib/types/auth';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { getInitials } from '@/lib/utils/string-utils';

interface ProfileHeaderProps {
  user: User;
}

export function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <Avatar className="h-20 w-20">
        <AvatarFallback className="text-lg">
          {getInitials(user.name)}
        </AvatarFallback>
      </Avatar>
      <div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-muted-foreground">{user.email}</p>
      </div>
    </div>
  );
}