'use client'

import React, { useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab, useMediaQuery } from "@mui/material";
import { motion } from 'framer-motion'; // For animations
import AppButton from "@/components/commons/appbutton/AppButton";
import Question from "../../frequentlyquestions/Question";
import { tokens } from '../../../../theme/theme';
import { useTheme } from '@mui/material';

import './productComponenet.scss'
import ImageWithSpinner from "@/components/commons/image/ImageWithSpinner";

// ** Animation styles
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// Section with background color for dynamic content
function SectionWithBackground({ content, backgroundColor }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <motion.div variants={itemVariants} style={{ marginTop: '20px', backgroundColor: backgroundColor,
     borderRadius: '12px', padding: '16px' }}>
      <Typography 
        variant="body1" 
        component="p" 
        p={1}
        sx={{ lineHeight: '1.75', textAlign: 'left', color: colors.primary[100] }}  // White text color
      >
        {content}
      </Typography>
    </motion.div>
  );
}

export default function ProductComponent({ name, description, images, questions, productDescription, price, benefit, ingredient = 'x', safety = 'x' }) {

  // ** Hooks
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [tabValue, setTabValue] = useState(0); // For Tab navigation
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Responsive hooks
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      // mt={5} 
      padding={3} 
      display="flex" 
      justifyContent={'center'} 
      alignItems={'start'} 
      gap={3} 
      flexDirection={{ xs: "column", md: "row" }}
      sx={{
        backgroundColor: colors.primary[100],
        borderRadius: '16px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}
    >
      
      {/* Product Images Section */}
      <Box 
        height={isSmallScreen ? 300 : 600} 
        width={isSmallScreen ? '100%' : '50%'}
        sx={{
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          '&:hover img': {
            transform: 'scale(1.05)',
            transition: 'transform 0.5s ease-in-out'
          }
        }}
      >
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ width: '100%', height: "100%" }}
        >
          <Box height="100%" sx={{ position: 'relative' }}>
            <ImageWithSpinner 
              src={selectedImage}
              alt="Product Image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Product Information Section */}
      <Box 
        padding={2} 
        mt={isSmallScreen ? 2 : 0} 
        width={isSmallScreen ? '100%' : '50%'}
        sx={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'space-between',
          gap: 4
        }}
      >
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ width: '100%' }}
        >
          <Typography 
            variant={isSmallScreen ? "h4" : "h2"} 
            component="h2" 
            color={colors.primary[200]}
            sx={{ fontWeight: 'bold', textAlign: isSmallScreen ? 'center' : 'left' }}
          >
            {name}
          </Typography>

          <Typography 
            variant={isSmallScreen ? "h6" : "h5"} 
            component="h5" 
            p={1} 
            color={colors.primary[200]}
            sx={{ lineHeight: '1.5', textAlign: isSmallScreen ? 'center' : 'left' }}
          >
            {productDescription} 
          </Typography>

          {/* AppBar for Ingredient, Benefit, Safety */}
          <AppBar position="static" color="default" sx={{ borderRadius: '8px', boxShadow: 'none' }}>
            <Tabs 
              value={tabValue} 
              onChange={handleTabChange} 
              variant="fullWidth"
              TabIndicatorProps={{ style: { backgroundColor: colors.primary[200] } }}  // Red indicator line
            >
              <Tab 
                label="Ingredient" 
                sx={{ 
                  // textTransform:'capitalize',
                  color: tabValue === 0 ? colors.primary[200] : colors.primary[200],  // Change to black when selected
                  backgroundColor: tabValue === 0 ? colors.primary[1600] : 'transparent'  // Change to red background when selected
                }} 
              />
              <Tab 
                label="Benefit" 
                sx={{ 
                  // textTransform:'capitalize',
                  color: tabValue === 1 ? colors.primary[200] : colors.primary[200], 
                  backgroundColor: tabValue === 1 ? colors.primary[1600] : 'transparent' 
                }} 
              />
              <Tab 
                label="Safety" 
                sx={{ 
                  // textTransform:'capitalize',
                  color: tabValue === 2 ?colors.primary[200] : colors.primary[200], 
                  backgroundColor: tabValue === 2 ? colors.primary[1600] : 'transparent' 
                }} 
              />
            </Tabs>
          </AppBar>

          {/* Conditionally Render Section Based on Tab Selection */}
          {tabValue === 0 && (
            <SectionWithBackground 
              content={ingredient} 
              backgroundColor="#e48a81" 
              // backgroundColor="#001d4a" 
            />
          )}
          {tabValue === 1 && (
            <SectionWithBackground 
              content={benefit.map((b, index) => (
                <React.Fragment key={index}>
                  <strong>{Object.keys(b)[0]}:</strong> {Object.values(b)[0]}<br />
                </React.Fragment>
              ))} 
              backgroundColor="#e48a81" 


            />
          )}
          {tabValue === 2 && (
            <SectionWithBackground 
              content={safety} 
              backgroundColor="#e48a81" 
              // backgroundColor="#001d4a" 


            />
          )}

          {/* Start Now Button */}
          <Box mt={1} sx={{ display: 'flex', justifyContent: isSmallScreen ? 'center' : 'left' }}>
            <AppButton title="start now" />
          </Box>

          {/* Additional Info */}
          <Typography 
            variant="body2" 
            display="block" 
            marginTop={5} 
            marginBottom={2} 
            color={colors.primary[200]}
            sx={{ fontSize: '12px', textAlign: 'justify' }}
          >
            *After medication dissolved. Compounded drugs are permitted to be prescribed under federal law but are not FDA-approved.
          </Typography>

          {/* Frequently Asked Questions */}
          {questions.map((q, index) => (
            <Question key={index} ques={q.question} ans={q.answer} />
          ))}
        </motion.div>
      </Box>
    </Box>
  );
}