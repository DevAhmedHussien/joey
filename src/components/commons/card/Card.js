'use client';

import { Box, Typography } from '@mui/material';
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';
import ImageWithSpinner from '../image/ImageWithSpinner';
import Video from '../video/Video';
import './card.scss';
import Image from 'next/image';
// import Image from 'next/image';

const Card = ({ title, size, src, alt, href, video = false }) => {


  return (
    <Box className='card'>
      <Typography
        variant="h4"
        component="h4"
        className='card-title'
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
          <Image
            objectFit="cover"
            loading="lazy"
            quality={100}
            width={320}
            height={300}
              src={src}
              alt={alt}
            className='media-content'
          />
        )}
      </Box>

      <Box className='card-button'>
        {size ? (
          <AppButton title="start now"  href={href} />
        ) : (
          <NavigationButton href={href} />
        )}
      </Box>
    </Box>
  );
};

export default Card;
