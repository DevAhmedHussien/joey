import '../styles/globals.scss';
import "./globals.scss";
import Head from 'next/head';
import { Inter } from 'next/font/google';
import ResponsiveAppBar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

export const metadata = {
  title:{
    default: "joey med - Telehealth Platform",
    template: "%s - Online pharmacy"
  },
  description: 'Telehealth Platform',
  twitter:{
    card:'summary_large_image'
  }
};

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Italiana&display=swap"
          rel="stylesheet"
        />
      </Head> */}
      <body>
      
          <ResponsiveAppBar/>
            <main className={inter.className} > 
             {children}
            </main>
            <Footer/>
         
      </body>
    </html>
  );
}
