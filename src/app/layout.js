import './globals.scss'; // Ensure this path is correct
import Head from 'next/head';
import ResponsiveAppBar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';

export const metadata = {
  title: {
    default: "Joey Med - Telehealth Platform",
    template: "%s - Joey Med - Telehealth Platform"
  },
  description: 'JoeyMed provides convenient, online telehealth services for weight loss, sexual health, hair growth, and more. Access personalized treatment plans, chat with providers, and manage your health goals from anywhere.',
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
