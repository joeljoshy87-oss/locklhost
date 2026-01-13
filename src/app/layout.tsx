// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '600'] // As per your spec (SemiBold is 600)
});

export const metadata: Metadata = {
  title: 'Elixir Homes',
  description: 'Crafting Spaces Beyond Ordinary',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

    