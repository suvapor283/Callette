import Link from "next/link";
import {
  ChatBubbleOvalLeftIcon,
  BellIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <nav className="flex justify-between px-6 py-3 shadow-md">
      <div className="flex items-center sm:space-x-4">
        <SidebarTrigger />
        <Link href="/" className="font-semibold sm:text-xl">
          Callette by
        </Link>
      </div>
      <div className="flex items-center sm:space-x-4">
        {[BellIcon, ChatBubbleOvalLeftIcon, AdjustmentsHorizontalIcon].map(
          (Icon, idx) => (
            <Button key={idx} variant="ghost" size="icon">
              <Icon className="size-4 sm:size-6" />
            </Button>
          ),
        )}
      </div>
    </nav>
  );
}
