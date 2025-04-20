import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between items-center relative">
        <div className="flex bg-gray-200 rounded-full p-1">
          <a href="#">
            <button className="bg-white px-4 py-1 rounded-full text-black shadow-md">
              Calendar
            </button>
          </a>
          <a href="#">
            <button
              id="diary-btn"
              className="px-4 py-1 rounded-full text-gray-600"
            >
              Diary
            </button>
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          <button>
            <ChevronLeftIcon className="size-4" style={{ strokeWidth: 3 }} />
          </button>
          <h2 className="text-xl font-semibold text-center">March 2025</h2>
          <button>
            <ChevronRightIcon className="size-4" style={{ strokeWidth: 3 }} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-6 text-center font-semibold text-gray-600">
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-2 mt-4 text-sm">
        <div className="p-2 border h-24">
          <span>1</span>
          <h5>일정</h5>
        </div>
        <div className="p-2 border h-24">2</div>
        <div className="p-2 border h-24">3</div>
        <div className="p-2 border h-24">4</div>
        <div className="p-2 border h-24">5</div>
        <div className="p-2 border h-24">6</div>
        <div className="p-2 border h-24">7</div>
      </div>
    </div>
  );
}
