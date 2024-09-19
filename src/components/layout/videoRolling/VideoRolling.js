'use client';

import { Box, Typography } from '@mui/material';
import AppButton from '../../commons/appbutton/AppButton';

const VideoRolling = ({ title, description, src }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: '65vh', // Set a responsive minimum height
        mt: 1,
        overflow: 'hidden', // Ensure no overflow on small screens
      }}
    >
      {/* Background Video */}
      <Box
        component="video"
        src={src}
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
          filter: 'brightness(0.6)', // Darkens the video to enhance text readability
        }}
      />

      {/* Content Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          minHeight: '65vh',
          display: 'flex',
          flexDirection: 'column', // Stack content vertically
          alignItems: 'start',
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
            fontSize: { xs: '2rem', md: '3rem' }, // Adjust font size for responsiveness
            fontWeight: 700, // Use bold text for professional appearance
            textShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)', // Add text shadow for readability
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: 'white',
            mb: 4,
            fontSize: { xs: '1.2rem', md: '1.5rem' }, // Adjust font size for responsiveness
            fontWeight: 400,
            textShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)', // Enhance readability
          }}
        >
          {description}
        </Typography>

        <AppButton
          title="start now"
          color="white"
          sx={{
            fontSize: { xs: '1rem', md: '1.2rem' }, // Button font size is responsive
            padding: { xs: '8px 16px', md: '10px 24px' }, // Padding for button
            backgroundColor: '#1976d2', // Professional button color
            '&:hover': {
              backgroundColor: '#1565c0', // Darken on hover for a modern effect
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default VideoRolling;
