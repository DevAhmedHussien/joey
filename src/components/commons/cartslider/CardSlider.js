'use client';

import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion'; // Importing framer-motion for smooth animations
import './cardSlider.scss';
import Card from '../card/Card';
import ProductCard from '../cardproduct/ProductCard';
import CardBlog from '../cardblog/CardBlog';

//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

export default function CardSlider({ cards = [], type }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1200) setVisibleCards(3);
      else if (width >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };

    updateVisibleCards(); // Set initially
    window.addEventListener('resize', updateVisibleCards); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateVisibleCards);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - visibleCards));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true,
  });

  return (
    <Box className="slider-container" {...handlers} sx={{ p: 3 }}>
      <motion.div
        className="slider-track"
        animate={{
          x: `-${(currentIndex * 100) / visibleCards}%`,
        }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        sx={{
          display: 'flex',
          width: `${(cards.length / visibleCards) * 100}%`,
        }}
      >
        {cards.map((card, index) => (
          <Box key={index} className="slider-card" sx={{ flex: '0 0 auto', width: `${100 / visibleCards}%`, padding: 2 }}>
            {type === 'product' ? (
              <ProductCard name={card.itemName} image={card.images[0]} href={card.href} />
            ) : type === 'blog' ? (
              <CardBlog imageSrc={card.image} imageAlt={card.title} title={card.title} readTime={'Read 5 min ago'} height={400} width={400} />
            ) : type === 'appear' ? (
              <Card height={400} width={400} title={card.title || 'Start Now'} src={'/images/homePage/man.png'} alt={card.title} widthImg={200} heighImg={200} size={true} />
            ) : null}
          </Box>
        ))}
      </motion.div>

      {/* Navigation Controls */}
      <Box className="slider-controls" sx={{ position: 'absolute', bottom: '10%', right: '5%', display: 'flex', alignItems: 'center' }}>
        <Box className="progress-bar" sx={{ width: '100px', height: '4px', backgroundColor: '#e0e0e0', borderRadius: '2px', marginRight: 2 }}>
          <Box
            className="progress"
            sx={{
              width: `${((currentIndex + visibleCards) / cards.length) * 100}%`,
              backgroundColor: colors.primary[600],
              height: '100%',
              transition: 'width 0.3s ease',
            }}
          />
        </Box>

        <IconButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            color: colors.primary[100],
            transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
            '&:hover': {
              color: colors.primary[1600],
              transform: 'scale(1.1)',
            },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          disabled={currentIndex >= cards.length - visibleCards}
          sx={{
            color: colors.primary[100],
            transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out',
            '&:hover': {
              color: colors.primary[1600],
              transform: 'scale(1.1)',
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
