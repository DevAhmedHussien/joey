'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';
// Theme part
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';
import ImageWithSpinner from '../image/ImageWithSpinner';
import Video from '../video/Video';
import { Scale } from '@mui/icons-material';

const Card = ({
  title,
  size,
  src,
  alt,
  href,
  video = false
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
        width:  '100%', // Ensures responsive width
        minHeight:  '100%', // Ensures responsive height
        overflow: 'hidden', // Ensures the media stays within the card
        transition: 'transform 0.3s ease-in-out', // Smooth scaling transition
        '&:hover .card-media': {
          transform: 'scale(1.1)', // Scale the media slightly on hover
        },
      }}
    >
      <Typography variant="h3" component="h3" gutterBottom position="absolute" p={2} zIndex={2} color={colors.primary[200]}>
        {title}
      </Typography>

      <Box
        className="card-media"
        sx={{
          width: '100%',
          height: '100%',
          overflow: 'hidden', // Ensures the media stays within the card
          transition: 'transform 0.3s ease-in-out', // Smooth scaling transition
          position: 'relative',
        }}
      >
        {video ? (
          <Video
            src={src}
            type="video/mp4"
            alt="A description of the video content"
            controls={false}
            autoPlay={true}
            loop
            sx={{
              width: '100%', // Full width for responsiveness
              height: '105%', // Full height for responsiveness
              objectFit: 'cover', // Ensures video fills the container
            }}
          />
        ) : (
          <ImageWithSpinner
            src={src}
            alt={alt}
            sx={{
              width: '100%', // Full width for responsiveness
              height: '100%', // Full height for responsiveness
              objectFit: 'cover', // Ensures image fills the container
            }}
          />
        )}
      </Box>

      <Box position="absolute" bottom={5} right={5} zIndex={6}> 
        {size ? 
          <AppButton title="start now" color="black" href={href} /> : 
          <NavigationButton href={href} />}
      </Box>
    </Box>
  );
};

export default Card;
