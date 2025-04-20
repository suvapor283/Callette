import { Button } from "./ui/button";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white p-4 mt-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-between items-center">
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
      </div>
    </footer>
  );
}
