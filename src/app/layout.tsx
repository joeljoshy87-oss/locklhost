// app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond, Poiret_One ,Comfortaa} from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/SmoothScroll';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ["300", "400", "500", "600"]
});

const poiret = Poiret_One({
  subsets: ['latin'],
  weight: '400', // Poiret One only supports 400
  variable: '--font-poiret', // creates CSS variable
});
const comfortaa = Comfortaa({
  subsets: ['latin'],
  // Comfortaa supports weights: 300, 400, 500, 600, 700
  weight: ['300', '400', '500', '600', '700'], // specify what you need
  variable: '--font-comfortaa',
});

export const metadata: Metadata = {
  title: 'Elixir Homes',
  description: 'Crafting Spaces Beyond Ordinary',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable} ${poiret.variable} ${comfortaa.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}