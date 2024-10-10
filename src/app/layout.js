import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProviderWrapper from "../theme/ThemeProviderWrapper";
import "./globals.scss";
import Head from 'next/head';

export const metadata = {
  title: 'joey med',
  description: 'Telehealth Platform',
};

// Dynamically import the Client Component
const ConditionalNavbarAndFooter = dynamic(() => import('../components/layout/conditional-navbar-footer/ConditionalNavbarAndFooter'), { ssr: false });

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
        <ThemeProviderWrapper>
          <CssBaseline />
          <ConditionalNavbarAndFooter>
            <main //className={inter.className}
            > 
             {children}
            </main>
          </ConditionalNavbarAndFooter>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
