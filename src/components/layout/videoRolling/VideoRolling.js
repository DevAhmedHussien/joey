'use client';

import { Box, Typography, Slide } from '@mui/material';
import AppButton from '../../commons/appbutton/AppButton';
import { useEffect, useState } from 'react';
import './videoRolling.scss';

const VideoRolling = ({ title, description, src, alt, additionalInformation = '', type }) => {
  const [showContent, setShowContent] = useState(false);

  // Track scroll position to trigger content display
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 1;
      if (scrollPosition > triggerHeight) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        className='videoContainer'
        sx={{
          height: { xs: showContent ? '40vh' : '60vh', md: showContent ? '40vh' : '60vh' },
        }}
      >
        {/* Background Video */}
        <Box
          component="video"
          src={src}
          alt={alt}
          autoPlay
          loop
          muted
          playsInline
          loading="lazy"
          className='videoBackground'
        />

        {/* Content Overlay */}
        <Box className='overlayContent'>
          <Typography variant="h2" componenet='h2' className='title'>
            {title}
          </Typography>

          <Typography variant="h3" componenet='h3'  className='description' mt={1} mb={1}>
            {description}

          </Typography>
        <Box mt={2}>
          <AppButton
              title="start now"
              color="white" />
        </Box>
          
        </Box>
      </Box>

      {/* Additional content that appears after scrolling */}

      <Slide direction="up" in={showContent} mountOnEnter unmountOnExit>
        <Box className='additionalContent'>
          <Typography variant="h3" component="h3">
            Additional Information
          </Typography>
          <Typography variant="p" component="p" mt={1}>
            {additionalInformation}
          </Typography>
        </Box>
      </Slide>
    </>
  );
};

export default VideoRolling;
