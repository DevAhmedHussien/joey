import React, { useState } from 'react';
import Image from 'next/image';
import { Box, LinearProgress, Typography } from '@mui/material';

const ImageWithSpinner = ({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleImageLoad = () => {
    setLoading(false);
    setProgress(100); // Set progress to 100% when the image is fully loaded
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };

  const handleImageProgress = (event) => {
    if (event.target.complete) {
      handleImageLoad();
    } else if (event.target.naturalWidth) {
      // Calculate the progress based on the natural width of the image
      setProgress((event.target.currentSrc.length / event.target.naturalWidth) * 100);
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {loading && !error && (
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
            flexDirection: 'column',
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: '50%', mb: 1 }}
          />
          <Typography variant="body2">{Math.round(progress)}%</Typography>
        </Box>
      )}
      {error ? (
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
            color: 'red',
          }}
        >
          <Typography variant="body2">Image failed to load</Typography>
        </Box>
      ) : (
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          quality={100}
          onLoadingComplete={handleImageLoad}
          onError={handleImageError}
          onLoad={handleImageProgress}
          style={{
            borderRadius: 2,
            transition: 'transform 0.3s ease-in-out',
            display: loading ? 'none' : 'block', // Hide image until it's loaded
          }}
          {...props}
        />
      )}
    </Box>
  );
};

export default ImageWithSpinner;

