import {
  Bars3Icon,
  ChatBubbleOvalLeftIcon,
  BellIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  return (
    <nav className="flex items-center justify-between py-4 px-6 shadow-md">
      <div className="flex items-center space-x-4">
        <SidebarTrigger></SidebarTrigger>
        <button className="text-xl font-semibold">Callette by OO</button>
      </div>
      <div className="flex items-center space-x-4">
        <button>
          <BellIcon className="size-6" />
        </button>
        <button>
          <ChatBubbleOvalLeftIcon className="size-6" />
        </button>
        <button>
          <AdjustmentsHorizontalIcon className="size-6" />
        </button>
      </div>
    </nav>
  );
}
