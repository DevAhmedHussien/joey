'use client'
import React, { useState } from 'react';
import { Card, CardContent, Typography, Chip, Box, CardMedia, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import AppButton from '../appbutton/AppButton'; 
import ImageWithSpinner from '../image/ImageWithSpinner';
import InfoIcon from '@mui/icons-material/Info'; 

const ProductCard = ({ name = "Tirzepatide Pills",price , description = "Effective weight loss solution.", safety, href ='/' }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        width:"310px !important",
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'var(--primary-background)',
      }}
    >
      <CardMedia>
              
              <Box sx={{ height: 200, position: 'relative' }}>
          <ImageWithSpinner
            src="/images/navbar/sexual.png"
            alt={name}
          />

          {/* Icon Positioned at Top Right */}
          <IconButton
            onClick={toggleExpand}
            sx={{
              cursor:'pointer', 
              position: 'absolute',
              zIndex:20,
              top: 3,
              right: 8,
              background:'var(--primary-background)'
            }}
          >
            <InfoIcon sx={{color:'var(--primary-color)'}} />
          </IconButton>
        </Box>
      </CardMedia>

      <CardContent>

      {/* Product Title */}
          <Typography textAlign='center' variant="h5"component="h5"> {name}{' '}
          <Typography
            component="span"
            sx={{
              verticalAlign: 'super',
              color: '#7D879C',
            }}
          > 
              Rx
          </Typography>
          </Typography>
        {/* Stock Status */}
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center' ,gap:1, flexDirection:'column'}}>
        <Chip
          label="In stock via joey med"
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

      <Typography variant="h6" component='h6' textAlign='center'> {price} </Typography>

        </Box>
      </CardContent>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, paddingBottom: '16px' }}>
        <AppButton
          title="start now"
          color='white'
        />
        <AppButton
          title="Learn More"
          color="secondary"
          href={href}
        />
      </Box>

      {/* Expanding Section */}
      <motion.div
        onClick={toggleExpand}
        initial={{ height: 0, opacity: 0, y: '-100%' }}
        animate={expanded ? { height: '100%', opacity: 0.9, y: 0 } : { height: 0, opacity: 0, y: '-100%' }}
        transition={{ duration: 0.5 }}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          backgroundColor: '#f1f1f1', 
          borderRadius: '16px', 
          zIndex: 5, 
        }}
      >
        <Box
        sx={{
          padding: '30px',
          height: '100%',
        }}
      >
            <Typography variant="h5" component='h5' textAlign='left'> Description: </Typography>
            <Typography variant="p" component="p" textAlign='left' color={'#727681'} p={1} > {description}</Typography>
            <Typography variant="h5" component="h5" textAlign='left' mt={2} >Safety Information: </Typography>
            <Typography variant="p" component="p" textAlign='left'  color={'#727681'} p={1}> {safety } </Typography>
      </Box>

      </motion.div>
    </Card>
  );
};

export default ProductCard;
