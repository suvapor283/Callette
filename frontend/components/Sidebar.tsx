import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <div
      id="sidebar"
      className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform ease-in-out duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose}>
          <XMarkIcon className="size-6" />
        </button>
      </div>
      <ul className="p-4 space-y-4">
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
