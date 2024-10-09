'use client'
import React, { useState } from 'react';
import { Card, CardContent, Typography, Chip, Box, CardMedia, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import AppButton from '../appbutton/AppButton'; // Custom button component
import ImageWithSpinner from '../image/ImageWithSpinner';
import InfoIcon from '@mui/icons-material/Info'; // Icon for toggle

const ProductCard = ({ name = "Tirzepatide Pills", description = "Effective weight loss solution.", safety, href }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      component={motion.div}
      animate={{ width: 300, height: 'auto' }} // Keep card dimensions constant
      transition={{ duration: 0.5 }}
      sx={{
        borderRadius: '16px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative', // Necessary for absolute positioning
        backgroundColor: '#f8f9fa',
      }}
    >
      <CardMedia>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          sx={{ height: 200, position: 'relative' }}
        >
          <ImageWithSpinner
            src="/images/navbar/sexual.png"
            alt={name}
          />

          {/* Icon Positioned at Top Right */}
          <IconButton
            onClick={toggleExpand}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: '#fff',
              // zIndex: 10, // Ensure it stays above the expanding section
              backgroundColor: '#001D4A',
              '&:hover': {
                backgroundColor: '#003366',
              },
            }}
          >
            <InfoIcon />
          </IconButton>
        </Box>
      </CardMedia>

      <CardContent>

      {/* Product Title */}
        <Typography textAlign='center'
          variant="h4"
          sx={{
            fontWeight: 600,
            color: '#2E384D',
          }}
        >
          {name}{' '}
          <Typography
            component="span"
            sx={{
              fontSize: '1rem',
              verticalAlign: 'super',
              color: '#7D879C',
              fontWeight: 400,
            }}
          > 
            Rx
          </Typography>
        </Typography>
        {/* Stock Status */}
        <Chip
          label="In stock via Joey Med"
          sx={{
            backgroundColor: '#E0F2F1',
            color: '#004D40',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            marginTop: '10px',
            padding: '0px 8px',
            borderRadius: '8px',
          }}
        />


      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, paddingBottom: '16px' }}>
        <AppButton
          title="start now"
          sx={{
            backgroundColor: '#001D4A',
            color: '#fff',
            padding: '10px 20px',
            fontWeight: 600,
            borderRadius: '8px',
            '&:hover': {
              backgroundColor: '#2E384D',
            },
          }}
        />
        <AppButton
          title="Learn More"
          color="secondary"
          href={href}
          sx={{
            backgroundColor: '#f8f9fa',
            color: '#001D4A',
            padding: '10px 20px',
            fontWeight: 600,
            borderRadius: '8px',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: '#e1e2e4',
            },
          }}
        />
      </Box>

      {/* Expanding Section */}
      <motion.div
        onClick={toggleExpand}
        initial={{ height: 0, opacity: 0, y: '-100%' }}
        animate={expanded ? { height: '100%', opacity: 0.8, y: 0 } : { height: 0, opacity: 0, y: '-100%' }}
        transition={{ duration: 0.5 }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          backgroundColor: '#f1f1f1', 
          borderRadius: '16px', 
          zIndex: 5, // Ensure it's below the icon
          // pointerEvents: expanded ? 'auto' : 'auto', // Allow interaction only when expanded
        }}
      >
  <Box
  sx={{
    padding: '16px',
    color: '#555',
    height: '100%',
  }}
>
      <Typography
         variant="h5" component='h5'
        sx={{
          color: '#2E384D',
          lineHeight: 1.6,
          letterSpacing: '0.02rem',
          textAlign: 'justify',
        }}
      >
        Description:
      </Typography>
      
      <Typography
       variant="h6" component='h6'
        sx={{
          color: '#2E384D',
          lineHeight: 1.5,
          letterSpacing: '0.01rem',
          marginBottom: '16px',
          textAlign: 'justify',
        }}
      >
        {description || "Please follow dosage instructions provided by your healthcare professional."}
      </Typography>
      
  <Typography
     variant="h5" component='h5'
    sx={{
      color: '#2E384D',
      lineHeight: 1.4,
      letterSpacing: '0.02rem',
      textAlign: 'justify',
    }}
  >
    Safety Information:
  </Typography>
  
  <Typography
    variant="h6" component='h6'
    sx={{
      color: '#2E384D',
      lineHeight: 1.4,
      letterSpacing: '0.015rem',
      textAlign: 'justify',
    }}
  >
    {safety || "Please follow dosage instructions provided by your healthcare professional."}
  </Typography>
</Box>

      </motion.div>
    </Card>
  );
};

export default ProductCard;
