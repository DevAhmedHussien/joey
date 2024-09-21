// 'use client'
// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
// import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
// import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

// //** Theme part */
// import { tokens } from '../../../theme/theme';
// import { useTheme } from '@mui/material';

// // Color Palette from the Image
// const colors = {
//   lightGray: '#f5f5f5',
//   mediumGray: '#e4e4e4',
//   teal: '#00d8ff',
//   coral: '#e48a81',
//   darkBlue: '#001d4a',
// };

// const InfoList = () => {

//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   return (
//     <Box display="flex" flexDirection="column" alignItems="start" justifyContent="center" height="100%">
//       <Box display="flex" alignItems="center" mb={2}>
//         <CheckCircleOutlineIcon sx={{ color: colors.primary[1600], mr: 1, fontSize: 17 }} />
//         <Typography variant="h6"  fontSize={13} color={colors.primary[200]}>2,000,000+ members treated </Typography>
//       </Box>
//       <Box display="flex" alignItems="center" mb={2}>
//         <LocalShippingOutlinedIcon sx={{ color: colors.primary[1600], mr: 1, fontSize: 17 }} />
//         <Typography variant="h6" fontSize={13}  color={colors.primary[200]}>Free and discreet shipping</Typography>
//       </Box>
//       <Box display="flex" alignItems="center" mb={2}>
//         <EventAvailableOutlinedIcon sx={{ color: colors.primary[1600], mr: 1, fontSize: 17 }} />
//         <Typography variant="h6"  fontSize={13} color={colors.primary[200]}>100% online process</Typography>
//       </Box>
//       <Box display="flex" alignItems="center">
//         <BlockOutlinedIcon sx={{ color: colors.primary[1600], mr: 1, fontSize: 17 }} />
//         <Typography variant="h6" fontSize={13}  color={colors.primary[200]}>No insurance required</Typography>
//       </Box>
//     </Box>
//   );
// };

// export default InfoList;
// 


'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { interpolate } from 'flubber';


// //** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

// Relevant SVG Path Variants related to titles
const icons = [
  {
    path:  "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z", // Group of people
    label: 'Over 2 million people served',
    // color: '#001d4a' 
    color: '#ecb4ad' 
  },
  {
    path: 'M12 2C8.13 2 5 5.13 5 9c0 3.86 7 13 7 13s7-9.14 7-13c0-3.87-3.13-7-7-7zm0 9.5C10.62 11.5 9.5 10.38 9.5 9S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5z',
    label: '100% Online Process',
    color: '#ecb4ad' 
  },
  {
    path: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', // Heart shape
    label: 'Trusted by millions',
    // color: '#001d4a' 
    color: '#ecb4ad' 

  },
  {
    path:  "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z", // Paper airplane
    label: 'Free & Fast Shipping',
    color: '#ecb4ad' 
  }
];

const InfoList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentIcon, setCurrentIcon] = useState(0);
  const [currentPath, setCurrentPath] = useState(icons[0].path);
  const [currentColor, setCurrentColor] = useState(icons[0].color);
  const [labelVisible, setLabelVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLabelVisible(false);
      setTimeout(() => {
        setCurrentIcon(prev => (prev + 1) % icons.length);
        setLabelVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const nextIcon = (currentIcon + 1) % icons.length;
    const morph = interpolate(icons[currentIcon].path, icons[nextIcon].path, { maxSegmentLength: 0.1 });
    let frame = 0;
    const duration = 20; // 1 second
    const interval = setInterval(() => {
      frame++;
      setCurrentPath(morph(frame / duration));
      setCurrentColor(icons[nextIcon].color);
      if (frame === duration) clearInterval(interval);
    }, 16.67); // 60 FPS

    return () => clearInterval(interval);
  }, [currentIcon]);

  return (
    <Box display="flex"  alignItems="start" justifyContent="center" height="100%">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: labelVisible ? 1 : 0, x: labelVisible ? 0 : 50 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h3"component='h3' align="center"  sx={{ mt: 2 ,color:colors.primary[200]}}>
          {icons[currentIcon].label}
        </Typography>
      </motion.div>
      <motion.svg
        width="100"
        height="100"
        viewBox="0 0 22 22"
        fill={currentColor}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.path
          d={currentPath}
          transition={{ duration: 1.5 }}
        />
      </motion.svg>
     
    </Box>
  );
};

export default InfoList;
