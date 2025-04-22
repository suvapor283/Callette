import './globals.css';
import localFont from 'next/font/local';
import ClientLayout from './ClientLayout';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata = {
  title: 'Callette - Calendar App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} min-w-[600px] antialiased`}
        style={{ fontFamily: 'var(--font-pretendard)' }}
      >
        <ClientLayout />
        <Card className="mx-auto my-6 flex min-h-screen w-[80%] min-w-[600px] flex-col p-6">
          {children}
        </Card>
        <Footer />
      </body>
    </html>
  );
}
