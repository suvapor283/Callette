import Link from "next/link";
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
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

      {/* Main */}
      <main className="mx-auto my-6 flex min-h-screen w-[80%] min-w-[600px] flex-col p-6 border border-gray-300 rounded-lg">
        <div className="relative flex items-center justify-between">
          <div className="flex rounded-full bg-gray-200 p-1">
            <a href="#">
              <button className="rounded-full bg-white px-4 py-1 text-black shadow-md">
                Calendar
              </button>
            </a>
            <a href="#">
              <button
                id="diary-btn"
                className="rounded-full px-4 py-1 text-gray-600"
              >
                Diary
              </button>
            </a>
          </div>

          <div className="absolute left-1/2 flex -translate-x-1/2 transform items-center space-x-4">
            <button>
              <ChevronLeftIcon className="size-4" style={{ strokeWidth: 3 }} />
            </button>
            <h2 className="text-center text-xl font-semibold">March 2025</h2>
            <button>
              <ChevronRightIcon className="size-4" style={{ strokeWidth: 3 }} />
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-7 gap-2 text-center font-semibold text-gray-600">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="mt-4 grid grid-cols-7 gap-2 text-sm">
          <div className="h-24 border p-2">1</div>
          <div className="h-24 border p-2">2</div>
          <div className="h-24 border p-2">3</div>
          <div className="h-24 border p-2">4</div>
          <div className="h-24 border p-2">5</div>
          <div className="h-24 border p-2">6</div>
          <div className="h-24 border p-2">7</div>
        </div>
      </main>

      {/* Footer */}
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
    </div>
  );
}
