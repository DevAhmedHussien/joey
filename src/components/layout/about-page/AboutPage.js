'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Video from '@/components/commons/video/Video';
import { titleAnimation, cardAnimation } from '@/utility/animationSyles';
import './aboutPage.scss'; // Import the SCSS file for styling
import GreetingComponent from '../servicepage/custom/GreetingComponent';
import ImageWithSpinner from '@/components/commons/image/ImageWithSpinner';

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <GreetingComponent 
        title= "About joey med : Revolutionizing Healthcare for Everyone"
        description="Discover how joey med is making healthcare more accessible, affordable, and convenient for everyone. From virtual consultations to an online pharmacy, we are committed to delivering high-quality healthcare services at your fingertips, with or without insurance."
      /> 
      
      <Box className="image-container">
        <ImageWithSpinner alt="About Joey Med" src="/images/about.png" />
      </Box>

      <Container maxWidth="xl" className="main-container">
        
        {/* Our Story */}
        <Box className="story-container">
            <Typography variant="h2" mt={4}>Our Story</Typography>
            <Box className="story-content">
                <Typography variant="body1" >
                Joey med was founded with a simple yet powerful idea: to make healthcare more accessible and affordable for everyone, regardless of their location or insurance status. Born in Tampa, Florida, Joey med was created by a team of healthcare professionals and technology experts who recognized the growing need for efficient, patient-centric care. By harnessing the power of telehealth, we’ve made it easier for patients to connect with licensed providers, receive expert consultations, and get prescriptions delivered straight to their doorsteps. Today, Joey med proudly serves thousands of patients, ensuring high-quality healthcare is available to all.
                </Typography>
            </Box>
            <Video
                className="video-thumbnail"
                src='/videos/weightVideo.mp4'
                type="video/mp4"
                alt="A description of the video content"
                autoPlay
                loop
            />
        </Box>

        {/* Mission and Vision */}
        <Box className="mission-vision-container">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <Box className="card-content">
                  <Typography variant="h2" component="h2" >Our Mission</Typography>
                  <Typography variant="p" component="p" mt={2}>
                    At joey Med, our mission is to remove the barriers to healthcare by providing innovative telehealth services and a seamless online pharmacy experience. We believe that everyone deserves timely, affordable, and professional healthcare—no matter where they are or their insurance status. Our goal is to empower individuals to take control of their health with convenience, trust, and the highest standard of care.
                  </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <ImageWithSpinner
                  src="/images/homePage/man.png"
                  alt="Our Mission"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <ImageWithSpinner
                  src="/images/homePage/products.png"
                  alt="Our Vision"
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <Box className="card-content">
                  <Typography variant="h2"  component="h2" >Our Vision</Typography>
                  <Typography variant="p" component="p" mt={2} >
                    We envision a world where healthcare is as easy to access as any other service. A future where geography, insurance status, and time are no longer obstacles to receiving quality healthcare. Through joey med, we aim to be at the forefront of this transformation, providing telehealth solutions that redefine the way people experience healthcare—making it more personal, reliable, and accessible for all.
                  </Typography>
                </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;
