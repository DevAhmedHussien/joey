'use client'
import React, { useState } from 'react';
import { Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './searchPage.scss';
import ProductCard from '@/components/commons/cardproduct/ProductCard';
import ServicesSection from '@/app/ServicesSection';
import { cardVariantsRight, cardVariantsLeft, cardVariantsSmall} from'@/utility/animationSyles'


const defaultProducts = [
  {
    itemName: "Weight Loss",
    description: "Explore our products that help you achieve your weight loss goals.",
    price: "from $10/dose",
    image: "path_to_weight_loss_image", // Replace with actual image path
  },
  {
    itemName: "Sexual Health",
    description: "Find solutions for improved sexual health and performance.",
    price: "from $15/dose",
    image: "path_to_sexual_health_image", // Replace with actual image path
  },
  {
    itemName: "Hair Growth",
    description: "Discover products to promote hair growth and health.",
    price: "from $12/dose",
    image: "path_to_hair_growth_image", // Replace with actual image path
  },
];

const homeCards=[{
  animate:cardVariantsRight,
  title:'Weight Loss',
  src:'/videos/Bottle.mp4',
  alt:'Weight Loss',
  size:true,
  video:true,
  href:'/form/weight-loss'

},{
  animate:cardVariantsSmall,
  title:'Sexual health',
  src:'/videos/Bottle.mp4',
  alt:'Sexual health',
  size:true,
  video:true,
  href:'/form/weight-loss'

},{
  animate:cardVariantsLeft,
  title:'Hair growth',
  src:'/videos/Bottle.mp4',
  alt:'Hair growth',
  size:true,
  video:true,
  href:'/form/weight-loss'
}]


function SearchPageProduct({ products }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
  };

  // Filter products based on searchValue
  const filteredProducts = searchValue
    ? products.filter((product) =>
        product.itemName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  // Determine which products to display
  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchValue.length === 0 ? defaultProducts : [];

  // Color palette from the image
  const colors = {
    background: '#f5f5f5',  // Light Gray
    border: '#e4e4e4',      // Another Light Gray for borders
    primary: '#00d8ff',     // Bright Teal
    accent: '#e48a81',      // Coral
    textPrimary: '#001d4a', // Dark Blue for primary text
  };

  return (
    <Box sx={{ mt: 8, padding: '20px'  }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <TextField
          variant="outlined"
          placeholder="What are your health goals?"
          value={searchValue}
          onChange={handleInputChange}
          sx={{
            width: '100%',         // Set width to 100% to make it responsive
            maxWidth: '800px',      // Increase max-width to 800px
            borderRadius: '50px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              borderRadius: '50px',
              paddingLeft: '20px',
              paddingRight: '20px',
              borderColor: colors.border,
              '&:hover fieldset': {
                borderColor: colors.primary,
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: colors.textPrimary }} />
              </InputAdornment>
            ),
            endAdornment: (
              searchValue && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClearInput}>
                    <CloseOutlinedIcon sx={{ color: colors.textPrimary }} />
                  </IconButton>
                </InputAdornment>
              )
            ),
          }}
        />
      </Box>
      <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px', color: colors.textPrimary }}>
      {searchValue.length > 0 ? `Showing results for '${searchValue}'` : 'Explore Our Categories'}
      </Typography>
      {searchValue.length > 0 
                ? 
                <Box 
                sx={{ mt:2, display: 'flex', justifyContent: 'center', 
                  alignItems: 'center', gap: 7, flexWrap: 'wrap' }}
                >
                  <TransitionGroup component={null}>
                    {productsToDisplay.map((product, index) => (
                      <CSSTransition key={index} timeout={500} classNames="fade">
                        <Box
                          key={index}
                          sx={{
                            maxWidth: '300px',
                            minWidth: '280px',
                            // marginBottom: '20px',
                          }}
                        >
                          <ProductCard height={500} name={product.itemName} 
                          // description={product.description} 
                          />  
                        </Box>
                      </CSSTransition>
                    ))}
                  </TransitionGroup>
                </Box>
   :
                <ServicesSection  homeCards={homeCards}/>
               }
     
    </Box>
  );
}

export default SearchPageProduct;
