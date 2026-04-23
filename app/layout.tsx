import type { Metadata } from 'next';
import Providers from './providers/Providers';
import { Toaster } from 'sonner';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Preloader from '@/components/Preloader';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const monoFont = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

//Meta-data allows to change the application Title and description
export const metadata: Metadata = {
  title: 'GAEA GOLD | Premium Agricultural Exports',
  description: 'B2B and B2C platform for premium agricultural products and inquiry-based trade.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${monoFont.variable} antialiased theme-transition global-container`}
      >
        <Providers>
          <Preloader />
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
              className: 'bg-card text-card-foreground border border-border',
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
