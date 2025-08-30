import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <button>
          <Bars3Icon className="size-6" />
        </button>
        <h1 className="text-xl font-semibold">Calendar</h1>
      </div>

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
    </nav>
  );
}
