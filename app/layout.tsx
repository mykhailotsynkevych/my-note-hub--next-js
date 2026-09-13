import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '@/styles/globals.css';
import TanStackProvider from '@/components/TanStackProvider';
import '../styles/globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AuthProvider from '@/components/auth/AuthProvider/AuthProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Note Hub',
  description: 'A hub for all your notes',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-slate-50 text-slate-900"
      >
        <TanStackProvider>
          <AuthProvider>
            <Header />
            <main className="flex flex-1 flex-col">
              {children}
              {modal}
            </main>

            <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
