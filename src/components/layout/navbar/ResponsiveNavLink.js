import * as React from 'react';
import { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { Box, Button } from '@mui/material';
import Link from 'next/link';

// Sidebar Animation Variants
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

// Path component for menu toggle button
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

// Menu Toggle Button
const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} style={{ background: 'none', border: 'none' }}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </button>
);

// Menu Items (Each menu item in the sidebar)
const MenuItem = ({ i }) => {
  const menuItems = [
    { href: '/about-us', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/login', label: 'Login' },
    { href: '/signup', label: 'Sign Up' },
  ];

  return (
    <motion.li
      variants={{
        open: {
          y: 0,
          opacity: 1,
          transition: {
            y: { stiffness: 1000, velocity: -100 },
          },
        },
        closed: {
          y: 50,
          opacity: 0,
          transition: {
            y: { stiffness: 1000 },
          },
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{ listStyleType: 'none', margin: '10px 0' }}
    >
      <Link
        href={menuItems[i].href}
        style={{ color: '#000', textDecoration: 'none', fontSize: '1.2rem' }}
      >
        {menuItems[i].label}
      </Link>
    </motion.li>
  );
};

// Navigation Component (Contains all menu items)
const Navigation = () => (
  <motion.ul
    variants={{
      open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
      },
    }}
  >
    {[0, 1, 2, 3, 4].map((i) => (
      <MenuItem i={i} key={i} />
    ))}
  </motion.ul>
);

// Custom hook for measuring element dimensions
const useDimensions = (ref) => {
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    if (ref.current) {
      setDimensions(ref.current.getBoundingClientRect());
    }
  }, [ref]);

  return dimensions;
};

// Main Component: ResponsiveNavLink
const ResponsiveNavLink = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#fff',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative',
      }}
    >
      

      {/* Navigation (for desktop or mobile toggle) */}
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '300px', zIndex: 10 }}
      >
        <motion.div
          className="background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '300px',
            backgroundColor: '#fff',
          }}
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </Box>
  );
};

export default ResponsiveNavLink;
