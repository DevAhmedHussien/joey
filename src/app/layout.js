import './globals.scss'; // Ensure this path is correct
import Head from 'next/head';
import ResponsiveAppBar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

export const metadata = {
  title: {
    default: "Joey Med - Telehealth Platform",
    template: "%s - Online pharmacy"
  },
  description: 'Telehealth Platform',
  twitter: {
    card: 'summary_large_image'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     {/* <Head>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    </Head> */}
    <Head>
      <link href='https://fonts.googleapis.com/css2?family=PT+Serif:wght@100;200;300;400;500;600;700&display=swap' rel="stylesheet"/>
    </Head>
     {/* <Head>
      <link href='https://fonts.googleapis.com/css2?family=Crimson+Text:wght@100;200;300;400;500;600;700&display=swap' rel="stylesheet"/>
    </Head> */}
      <body>
        <ResponsiveAppBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
