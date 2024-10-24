'use client';
import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import InfoList from '@/components/layout/infolist/InfoList';

export default function HeroSection() {
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
      }, 500); 
    }, 2000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <Grid container spacing={4} sx={{ p: { xs: 2, md: 5 } }}>
      <Grid item xs={12} md={6}>
            <Typography variant="h1" component="h1" gutterBottom >
              Welcome to <span style={{fontWeight:600 }}>joey med</span>
            </Typography>
          
            <Typography variant="h2" component="h2" gutterBottom >
              We got you
            </Typography>
        <Box sx={{ position: 'relative', overflow: 'hidden', height: '60px' }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mt: '10px',
              position: 'absolute',
              transition: 'transform 0.5s ease, opacity 0.5s ease',
              transform: fadeOut ? 'translateY(-30px)' : 'translateY(0)',
              opacity: fadeOut ? 0 : 1,
              top: 0,
              color: 'var(--primary-icon)',
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
