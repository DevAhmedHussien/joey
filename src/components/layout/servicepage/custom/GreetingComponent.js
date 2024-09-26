'use client';

import AppButton from '@/components/commons/appbutton/AppButton';
import { Box, Typography } from '@mui/material';
import InfoList from '../../infolist/InfoList';

// ** theme 
import { tokens } from '../../../../theme/theme';
import { useTheme } from '@mui/material';

// ** Animation 
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { cardVariantsSmall } from '@/utility/animationSyles';
import ImageWithSpinner from '@/components/commons/image/ImageWithSpinner';

export default function GreetingComponent({ title, description }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={cardVariantsSmall}
      style={{ width: '100%' }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: { xs: 2, md: 4 },
        }}
      >
        <Box>
          <Typography variant="h2" component="h2" color={colors.primary[200]}>
            {title}
          </Typography>
          <Typography variant="h5" component="h5" color={colors.primary[200]} mt={2}>
            {description}
          </Typography>
         
        </Box>
        <Box>
          {/* <InfoList /> */}
        </Box>
        <Box mt={2}>
        {/* <ImageWithSpinner
            src={'/images/homePage/man.png'}
            alt={'man foto'}
            sx={{width: '100%', // Full width for responsiveness
              height: '100%', // Full height for responsiveness
              objectFit: 'cover', // Ensures image fills the container
            }}
          /> */}
          <AppButton title="start now" color="primary" />
        </Box>
      </Box>
    </motion.div>
  );
}
