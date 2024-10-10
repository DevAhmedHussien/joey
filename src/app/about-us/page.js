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
import AboutPage from '@/components/layout/about-page/AboutPage';


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
      <AboutPage/>
        <Questions questions={questions} />

    </>
  );
};

export default AboutUs;
