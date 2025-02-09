import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChessPatternAnimated } from '@/components/common/ChessPattern';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'St Neots Chess Club',
  description: "A chess club in Cambridgeshire's largest market town",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <div className="min-h-screen bg-gradient-to-b from-amber-50 via-amber-50 to-amber-100/50 relative">
          <ChessPatternAnimated />
          <Header />
          <div className="relative">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}