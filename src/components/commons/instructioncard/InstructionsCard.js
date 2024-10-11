'use client';
import { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import './InstructionCard.scss'; // Import the SCSS file

export default function InstructionCard({ title, content }) {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <Box className="instruction-card-container"> 
    
      {/* Header with title and Info icon */}
      <Box className="card-header">
        <Typography variant="h5" component="h5">{title}</Typography>
        <IconButton onClick={toggleInstructions}>
          <InfoIcon />
        </IconButton>
      </Box>

      {/* Framer Motion Animation */}
      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="instructions-content"
          >
            <Box className="instructions-header">
              <Typography variant="subtitle1">Instructions</Typography>
              <IconButton onClick={toggleInstructions}>
                <CloseIcon />
              </IconButton>
            </Box>
            {content.map((paragraph, index) => (
              <Typography key={index} variant="body1" component="body1">
                {paragraph}
              </Typography>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}
