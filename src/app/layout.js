import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProviderWrapper from "../theme/ThemeProviderWrapper";
import "./globals.scss";
import Head from 'next/head';
import MainNavBar from '@/components/layout/navbar/MainNavBar';
import Footer from '@/components/layout/footer/Footer';
import ResponsiveAppBar from '@/components/layout/navbar/Navbar';

export const metadata = {
  title: 'joey med',
  description: 'Telehealth Platform',
};

// Dynamically import the Client Component
const ConditionalNavbarAndFooter = dynamic(() => import('../components/layout/conditional-navbar-footer/ConditionalNavbarAndFooter'), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <body>
        {/* <ThemeProviderWrapper>
          <CssBaseline />
          <ConditionalNavbarAndFooter> */}
          <ResponsiveAppBar/>
            <main //className={inter.className}
            > 
             {children}
            </main>
            <Footer/>
          {/* </ConditionalNavbarAndFooter>
        </ThemeProviderWrapper> */}
      </body>
    </html>
  );
}
