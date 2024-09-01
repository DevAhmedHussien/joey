'use client'
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Container, Typography, Grid, Avatar, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { tokens } from '../../theme/theme';
import { motion } from 'framer-motion';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import Video from '@/components/commons/video/Video';
import { questions } from '@/utility/data';
// ** Animation styles
import { titleAnimation, cardAnimation, iconAnimation } from '../../utility/animationSyles';


const AboutUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

 

  return (
    <>
      <Head>
        <title>About Joey Med | Telehealth & Online Pharmacy in Tampa, Florida</title>
        <meta
          name="description"
          content="Learn about Joey Med, a leading telehealth and online pharmacy service based in Tampa, Florida. No insurance required. Accessible and affordable healthcare from the comfort of your home."
        />
        <meta name="keywords" content="telehealth services, online pharmacy, Joey Med, Tampa Florida, no insurance required, telemedicine, healthcare" />
      </Head>

      {/* Top Image Section */}
      <Box sx={{ position: 'relative', width: '100%', height: '400px', overflow: 'hidden' }}>
        <Image
          src="/images/homePage/sexual.png"
          alt="About Joey Med"
          layout="fill"
          // objectFit="cover"
          	loading="lazy"
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
            <Typography variant="h1" align="center" sx={{ color: colors.primary[200], fontSize: { xs: '2.5rem', md: '4rem' } }}>
              About Joey Med
            </Typography>
          </motion.div>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ padding: '50px 0' }}>

        {/* Our Story */}
        <Box sx={{ position:'relative',display:'flex',justifyContent:'center',alignItems:'start', marginBottom:4  }}>
          <Box sx={{p:2, width:{sx:'100%', md:'50%'},  position:'absolute',left:10, top:'20%', zIndex:2,
          background: '#ffffff7a',
          borderRadius: '20px',
          boxShadow:' 1px 2px 16px 6px #846f70'
      }}>
            <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
              <Typography variant="h2" component='h2' align="center" gutterBottom sx={{ color: colors.primary[200] }}>
                Our Story
              </Typography>
            </motion.div>
            <Typography variant="body1" align="center" paragraph sx={{ color: colors.primary[200] }}>
              Joey Med started with a simple idea: to make healthcare more accessible and affordable for everyone. Founded in Tampa, Florida, we saw a need for a service that could provide quality healthcare without the need for insurance, and so Joey Med was born. Today, we’re proud to serve thousands of patients across the state with top-notch telehealth services and an online pharmacy that delivers straight to your door.
            </Typography>
          </Box>
          <Video
            className="video-thumbnail"
            src={'/videos/weightVideo.mp4'}
            type="video/mp4"
             alt="A description of the video content"
             // controls
            //  onClick={() => handleVideoClick(src)}
             autoPlay={true}
             loop
            />
        </Box>

        {/* Mission and Vision */}
        <Box sx={{ marginBottom: 8 }}>
          <Grid container spacing={4} alignItems="start">
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Box sx={{ backgroundColor: 'transparent', padding: 3, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
                  <Typography variant="h2" gutterBottom sx={{ color: colors.primary[1600] }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: colors.primary[200] }}>
                    At Joey Med, our mission is to break down barriers to healthcare by providing innovative telehealth services and a seamless online pharmacy experience. We believe that everyone deserves access to quality healthcare, regardless of their insurance status.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Image
                  src="/images/homePage/man.png"
                  alt="Our Mission"
                  width={500}
                  height={400}
                  style={{ borderRadius: '8px' }}
                  	loading="lazy"
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Image
                  src="/images/homePage/products.png"
                  alt="Our Vision"
                  width={500}
                  height={400}
                  style={{ borderRadius: '8px' }}
                />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Box sx={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: 3, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
                  <Typography variant="h2" gutterBottom sx={{ color: colors.primary[1600] }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: colors.primary[200] }}>
                    We envision a future where healthcare is accessible to all, no matter where you live or your insurance status. Through Joey Med, we aim to be at the forefront of this healthcare revolution, delivering telehealth services and medications to your doorstep with ease and efficiency.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Meet the Team */}
        <Box sx={{ marginBottom: 8 }}>
          <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: colors.primary[200] }}>
              Meet the Joey Med Team
            </Typography>
          </motion.div>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    alt="Dr. John Doe - Chief Medical Officer"
                    src="/images/team-member-1.jpg"
                    sx={{ width: 150, height: 150, margin: 'auto', marginBottom: 2 }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ color: colors.primary[1600] }}>
                    Dr. John Doe
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Chief Medical Officer
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: colors.primary[200] }}>
                    Dr. John has over 20 years of experience in telemedicine, ensuring that our services are safe, reliable, and cutting-edge.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    alt="Jane Smith - Lead Pharmacist"
                    src="/images/team-member-2.jpg"
                    sx={{ width: 150, height: 150, margin: 'auto', marginBottom: 2 }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ color: colors.primary[1600] }}>
                    Jane Smith
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lead Pharmacist
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: colors.primary[200] }}>
                    Jane oversees our online pharmacy operations, ensuring that all medications are delivered safely and promptly.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
                <Box sx={{ textAlign: 'center' }}>
                  <Avatar
                    alt="Michael Brown - Head of Patient Services"
                    src="/images/team-member-3.jpg"
                    sx={{ width: 150, height: 150, margin: 'auto', marginBottom: 2 }}
                  />
                  <Typography variant="h6" gutterBottom sx={{ color: colors.primary[1600] }}>
                    Michael Brown
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Head of Patient Services
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: colors.primary[200] }}>
                    Michael ensures that our patients receive the highest level of care, guiding them through every step of their telehealth journey.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        {/* Video Section */}
        <Box sx={{ marginBottom: 8 }}>
          <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: colors.primary[200] }}>
              Our Journey
            </Typography>
          </motion.div>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <motion.div initial="hidden" animate="visible" variants={cardAnimation}>
              <Box sx={{ maxWidth: '800px', width: '100%', borderRadius: 2, overflow: 'hidden' }}>
                <iframe
                  width="100%"
                  height="450"
                  src="https://www.youtube.com/embed/example_video"
                  title="Our Journey"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Why Choose Joey Med */}
        <Box sx={{ marginTop: 8, backgroundColor: 'rgba(255, 255, 255, 0.9)', padding: 4, borderRadius: 2, backdropFilter: 'blur(10px)' }}>
          <motion.div initial="hidden" animate="visible" variants={titleAnimation}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: colors.primary[200] }}>
              Why Choose Joey Med?
            </Typography>
          </motion.div>
          <Typography variant="body1" align="center" paragraph sx={{ color: colors.primary[200] }}>
            Joey Med is designed with your convenience and health in mind. We offer:
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={3}>
              <motion.div initial="hidden" animate="visible" variants={iconAnimation}>
                <Box sx={{ textAlign: 'center', padding: 2 }}>
                  <HealthAndSafetyOutlinedIcon sx={{ fontSize: 50, color: colors.primary[1600] }} />
                  <Typography variant="body1" sx={{ color: colors.primary[200], marginTop: 1 }}>
                    Affordable consultations with licensed healthcare professionals.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div initial="hidden" animate="visible" variants={iconAnimation} transition={{ delay: 0.1 }}>
                <Box sx={{ textAlign: 'center', padding: 2 }}>
                  <LocalPharmacyOutlinedIcon sx={{ fontSize: 50, color: colors.primary[1600] }} />
                  <Typography variant="body1" sx={{ color: colors.primary[200], marginTop: 1 }}>
                    A user-friendly online pharmacy with fast, discreet shipping to your doorstep.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div initial="hidden" animate="visible" variants={iconAnimation} transition={{ delay: 0.2 }}>
                <Box sx={{ textAlign: 'center', padding: 2 }}>
                  <SupportAgentOutlinedIcon sx={{ fontSize: 50, color: colors.primary[1600] }} />
                  <Typography variant="body1" sx={{ color: colors.primary[200], marginTop: 1 }}>
                    24/7 access to healthcare from the comfort of your home.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div initial="hidden" animate="visible" variants={iconAnimation} transition={{ delay: 0.3 }}>
                <Box sx={{ textAlign: 'center', padding: 2 }}>
                  <HistoryEduOutlinedIcon sx={{ fontSize: 50, color: colors.primary[1600] }} />
                  <Typography variant="body1" sx={{ color: colors.primary[200], marginTop: 1 }}>
                    A dedicated team ensuring personalized care and attention.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
          <Typography variant="body1" align="center" mt={2} sx={{ color: colors.primary[200] }}>
            Learn more about our <Link href="/services" sx={{ color: colors.primary[1600] }}>services</Link> or <Link href="/contact" sx={{ color: colors.primary[1600] }}>contact us</Link> today to get started.
          </Typography>
        </Box>
        <Questions questions={questions}/>
      </Container>
    </>
  );
};

export default AboutUs;
