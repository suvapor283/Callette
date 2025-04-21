'use client';

import './globals.css';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Card } from '@/components/ui/card';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} flex min-h-screen flex-col bg-gray-100 antialiased`}
        style={{ fontFamily: 'var(--font-pretendard)' }}
      >
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-grow items-center justify-center py-6">
          <Card className="min-h-screen w-[80%] min-w-[700px] p-6">
            {children}
          </Card>
        </div>
        <Footer />
      </body>
    </html>
  );
}
