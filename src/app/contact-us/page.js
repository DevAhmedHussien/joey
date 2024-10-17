'use client'
import ContactForm from '../../components/Auth/ContactForm';
import React from 'react';
import Head from 'next/head';
import { Box, Typography, Link } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '../../theme/theme';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import { motion } from 'framer-motion';
import { cardVariantsLeft, cardVariantsSmall, cardVariantsRight } from '@/utility/animationSyles';

const ContactUs = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Title Animation
  const titleAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Icon Animation
  const iconAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  return (
    <>
      <Head>
        <title>Contact Joey Med | Telehealth & Online Pharmacy in Tampa, Florida</title>
        <meta
          name="description"
          content="Get in touch with Joey Med, a leading telehealth and online pharmacy provider in Tampa, Florida. Contact us for more information on our services, consultations, and medications. No insurance required."
        />
        <meta name="keywords" content="contact Joey Med, telehealth services, online pharmacy, Tampa Florida, no insurance required, telemedicine, healthcare" />
      </Head>
      <Box>
        {/* Background Image */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120vh',
            backgroundImage: 'url("/images/homePage/weight.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
            filter: 'brightness(0.7)',
          }}
        />

        {/* Diagonal Split */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(120deg, #ffffff 50%, transparent 50%)`,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            zIndex: -1,
          }}
        />

        {/* Page Title */}
        <Box sx={{ padding: '50px 20px', textAlign: 'center', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleAnimation}
          >
            <Typography variant="h2" component="h2" align="center" sx={{ color: colors.primary[200], fontSize: { xs: '2.5rem', md: '4rem' } }}>
              Get in touch
            </Typography>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={titleAnimation}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="h6" component="h6" align="center" paragraph sx={{ color: colors.primary[200], fontSize: { xs: '1rem', md: '1.25rem' } }}>
              We’re here to help you with all your telehealth and online pharmacy needs. Get in touch with us today!
            </Typography>
          </motion.div>
        </Box>

        {/* Content */}
        <Box sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', md: 'row' },
         justifyContent: 'center', gap: 4, zIndex: 1, padding: '0 20px', flexWrap: 'wrap', alignItems: 'center',
          }}>
          <motion.div variants={cardVariantsRight}>
            <Box
              sx={{
                padding: { xs: 2, md: 4 },
                backgroundColor: colors.primary[900], // 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
                boxShadow: 3,
                backdropFilter: 'blur(10px)',
                zIndex: 1,
                width: '100%',
                maxWidth: '650px',
              }}
            >
              <ContactForm />
            </Box>
          </motion.div>
          <motion.div variants={cardVariantsSmall}>
            <Box
              sx={{
                padding: { xs: 2, md: 4 },
                backgroundColor: colors.primary[900], //'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
                boxShadow: 3,
                backdropFilter: 'blur(10px)',
                zIndex: 1,
                width: '100%',
                maxWidth: '650px',
              }}
            >
              <Typography variant="h2" gutterBottom color={colors.primary[1600]} sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Contact Information
              </Typography>
              <motion.div variants={iconAnimation} initial="hidden" animate="visible">
                <Typography variant="body1" paragraph color={colors.primary[200]}>
                  <EmailOutlinedIcon sx={{ verticalAlign: 'middle', marginRight: 1, color: colors.primary[1600] }} />
                  <strong>Email:</strong> <Link href="mailto:support@joeymed.com" color={colors.primary[200]}>support@joeymed.com</Link>
                </Typography>
              </motion.div>
              <motion.div variants={iconAnimation} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>
                <Typography variant="body1" paragraph color={colors.primary[200]}>
                  <PhoneOutlinedIcon sx={{ verticalAlign: 'middle', marginRight: 1, color: colors.primary[1600] }} />
                  <strong>Phone:</strong> <Link href="tel:+1234567890" color={colors.primary[200]}>+1 (234) 567-890</Link>
                </Typography>
              </motion.div>
              <motion.div variants={iconAnimation} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                <Typography variant="body1" paragraph color={colors.primary[200]}>
                  <LocationOnOutlinedIcon sx={{ verticalAlign: 'middle', marginRight: 1, color: colors.primary[1600] }} />
                  <strong>Address:</strong> 123 Health St, Tampa, Florida, 33602
                </Typography>
              </motion.div>
              <motion.div variants={iconAnimation} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
                <Typography variant="body1" paragraph color={colors.primary[200]}>
                  <AccessTimeOutlinedIcon sx={{ verticalAlign: 'middle', marginRight: 1, color: colors.primary[1600] }} />
                  <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                </Typography>
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        {/* Map Placeholder */}
        <motion.div variants={cardVariantsSmall}>
          <Box sx={{ marginTop: 4, padding: '0 20px', zIndex: 1 }}>
            <Box sx={{ padding: '50px 20px', textAlign: 'center', zIndex: 1 }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={titleAnimation}
              >
                <Typography variant="h3" component="h3" align="center" sx={{ color: colors.primary[200], fontSize: { xs: '2.5rem', md: '4rem' } }}>
                  How you can reach us
                </Typography>
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={titleAnimation}
                transition={{ delay: 0.2 }}
              >
                <Typography variant="h6" component="h6" align="center" paragraph sx={{ color: colors.primary[200], fontSize: { xs: '1rem', md: '1.25rem' } }}>
                  We’re here to help you with all your telehealth and online pharmacy needs. Get in touch with us today!
                </Typography>
              </motion.div>
            </Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.083658692194!2d-82.45844458456577!3d27.95057568263698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c520507be10d%3A0x1c2f9d9282d97b1d!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1622451837151!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ borderRadius: 20, boxShadow: '0px 10px 20px #cce0e7' }}
              allowFullScreen=""
              loading="lazy"
            />
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default ContactUs;
