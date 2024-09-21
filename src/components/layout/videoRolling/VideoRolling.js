'use client';

import { Box, Typography, Slide } from '@mui/material';
import AppButton from '../../commons/appbutton/AppButton';
import { useEffect, useState } from 'react';

const VideoRolling = ({ title, description, src, alt }) => {
  const [showContent, setShowContent] = useState(false);

  // Track scroll position to trigger content display
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerHeight = window.innerHeight * 0.5; // Show content when scrolled 50% of the window height
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
        sx={{
          position: 'sticky',
          top: 0,
          width: '100%',
          minHeight: { xs: '50vh', md: '65vh' }, // Set a responsive minHeight for smaller and larger screens
          overflow: 'hidden', // Ensure no overflow on small screens
          zIndex: 10,
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
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1,
            filter: 'brightness(0.5)', // Darkens the video to enhance text readability
          }}
        />

        {/* Content Overlay */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            minHeight: { xs: '50vh', md: '65vh' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center', // Center content in smaller screens
            p: { xs: 2, md: 4 }, // Add responsive padding
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              mb: 2,
              fontSize: { xs: '2.2rem', md: '3.5rem' }, // Adjust font size for responsiveness
              fontWeight: 700, // Use bold text for professional appearance
              textShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)', // Add a stronger text shadow for readability
            }}
          >
            {title}
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'white',
              mb: 4,
              fontSize: { xs: '1.2rem', md: '1.7rem' }, // Adjust font size for responsiveness
              fontWeight: 400,
              textShadow: '0px 4px 8px rgba(0, 0, 0, 0.6)', // Increase shadow for readability
              maxWidth: { xs: '90%', md: '60%' }, // Set a maxWidth for text to avoid overflow on small screens
            }}
          >
            {description}
          </Typography>

          <AppButton
            title="start now"
            color="white"
            sx={{
              fontSize: { xs: '1rem', md: '1.3rem' }, // Responsive font size
              padding: { xs: '8px 20px', md: '12px 30px' }, // Adjust button padding for responsiveness
              backgroundColor: '#1976d2', // Button background color
              borderRadius: '50px', // Make the button rounded for modern style
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)', // Add shadow for modern button effect
              transition: 'background-color 0.3s ease', // Smooth transition effect
              '&:hover': {
                backgroundColor: '#1565c0', // Darker hover effect
              },
            }}
          />
        </Box>
      </Box>

      {/* Additional content that appears after scrolling */}
      <Slide direction="up" in={showContent} mountOnEnter unmountOnExit>
        <Box
          sx={{
            padding: { xs: '20px', md: '40px' },
            backgroundColor: '#f5f5f5',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 2,
            }}
          >
            Additional Information
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.2rem' },
              color: '#333',
            }}
          >
            Discover more about how our platform can help you achieve your health goals.
            With personalized plans and expert guidance, we’re here to support you.
          </Typography>
        </Box>
      </Slide>
    </>
  );
};

export default VideoRolling;
