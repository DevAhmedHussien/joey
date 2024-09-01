// pages/blog.js
'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Container, Typography, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme/theme';
import { motion } from 'framer-motion';
import CardBlog from '../../components/commons/cardblog/CardBlog';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import { questions } from '@/utility/data';
// ** Animation styles
// ** Animation styles
import { titleAnimation, cardAnimation, iconAnimation , cardVariantsSmall, itemVariants, cardVariantsRight, cardVariantsLeft,} from '../../utility/animationSyles';

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
  // Add more blog posts as needed
];

const Blog = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Head>
        <title>Joey Med Blog | Telehealth & Online Pharmacy Insights</title>
        <meta
          name="description"
          content="Read the latest blog posts from Joey Med. Explore topics on telehealth services, online pharmacy tips, healthcare advice, and how to get quality healthcare without insurance."
        />
        <meta name="keywords" content="Joey Med blog, telehealth tips, online pharmacy advice, healthcare without insurance, Tampa Florida, telemedicine, healthcare articles" />
      </Head>

      {/* Top Image Section */}
      <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        <Image
          src="/images/homePage/sexual.png"
          alt="Joey Med Blog"
          layout="fill"
          style={{ filter: 'brightness(0.7)' }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
            <Typography variant="h1" component="h1" align="center" sx={{ color: colors.primary[200], fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Joey Med Blog
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ padding: '50px 0' }}>
        {/* Introduction */}
        <Box sx={{ marginBottom: 8 }}>
          <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: colors.primary[200] }}>
              Welcome to Our Blog
            </Typography>
          </motion.div>
          <Typography variant="body1" align="center" paragraph sx={{ color: colors.primary[200] }}>
            Stay informed with the latest insights on telehealth, online pharmacy services, and healthcare tips from the experts at Joey Med.
          </Typography>
        </Box>

        {/* Blog Cards */}
        <Grid container spacing={4} sx={{ marginBottom: 8 }}>
          {blogPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div initial="hidden" animate="visible" variants={iconAnimation}>
                <CardBlog imageSrc={post.image} imageAlt={post.title} title={post.title} readTime={'Read 5 min ago'} height={400} width={400} />
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Video Section */}
        <Box sx={{ marginBottom: 8 }}>
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
                  src="https://www.youtube.com/embed/example_video"
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
      </Container>
    </>
  );
};

export default Blog;
