import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      id="sidebar"
      className={`fixed left-0 top-0 z-40 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose}>
          <XMarkIcon className="size-6" />
        </button>
      </div>
      <ul className="space-y-4 p-4">
        <li>
          <Link href="#" className="block text-gray-700 hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="#" className="block text-gray-700 hover:text-black">
            Calendar
          </Link>
        </li>
        <li>
          <Link href="#" className="block text-gray-700 hover:text-black">
            Diary
          </Link>
        </li>
        <li>
          <Link href="#" className="block text-gray-700 hover:text-black">
            Together
          </Link>
        </li>
        <li>
          <Link href="#" className="block text-gray-700 hover:text-black">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
}
