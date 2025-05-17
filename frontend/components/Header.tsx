'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/auth-context';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (isLoggedIn === undefined) return null;

  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <button onClick={onMenuClick}>
          <Bars3Icon className="size-6" />
        </button>
        <h1 className="text-xl font-semibold">Calendar</h1>
      </div>

      {isLoggedIn ? (
        <Button onClick={handleLogout} className="w-[80Px]">
          Logout
        </Button>
      ) : (
        <div className="flex items-center space-x-2">
          <Link href="/auth/login">
            <Button variant="outline" className="w-[80px]">
              sign in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button className="w-[80px]">sign up</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}
