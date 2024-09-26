'use client'
import { Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';

const AnimatedText = ({ texts }) => {
  const [currentText, setCurrentText] = useState(texts[0]);
  const [fadeOut, setFadeOut] = useState(false);

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
    }, 2500);

    return () => clearInterval(interval);
  }, [texts]);

  return (
    <Box 
      sx={{ 
        position: 'relative', 
        overflow: 'hidden', 
        height: '60px',
      }}
    >
      <Typography variant="h1" component="h2" gutterBottom>
        We got you
      </Typography>
      <Box 
        sx={{ 
          position: 'relative', 
          overflow: 'hidden', 
          height: '60px', 
        }}
      >
        <Typography 
          variant="h2" 
          component="h2" 
          sx={{
            background:'red',
            position: 'absolute',
            transition: 'transform 0.5s ease, opacity 0.5s ease',
            transform: fadeOut ? 'translateY(-30px)' : 'translateY(0)',
            opacity: fadeOut ? 0 : 1,
            top: 0,
            color:'black'
          }}
        >
          {currentText} / 
        </Typography>
      </Box>
    </Box>
  );
};

export default AnimatedText;
