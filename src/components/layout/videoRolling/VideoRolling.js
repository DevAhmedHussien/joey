'use client';

import { Box, Typography } from '@mui/material';
import AppButton from '../../commons/appbutton/AppButton';

const VideoRolling = ({ title, description, src}) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', minHeight: 600, mt: 1 }}>
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
          // opacity: 0.8, // Adjust opacity as needed
        }}
      />
      {/* Content Overlay */}
      <Box 
        sx={{ position: 'relative', zIndex:2, width: '100%', minHeight: 600,display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <Box>
          <Typography variant="h2" sx={{ color: 'white', mb: 2 }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ color: 'white', mb: 4 }}>
            {description}
          </Typography>
          <AppButton title="start now" color="white" />
        </Box>

        <Box sx={{ width: 200, height: 200, background: 'transparent', opacity: '0.6', borderRadius: 10 }}>
          {/* <video src="/videos/weightVideo.mp4" controls style={{ width: '100%', height: '100%', borderRadius: 10 }}>
            Your browser does not support the video tag.
          </video> */}
        </Box>
      </Box>
      
    </Box>
  );
};

export default VideoRolling;
