import './globals.css';
import type { Metadata } from 'next';
import { Inter, Montserrat, Roboto } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800']
});

const roboto = Roboto({ 
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700']
});

export const metadata: Metadata = {
  title: 'SKEnterprises - Courier, Porter & Water Supply Services',
  description: 'Complete logistics solutions with courier services, porter assistance, and water supply in Chennai',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} font-roboto bg-[#FAFAFA]`}>
        {children}
      </body>
    </html>
  );
}