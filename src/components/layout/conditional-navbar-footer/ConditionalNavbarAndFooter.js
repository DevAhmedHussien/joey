"use client"; // Ensure this component is a Client Component

import { usePathname } from 'next/navigation';
import Footer from '../footer/Footer';
import NavBar from '../navbar/Navbar'
export default function ConditionalNavbarAndFooter({ children }) {
  const pathname = usePathname();

  // Define routes where the Navbar and Footer should be hidden
  const hideNavbarAndFooter = ['/sign-in', '/password-reset'];

  return (
    <>
      {!hideNavbarAndFooter.includes(pathname) && <NavBar/>}
      {children}
      {!hideNavbarAndFooter.includes(pathname) && <Footer/>}
    </>
  );
}
