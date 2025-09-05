import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AppSidebar from "@/components/layout/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Callette - Calendar App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} antialiased`}
        style={{ fontFamily: "var(--font-pretendard)" }}
      >
        <SidebarProvider>
          <AppSidebar />
          <div className="flex min-h-screen flex-1 flex-col justify-between">
            <Header />
            {children}
            <Footer />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
