import { Box } from '@mui/material';

// Import the SCSS file
import './cardSlider.scss'; 
import Card from '../card/Card';
import ProductCard from '../cardproduct/ProductCard';
import CardBlog from '../cardblog/CardBlog';

export default function CardSlider({cards = [], type}) {
return (
    <Box className="slider-container">
        <Box className="slider-track">
            <ul className = 'scrollList'>
            {cards.map((card, index) => (
              <div key={index} >
                  {type == 'product' 
                  ? <ProductCard name={card.itemName} description={card.description} safety={card.safety}
                  image={card.images[0]} href={card.href} price={card.price} />  
                  : type == 'blog'  
                  ? <CardBlog   imageSrc={card.image} imageAlt={card.title} title={card.title} readTime={'Read 5 min ago'} />
                  : type == 'appear' 
                  ? <Card height={400} width={400}  title={card.title || 'start now'} src={'/images/homePage/man.png'} alt={card.title} widthImg={200} heighImg={200} size={true}/>
                  :null
                  } 
              </div>
          ))}
            </ul>
      </Box>
    </Box>
);
}