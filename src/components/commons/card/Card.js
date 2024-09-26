'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';
import ImageWithSpinner from '../image/ImageWithSpinner';
import Video from '../video/Video';
import './card.scss';

const Card = ({ title, size, src, alt, href, video = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box className='card'>
      <Typography
        variant="h3"
        component="h3"
        className='card-title'
        color={colors.primary[200]} 
      >
        {title}
      </Typography>

      <Box className='card-media'>
        {video ? (
          <Video
            src={src}
            type="video/mp4"
            alt="A description of the video content"
            controls={false}
            autoPlay={true}
            loop
            className='media-content'
          />
        ) : (
          <ImageWithSpinner
            src={src}
            alt={alt}
            className='media-content'
          />
        )}
      </Box>

      <Box className='card-button'>
        {size ? (
          <AppButton title="start now" color="black" href={href} />
        ) : (
          <NavigationButton href={href} />
        )}
      </Box>
    </Box>
  );
};

export default Card;
