// components/layout/BlogPage.js
import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../../theme/theme';
import { motion } from 'framer-motion';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import { imagesSexualHomePage, questions } from '@/utility/data';
import { titleAnimation, iconAnimation, cardVariantsSmall } from '@/utility/animationSyles';
import Image from 'next/image';
import VideoRolling from '../videoRolling/VideoRolling';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import GreetingComponent from '../servicepage/custom/GreetingComponent';
import SectionFeature from '../servicepage/custom/SectionFeature';

const blogPosts = [
  {
    title: 'The Benefits of Telehealth for Your Health and Wallet',
    description: 'Discover how telehealth services can save you time and money while providing top-notch healthcare.',
    image: '/images/blog-telehealth.jpg',
    link: '/blog/benefits-of-telehealth',
  },
  {
    title: 'Why You Don’t Need Insurance for Quality Healthcare',
    description: 'Learn why Joey Med’s services don’t require insurance and how this can benefit you.',
    image: '/images/blog-no-insurance.jpg',
    link: '/blog/no-insurance-healthcare',
  },
  {
    title: 'How to Choose the Right Online Pharmacy',
    description: 'A guide to selecting a reliable online pharmacy for your medication needs.',
    image: '/images/blog-online-pharmacy.jpg',
    link: '/blog/choose-online-pharmacy',
  },
  {
    title: 'The Benefits of Telehealth for Your Health and Wallet',
    description: 'Discover how telehealth services can save you time and money while providing top-notch healthcare.',
    image: '/images/blog-telehealth.jpg',
    link: '/blog/benefits-of-telehealth',
  },
  {
    title: 'Why You Don’t Need Insurance for Quality Healthcare',
    description: 'Learn why Joey Med’s services don’t require insurance and how this can benefit you.',
    image: '/images/blog-no-insurance.jpg',
    link: '/blog/no-insurance-healthcare',
  },
  {
    title: 'How to Choose the Right Online Pharmacy',
    description: 'A guide to selecting a reliable online pharmacy for your medication needs.',
    image: '/images/blog-online-pharmacy.jpg',
    link: '/blog/choose-online-pharmacy',
  },
  {
    title: 'The Benefits of Telehealth for Your Health and Wallet',
    description: 'Discover how telehealth services can save you time and money while providing top-notch healthcare.',
    image: '/images/blog-telehealth.jpg',
    link: '/blog/benefits-of-telehealth',
  },
  {
    title: 'Why You Don’t Need Insurance for Quality Healthcare',
    description: 'Learn why Joey Med’s services don’t require insurance and how this can benefit you.',
    image: '/images/blog-no-insurance.jpg',
    link: '/blog/no-insurance-healthcare',
  },
  {
    title: 'How to Choose the Right Online Pharmacy',
    description: 'A guide to selecting a reliable online pharmacy for your medication needs.',
    image: '/images/blog-online-pharmacy.jpg',
    link: '/blog/choose-online-pharmacy',
  },
];

const BlogPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
    <GreetingComponent         title='Welcome to Our Blog' 
          description=' Stay informed with the latest insights on telehealth, online pharmacy services, and healthcare tips from the experts at joey med.'  />
        <Box className="sexu">
        <SectionFeature images={imagesSexualHomePage} /> 
           <CardSlider cards={blogPosts} type='blog'/> 
        </Box>

        {/* Video Section */}
        <Box sx={{}}>
          <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: colors.primary[200] }}>
              Learn More About Telehealth
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={cardVariantsSmall}>
              <Box sx={{ maxWidth: '800px', width: '100%', borderRadius: 2, overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/watch?v=SI1EhswdgR8"
                  title="Telehealth Insights"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Frequently Asked Questions */}
        <Box sx={{ marginTop: 8, backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: 4, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
          <Questions questions={questions} />
        </Box>
      {/* </Container> */}
    </>
  );
};

export default BlogPage;
