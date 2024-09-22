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

import { scroll } from 'framer-motion/dom';
export default function CardSlider({cards = [], type}) {
  

  useEffect(() => {
    const progressWheel = document.querySelector('.indicator');

    scroll(
      (progress) => {
        if (progressWheel) {
          progressWheel.style.strokeDasharray = `${progress}, 1`;
        }
      },
      {
        source: document.querySelector('ul'),
        axis: 'x',
      }
    );
  }, []);
    return (
        <Box className="slider-container" sx={{p:2}}>
            <Box className="slider-track">
         <div>
          {/* <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className={'bg'} />
            <circle cx="50" cy="50" r="30" pathLength="1" className={'indicator'} />
          </svg> */}
          <div className={'scrollList'}>
          {cards.map((card, index) => (
            <div key={index} sx={{marginLeft:4}}>
                {type == 'product' 
                ? <ProductCard name={card.itemName} //description={card.description}
                image={card.images[0]} href={card.href}/>  
                : type == 'blog'  
                ? <CardBlog  imageSrc={card.image} imageAlt={card.title} title={card.title} readTime={'Read 5 min ago'} />
                : type == 'appear' 
                ? <Card height={400} width={400}  title={card.title || 'Star Now'} src={'/images/homePage/man.png'} alt={card.title} widthImg={200} heighImg={200} size={true}/>
                :null
                } 
            </div>
        ))}
          </div>
      </div>
              
            </Box>

            {/* <Box className="slider-controls">
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
            
  
            </Box> */}
        </Box>
    );
}