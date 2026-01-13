// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant-garamond', // Changed variable to be more specific
  weight: ['400', '600']
});

export const metadata: Metadata = {
  title: 'Simple Journal',
  description: 'A simple app for your daily thoughts.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
