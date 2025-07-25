import Header from '@/Header';
import Footer from '@/components/Footer'; // <-- import Footer
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zutta Store',
  description: 'Shoe store website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main> {/* ensure main grows */}
        <Footer /> {/* footer at the bottom */}
      </body>
    </html>
  );
}
