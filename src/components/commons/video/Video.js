'use client'
import { Box } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import './video.scss'
const Video = ({ src, poster, alt, controls = false, loop = false, muted = true, autoPlay = false, needTransform = true, ...props }) => {
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
    <Box className="bigBox">
      {!isLoaded && (
        <Box className="boxVideo">
         
          <span className="loader"></span> {/* Custom loader */}
        </Box>
      )}
      <video className='video'
        ref={videoRef}
        src={src}
        loading= "lazy"
        onError={() => console.error('Error loading video:', src)}  // Add error handler
        poster={poster}
        controls={controls}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        style={{
          visibility: isLoaded ? 'visible' : 'hidden',
          opacity: isLoaded ? 1 : 0,
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
