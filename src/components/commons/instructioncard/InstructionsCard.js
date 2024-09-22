'use client'
import { useState } from 'react';
import { Box, Typography, IconButton, Slide } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';

export default function InstructionCard({ title, content }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <Box
      sx={{
        minHeight: 500,
        position: 'relative',
        width: '100%',
        maxWidth: 400,
        margin: '20px auto',
        padding: 2,
        borderRadius: 2,
        boxShadow: 3,
        color: '#fff',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/homePage/man.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.7, // Set the opacity of the image
          zIndex: -1, // Ensure the image is behind the content
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slight black overlay
          zIndex: -1, // Ensure the overlay is behind the content
        },
      }}
    >
      
      <Box sx={{ minHeight: 600, display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
        <Typography variant="h5" component='h5'>{title}</Typography>
        <IconButton onClick={toggleInstructions} color="inherit">
          <InfoIcon />
        </IconButton>
      </Box>
      <Slide direction="down" in={showInstructions} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            padding: 2,
            backgroundColor: 'rgba(51, 51, 51, 0.9)', // Semi-transparent background
            color: '#fff',
            zIndex: 10,
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle1">Instructions</Typography>
            <IconButton onClick={toggleInstructions} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>
          {content.map((paragraph, index) => (
            <Typography key={index} variant="body2" sx={{ marginTop: 2 }} >
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Slide>
    </Box>
  );
}
