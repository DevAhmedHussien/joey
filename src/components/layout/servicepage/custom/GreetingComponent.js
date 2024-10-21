'use client';

import AppButton from '@/components/commons/appbutton/AppButton';
import { Box, Typography } from '@mui/material';

// ** Animation 
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { cardVariantsSmall } from '@/utility/animationSyles';
import ImageWithSpinner from '@/components/commons/image/ImageWithSpinner';

export default function GreetingComponent({ title, description }) {


  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={cardVariantsSmall}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection:'column',
          alignItems: 'start',
          justifyContent: 'space-between',
          gap:1,
          p: { xs: 2, md: 4 },
        }}
      >
        <Box>
          <Typography variant="h2" component="h2"  >
            {title}
          </Typography>
          <Typography variant="h6" component="h6"   mt={2} >
            {description}
          </Typography>
        </Box>
        <Box mt={2}>
          {/* <ImageWithSpinner
            src='/images/homePage/women.png'
            alt='man foto'
          /> */}
          <AppButton title="start now" color="primary" />
        </Box>
      </Box>
    </motion.div>
  );
}
