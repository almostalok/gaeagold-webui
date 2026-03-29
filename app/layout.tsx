import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import Providers from './providers/Providers';
import { Toaster } from 'sonner';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-mont',
  subsets: ['latin'],
});

//Meta-data allows to change the application Title and description
export const metadata: Metadata = {
  title: 'Gaeagold | Purity defined',
  description: 'Developed by Chandra M. LLP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${geistSans.variable} ${geistMono.variable} antialiased set-root-font theme-transition`}
      >
        <Providers>
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
