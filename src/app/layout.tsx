import Header from '@/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';
import { AuthProvider } from '@/context/AuthContext'; // ✅ Import AuthProvider

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Zutta Store',
  description: 'Shoe store website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <AuthProvider> {/* ✅ Wrap everything inside AuthProvider */}
          <Header />
          <Toaster richColors />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
