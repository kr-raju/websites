'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarDays, Menu, X, User } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <CalendarDays className="h-6 w-6" />
            <span className="font-semibold text-xl">Eventify</span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/events" className="text-foreground/80 hover:text-foreground">
              Events
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="space-x-2">
                    <User className="h-4 w-4" />
                    <span>{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/my-events">My Events</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/events"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-foreground/80 hover:text-foreground"
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              {user ? (
                <>
                  <Link href="/profile" className="block py-2">
                    Profile
                  </Link>
                  <Link href="/my-events" className="block py-2">
                    My Events
                  </Link>
                  <Button onClick={handleLogout} variant="ghost" className="w-full">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" asChild className="w-full mb-2">
                    <Link href="/login">Login</Link>
                  </Button>
                  <Button asChild className="w-full">
                    <Link href="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}