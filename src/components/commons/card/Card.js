import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';
//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';
import ImageWithSpinner from '../image/ImageWithSpinner';

const Card = ({
  width,
  height,
  title ,
  size,
  src,
  alt,
  widthImg,
  heighImg,
  href
}) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      sx={{ 
        position: 'relative',
        textAlign: 'center', 
        borderRadius: 2, 
        boxShadow: 3, 
        width: width,
        minHeight: height,
        overflow: 'hidden', /* Ensures the image stays within the card */
        transition: 'transform 0.3s ease-in-out', /* Smooth scaling transition */
        '&:hover .card-image img': {
          transform: 'scale(1.1)', /* Scale the image slightly on hover */
        },
      }}
    >
      <Typography variant="h4" gutterBottom position={'absolute'} p={2} zIndex={2} color={colors.primary[200]}>
       {title}
      </Typography>
      <Box
        className="card-image"
        sx={{
          width:'100%',
          height: height,
          overflow: 'hidden', /* Ensures the image stays within the card */
          transition: 'transform 0.3s ease-in-out', /* Smooth scaling transition */
        }}
      >
        <ImageWithSpinner src={src}
          alt={alt} />
        {/* <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"  
          loading="lazy"
          quality={100}
          style={{
            width: '100%',
            // height: height,
            borderRadius: 2,
            transition: 'transform 0.3s ease-in-out',
          }}
        /> */}
      </Box>
      <Box position={'absolute'} bottom={5} right={5} zIndex={6}> 
        {size ? 
        <AppButton title="start now" color="black" href={href} /> : <NavigationButton  href={href}/>}
      </Box>
    </Box>
  );
};

export default Card;
