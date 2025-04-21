import Link from 'next/link';
import { Button } from './ui/button';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <button onClick={onMenuClick}>
          <Bars3Icon className="size-6" />
        </button>
        <h1 className="text-xl font-semibold">Calendar</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Link href="#">
          <Button variant="outline" className="w-[80px]">
            sign in
          </Button>
        </Link>
        <Link href="#">
          <Button className="w-[80px]">sign up</Button>
        </Link>
      </div>
    </nav>
  );
}
