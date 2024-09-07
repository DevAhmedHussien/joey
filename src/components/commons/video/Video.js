'use client'
import { Box, CircularProgress } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';

const Video = ({ src, poster, alt, controls = false, loop = false, muted = true, autoPlay = false, ...props }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const handleCanPlay = () => {
        setIsLoaded(true); 
      };

      videoRef.current.addEventListener('canplay', handleCanPlay);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('canplay', handleCanPlay);
        }
      };
    }
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'auto',
        overflow: 'hidden',
        '&:hover': {
          transform: 'scale(1.1)', 
          borderRadius:3,
          transition: 'transform 0.3s ease-in-out',
        },
        transition: 'transform 0.3s ease-in-out', 
      }}
    >
      {!isLoaded && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: '#f0f0f0',
          }}
        >
          {/* Uncomment this if you want to use Material-UI's CircularProgress */}
          {/* <CircularProgress /> */}
          <span className="loader"></span> {/* Custom loader */}
        </Box>
      )}
      <video
        ref={videoRef}
        src={src}
        onError={() => console.error('Error loading video:', src)}  // Add error handler
        poster={poster}
        controls={controls}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        style={{
          width: '101%',
          height: 'auto',
          visibility: isLoaded ? 'visible' : 'hidden',
          borderRadius: 2,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
        {...props}
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default Video;
