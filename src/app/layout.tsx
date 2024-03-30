import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';

import Footer from '@/components/Footer';
import { ApolloWrapper } from './lib/apollo-wrapper';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Sander Vreeken - Excel Support',
  description: 'Excel Freelance Support & Trainer',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} flex flex-col items-center min-h-screen text-light-black`}>
        <ApolloWrapper>
          <div className='pb-16 pt-16 px-7 w-full desktop:pt-8 desktop:px-4 desktop:w-1100'>
            <Header />
            {children}
          </div>
          <Footer />
        </ApolloWrapper>
      </body>
    </html>
  )
}
