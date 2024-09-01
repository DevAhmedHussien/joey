'use client'
import React from 'react';
import { Button, Typography } from '@mui/material';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import './appButton.scss'; // Custom styles here
import Link from 'next/link';
//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

const AppButton = ({title, color = 'white', href='/'}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
    <Link href={href}>
    <Button
      variant="contained"
      className="custom-button"
      sx={{
        // width:100,
        // height:5,
        height: '35px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '20%',
        padding: '10px 20px',
        // backgroundColor: {color},
        color: colors.primary[200],
        backgroundColor:colors.primary[1500],
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        '&:hover': {
          backgroundColor: 'silver',
          boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Typography variant="p" sx={{ fontWeight: 'bold', marginRight: '8px',textTransform:'capitalize' }}>
        {title}
      </Typography>
      {(title == 'start now')  &&  <EastOutlinedIcon className="arrow-icon" />}
    </Button>
    </Link>
    </>
    
  );
};

export default AppButton;
