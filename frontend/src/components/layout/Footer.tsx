import Link from "next/link";
import { Button } from "@/components/ui/button";

const footerLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/help", label: "Help" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between px-6 py-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] sm:flex-row">
      <span className="text-sm text-gray-600">© 2025 Calendar App</span>
      <div>
        {footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button variant="link" className="text-xs">
              {link.label}
            </Button>
          </Link>
        ))}
      </div>
    </footer>
  );
}
