'use client'
import React from 'react';
import { Button, Typography } from '@mui/material';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import { motion } from 'framer-motion'; // Importing motion from framer-motion
import './appButton.scss'; // Custom styles here
import Link from 'next/link';
//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

// Define motion variants for the button
const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.004 },
  pressed: { scale: 0.95 }
};

const AppButton = ({ title, color = 'white', href = '/' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
    <Link href={href}>
      {/* Wrap Button in motion.div for animation */}
      <motion.div
        variants={buttonVariants}
        initial="rest"
        whileHover="hover"
        whileTap="pressed"
      >
        <Button
          variant="contained"
          // className="custom-button"
          sx={{
            height: '35px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '20px',
            padding: '10px 20px',
            color: colors.primary[200],
            backgroundColor: colors.primary[1500],
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            '&:hover': {
              backgroundColor: 'silver',
              boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          <Typography variant="p" sx={{ fontWeight: 'bold', marginRight: '8px', textTransform: 'capitalize', whiteSpace: 'nowrap' }}>
            {title}
          </Typography>
          {(title === 'start now') && <EastOutlinedIcon className="arrow-icon" />}
        </Button>
      </motion.div>
    </Link>
    </motion.div>
  );
};

export default AppButton;
