import Link from "next/link";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between bg-white p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <span className="text-gray-600">© 2025 Calendar App</span>
      <div>
        <Link href="#">
          <Button variant="link">Privacy</Button>
        </Link>
        <Link href="#">
          <Button variant="link">Terms</Button>
        </Link>
        <Link href="#">
          <Button variant="link">Help</Button>
        </Link>
      </div>
    </footer>
  );
}
