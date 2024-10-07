'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './searchPage.scss'; 
import ProductCard from '@/components/commons/cardproduct/ProductCard';
import ServicesSection from '@/app/ServicesSection';
import { cardVariantsRight, cardVariantsLeft, cardVariantsSmall } from '@/utility/animationSyles';

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

const homeCards = [
  {
    animate: cardVariantsRight,
    title: 'Weight Loss',
    src: '/videos/Bottle.mp4',
    alt: 'Weight Loss',
    size: true,
    video: true,
    href: '/form/weight-loss',
  },
  {
    animate: cardVariantsSmall,
    title: 'Sexual health',
    src: '/videos/Bottle.mp4',
    alt: 'Sexual health',
    size: true,
    video: true,
    href: '/form/weight-loss',
  },
  {
    animate: cardVariantsLeft,
    title: 'Hair growth',
    src: '/videos/Bottle.mp4',
    alt: 'Hair growth',
    size: true,
    video: true,
    href: '/form/weight-loss',
  },
];

function SearchPageProduct({ products }) {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearInput = () => {
    setSearchValue('');
  };

  const filteredProducts = searchValue
    ? products.filter((product) =>
        product.itemName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  const productsToDisplay = filteredProducts.length > 0 ? filteredProducts : searchValue.length === 0 ? defaultProducts : [];

  return (
    <Box className="searchPage">
      <Box className="searchBox">
        <TextField
          variant="outlined"
          placeholder="What are your health goals?"
          value={searchValue}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              searchValue && (
                <InputAdornment position="end">
                  <IconButton onClick={handleClearInput} className="clearIcon">
                    <CloseOutlinedIcon />
                  </IconButton>
                </InputAdornment>
              )
            ),
          }}
        />
      </Box>
      <Typography variant="h4" className="heading">
        {searchValue.length > 0 ? `Showing results for '${searchValue}'` : 'Explore Our Categories'}
      </Typography>
      {searchValue.length > 0 ? (
        <Box className="productGrid">
          <TransitionGroup component={null}>
            {productsToDisplay.map((product, index) => (
              <CSSTransition key={index} timeout={500} classNames="fade">
                <Box className="productCard">
                  <ProductCard height={500} name={product.itemName} />
                </Box>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Box>
      ) : (
        <ServicesSection homeCards={homeCards} />
      )}
    </Box>
  );
}

export default SearchPageProduct;
