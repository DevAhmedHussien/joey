import React from 'react';
import { Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export const PlayButtonIcon = () => {
  return (
    <Box
      sx={{
        position:'absolute',
        bottom:'10%',
        right:'10%',
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.3s ease-in-out',
        cursor:'pointer',
        '&:hover': {
          backgroundColor:'#e48a81',
        },
      }}
    >
      <PlayArrowIcon sx={{ color: 'black', fontSize: 20 }} />
    </Box>
  );
};

export function CustomPersonIconSVG({ width = 24, height = 24, color = 'black' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"  // Ultra-thin line
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function SearchIconSVG({ width = 24, height = 24, color = 'black' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"  // Thin line
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="17" y1="17" x2="22" y2="22" />
    </svg>
  );
}


