'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import InfoList from '@/components/layout/infolist/InfoList';
import { tokens } from '@/theme/theme';
import { useTheme } from '@mui/material';

export default function HeroSection() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentText, setCurrentText] = useState('Weight Loss');
  const [fadeOut, setFadeOut] = useState(false);

  // Array of texts to cycle through
  const texts = ['Weight Loss', 'Sexual Health', 'Hair Growth', 'Better Health', 'Improved Confidence'];

  // Text switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = texts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setFadeOut(false);
      }, 500); // Delay between fading out and fading in
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Grid container spacing={4} sx={{ p: { xs: 2, md: 5 } }}>
      <Grid item xs={12} md={6}>
        {/* <motion.article
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        > */}
          {/* <motion.div> */}
            <Typography variant="h1" component="h1" gutterBottom color={colors.primary[200]}>
              Welcome to <span style={{ color: colors.primary[200], fontWeight: 500 }}>joey med</span>
            </Typography>
          {/* </motion.div> */}
          {/* <motion.div> */}
            <Typography variant="h2" component="h2" gutterBottom color={colors.primary[200]}>
              We got you
            </Typography>
          {/* </motion.div> */}
        {/* </motion.article> */}
        <Box sx={{ position: 'relative', overflow: 'hidden', height: '60px' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              mt: '10px',
              position: 'absolute',
              transition: 'transform 0.5s ease, opacity 0.5s ease',
              transform: fadeOut ? 'translateY(-30px)' : 'translateY(0)',
              opacity: fadeOut ? 0 : 1,
              top: 0,
              color: colors.primary[1600],
              fontWeight: 300,
            }}
          >
            {currentText}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} display="flex" alignItems="start" justifyContent="end">
        <InfoList />
      </Grid>
    </Grid>
  );
}
