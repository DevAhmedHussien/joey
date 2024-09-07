'use client'

import React, { useState , useEffect} from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSwipeable } from 'react-swipeable';
import './cardSlider.scss'; // Import the SCSS file
import Card from '../card/Card';
import ProductCard from '../cardproduct/ProductCard';
import CardBlog from '../cardblog/CardBlog';
    
//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

export default function CardSlider({cards = [], type}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const visibleCards = 1; // Number of cards visible at once

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
  
      // Keyboard navigation
      useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.key === 'ArrowRight') {
            handleNext();
          } else if (event.key === 'ArrowLeft') {
            handlePrev();
          }
        };
    
        window.addEventListener('keydown', handleKeyDown);
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

    return (
        <Box className="slider-container" {...handlers} sx={{p:5}}>
            <Box className="slider-track"  
        sx={{
          width: `${(cards.length / visibleCards) * 100}%`,
          transform: `translateX(-${(currentIndex * 100) / cards.length}%)`,
        }}
      >
                {cards.map((card, index) => (
                    <Box key={index} sx={{marginLeft:4}}>
                        {type == 'product' 
                        ? <ProductCard name={card.itemName} //description={card.description}
                         image={card.images[0]} href={card.href}/>  
                        : type == 'blog'  
                        ? <CardBlog  imageSrc={card.image} imageAlt={card.title} title={card.title} readTime={'Read 5 min ago'} height={400} width={400}/>
                        : type == 'appear' 
                        ? <Card height={400} width={400}  title={card.title || 'Star tNow'} src={'/images/homePage/man.png'} alt={card.title} widthImg={200} heighImg={200} size={true}/>
                        :null
                        } 
                    </Box>
                ))}
            </Box>

            <Box className="slider-controls">
                <Box className="progress-bar">
                    <Box
                        className="progress"
                        sx={{
                            width: `${((currentIndex + 1) / cards.length) * 100}%`,
                        }}
                    />
                </Box>

                <IconButton
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="nav-button"
                    sx={{
                    fontSize: 15,
                    color: colors.primary[100],
                    transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out', // Transition for color and transform
                    '&:hover': {
                      color: colors.primary[1600], // Apply hover color
                      transform: 'scale(1.1)', // Slightly scale the icon on hover
                    },
                    }}
                >
                    <ArrowBackIosNewIcon sx={{ fontSize: 15 }} />
                </IconButton>

                <IconButton
                    onClick={handleNext}
                    disabled={currentIndex >= cards.length - visibleCards}
                    className="nav-button"
                    sx={{
                    fontSize: 15,
                    color: colors.primary[100],
                    transition: 'color 0.3s ease-in-out, transform 0.3s ease-in-out', // Transition for color and transform
                    '&:hover': {
                      color: colors.primary[1600], // Apply hover color
                      transform: 'scale(1.1)', // Slightly scale the icon on hover
                    },
                    }}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
                </IconButton>
            
  
            </Box>
        </Box>
    );
}
