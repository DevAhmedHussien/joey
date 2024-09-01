import dynamic from 'next/dynamic';
import '../styles/globals.scss';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProviderWrapper from "../theme/ThemeProviderWrapper";
import "./globals.css";

export const metadata = {
  title: 'Joey Med',
  description: 'Telehealth Platform',
};

// Dynamically import the Client Component
const ConditionalNavbarAndFooter = dynamic(() => import('../components/layout/conditional-navbar-footer/ConditionalNavbarAndFooter'), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <CssBaseline />
          <ConditionalNavbarAndFooter>
            <main //className={inter.className}
            >{children}</main>
          </ConditionalNavbarAndFooter>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
