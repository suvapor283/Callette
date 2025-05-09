import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div>
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
        <div className="h-24 border p-2">
          <span>1</span>
          <h5>일정</h5>
        </div>
        <div className="h-24 border p-2">2</div>
        <div className="h-24 border p-2">3</div>
        <div className="h-24 border p-2">4</div>
        <div className="h-24 border p-2">5</div>
        <div className="h-24 border p-2">6</div>
        <div className="h-24 border p-2">7</div>
      </div>
    </div>
  );
}
