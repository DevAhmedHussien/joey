// 'use client'
// import { useState } from 'react';
import Image from 'next/image';
import { Box, CircularProgress } from '@mui/material';
import './image.scss'
const ImageWithSpinner = ({ src, alt, ...props }) => {
  // const [loading, setLoading] = useState(true); 
  let loading = true
  const handleImageLoad = () => {
    // setTimeout(()=>{
      // setLoading(false);
      loading = false 
    // },1500)
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {loading && (
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
          {/* <CircularProgress /> */}
          <span class="loader"></span>
        </Box>
      )}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        loading="lazy"
        quality={100}
        onLoad={handleImageLoad}
        style={{
          borderRadius: 2,
          transition: 'transform 0.3s ease-in-out',
          opacity: loading ? 0 : 1, // Image fades in when loaded
        }}
        {...props}
      />
    </Box>
  );
};

export default ImageWithSpinner;
