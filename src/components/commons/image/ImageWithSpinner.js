'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';
import './image.scss';

const ImageWithSpinner = ({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false); 
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {loading && (
        <Box className="box-image">
          <span className="loader"></span> 
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
          opacity: loading ? 0 : 1, 
        }}
        {...props}
      />
    </Box>
  );
};

export default ImageWithSpinner;
