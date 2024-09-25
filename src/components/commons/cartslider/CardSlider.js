'use client'
import React, { useEffect} from 'react';
import { Box } from '@mui/material';

// Import the SCSS file
import './cardSlider.scss'; 
import Card from '../card/Card';
import ProductCard from '../cardproduct/ProductCard';
import CardBlog from '../cardblog/CardBlog';

//  framer motion for animation
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
          <ul className = 'scrollList'>
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
          </ul>
      </div>
              
            </Box>
        </Box>
    );
}