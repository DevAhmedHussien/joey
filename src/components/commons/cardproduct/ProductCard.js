'use client';

import React from 'react';
import { Box, Typography, Chip, Link } from '@mui/material';
import AppButton from '../appbutton/AppButton';
import ImageWithSpinner from '../image/ImageWithSpinner';
import './productCard.scss';

const ProductCard = ({ width = 300, height = 350, name, description, href }) => {
  return (
    <Box className={'product-card'}>
      {/* Product Image */}
      <Box className={'product-image'}>
        <ImageWithSpinner  
          src="/images/navbar/sexual.png" 
          alt={name} 
        />
      </Box>

      {/* Product Info */}
      <Box className={'product-info'}>
        <Typography variant="h3" component="h3" className={'product-name'}>
          {name}{' '}
          <Typography component="span" sx={{ mb: 2, fontSize: '0.75rem', verticalAlign: 'super', color: '#000' }}>
            Joey
          </Typography>
        </Typography>

        <Typography variant="body2" className={'product-description'}>
          {description}
        </Typography>

        {/* Stock Status Label */}
        <Box>
          <Chip 
            label="In stock via Joey med"
            className='stock-chip'
          />
        </Box>
      </Box>

      {/* Action Buttons */}
      <Box className={'buttons'}>
        <AppButton title="start now" color="primary" />
        <AppButton title="Learn More" color="white" href={href} />
      </Box>

      {/* Safety Information Link */}
      <Link href="#" underline="hover" sx={{ display: 'block', mt: 2, fontSize: '0.875rem', color: '#fff', zIndex: 2, position: 'relative' }}>
        {/* Important safety information */}
      </Link>
    </Box>
  );
};

export default ProductCard;
