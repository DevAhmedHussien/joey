'use client';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

//** Theme part */
import { tokens } from '../theme/theme';
import { useTheme } from '@mui/material';

//** Third part Mui */
import { Typography, Box, Grid } from '@mui/material';
import { useState, useEffect } from 'react';

// ** Common Components */
import AppButton from '@/components/commons/appbutton/AppButton';
import MedWork from '@/components/layout/medWorkStepper/MedWork';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import VideoRolling from '@/components/layout/videoRolling/VideoRolling';
import InfoList from '@/components/layout/infolist/InfoList';
import AnimatedText from '@/components/commons/animatedtext/AnimatedText';
import Card from '@/components/commons/card/Card';
import TestimonialsSection from '@/components/layout/testimationsection/TestimonialsSection';
import imgWeightloss from '../../public/images/homePage/weight.png'
import imgSexual from '../../public/images/homePage/sexual.png'
import imgHairMan from '../../public/images/homePage/man.png'
import imgHairWomen from '../../public/images/homePage/women.png'
import imgProducts from '../../public/images/homePage/products.png'
import imgLogo from '../../public/images/joey.png';
// ** data 
import { stepsHomePage, productCategories,questions,  } from '@/utility/data';

// ** animation
import { motion } from "framer-motion";
import {itemVariants, cardVariantsRight, cardVariantsLeft, cardVariantsSmall} from'@/utility/animationSyles'

export default function Home() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to manage the current text
  const [currentText, setCurrentText] = useState('Weight Loss');
  const [fadeOut, setFadeOut] = useState(false);

  // Array of texts to cycle through
  const texts = [
    'Weight Loss',
    'Sexual Health',
    'Hair Growth',
    'Better Health',
    'Improved Confidence',
  ];

  const cards1 = [...productCategories['weight-loss'].pills,...productCategories['weight-loss'].injections]
  const cards2 = [...productCategories['sexual-health'].vitaly,...productCategories['sexual-health'].tadalafil, ...productCategories['sexual-health'].sidenafil]
  const cards3 = [...productCategories['hair-growth'].men,...productCategories['hair-growth'].women]

  const cards = [
    {
      title: 'Chat with a provider 24/7',
      image: '/images/chat-provider.png',
      description: 'Get real-time support from our providers anytime, anywhere.',
    },
    {
      title: 'Manage goals in one place',
      image: '/images/manage-goals.png',
      description: 'Track your progress and make adjustments easily.',
    },
    {
      title: 'Clinically proven ingredients',
      image: '/images/clinically-proven.png',
      description: 'Access treatments that are FDA-approved and proven to work.',
    },
    {
      title: 'Fast, discreet shipping',
      image: '/images/discreet-shipping.png',
      description: 'Receive your treatment quickly and privately.',
    },
    {
      title: 'Convenient online care',
      image: '/images/online-care.png',
      description: 'Experience healthcare at your fingertips.',
    },
    {
      title: 'Personalized treatment plans',
      image: '/images/treatment-plans.png',
      description: 'Get a treatment plan tailored to your needs.',
    },
  ];
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = texts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setFadeOut(false);
      }, 500); // Delay between fading out and fading in
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Head>
        <title>JoeyMed - Telehealth Services for Weight Loss, Sexual Health, Hair Growth, and More</title>
        <meta name="description" content="JoeyMed provides convenient, online telehealth services for weight loss, sexual health, hair growth, and more. Access personalized treatment plans, chat with providers, and manage your health goals from anywhere." />
        <link rel="canonical" href="https://www.joeymed.com/" />
        <meta property="og:title" content="JoeyMed - Online Telehealth Services" />
        <meta property="og:description" content="Access telehealth services for weight loss, sexual health, and hair growth with JoeyMed. Personalized care at your fingertips." />
        <meta property="og:url" content="https://www.joeymed.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/joeymed-og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JoeyMed",
              "url": "https://www.joeymed.com/",
              "logo": "https://www.joeymed.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/joeymed",
                "https://www.instagram.com/joeymed",
                "https://www.linkedin.com/company/joeymed"
              ]
            }),
          }}
        />
      </Head>
      <div maxWidth="lg" style={{ background :colors.primary[100]}}>
        <Grid container spacing={4} sx={{ p: 5 }}>
          <Grid item xs={12} md={6}>
          <motion.article
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 1 } }}
              variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
            >
              <motion.div variants={cardVariantsSmall} >
                  <Typography variant="h1" component="h1" gutterBottom color={colors.primary[200]} >
                    Welcome to 
                    <span style={{color:colors.primary[200], fontWeight:500}} className='element'> joey med  </span> 
                    
                        {/* <Image
                            src={imgLogo}
                            width={120}
                            height={65}
                            	loading="lazy"
                            alt="Joeymed logo"
                            style={{ width: '100%', transform: 'scale(1.3)', transformOrigin: 'center' }}
                        /> */}
                  </Typography>
                </motion.div>
                <motion.div variants={cardVariantsSmall}>
                  <Typography variant="h2" component="h2" gutterBottom color={colors.primary[200]}>
                    We got you
                  </Typography>
                </motion.div>
              </motion.article>
              <Box 
                sx={{ 
                  position: 'relative', 
                  overflow: 'hidden', 
                  height: '60px' 
                }}
              >
                <Typography 
                  variant="h1" 
                  component="h1" 

                  sx={{
                    mt:'10px',
                    position: 'absolute',
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                    transform: fadeOut ? 'translateY(-30px)' : 'translateY(0)',
                    opacity: fadeOut ? 0 : 1,
                    top: 0,
                    color:colors.primary[1600],
                    fontWeight:300
                  }}
                >
                  {currentText}
                </Typography>
              </Box>
            
          </Grid>
          <Grid item xs={12} md={6} display="flex" alignItems="start" justifyContent="end">
            <InfoList/>
          </Grid>
        </Grid>

        {/* Services Section */}
        <Box sx={{ p: 5 }} display={'flex'} flexWrap={'wrap'}>
          <Grid container spacing={4}  >
            <Grid item xs={12} md={4}>
              <motion.div 
                  variants={cardVariantsRight}
                  initial="hidden"
                  animate="visible"
                >
              <Card height={400} title={'Weight Loss'} src={imgWeightloss} alt={'Weight Loss'} widthImg={400} heighImg={400} size={true} href={'/form/weight-loss'} video={true}/>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
            <motion.div 
                  variants={cardVariantsSmall} 
                  initial="hidden"
                  animate="visible"
                >
              <Card height={400}title={'Sexual Health'} src={imgSexual} alt={'Sexual Health'} widthImg={200} heighImg={200} size={true} href={'/form/sexual-health'} video={true}/>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={4}>
            <motion.div 
                  variants={cardVariantsLeft} 
                  initial="hidden"
                  animate="visible"
                >
              <Card height={400} title={'Hair Growth'} src={imgProducts} alt={'Best Seller From Our Pharmacy'} widthImg={100} heighImg={100} size={true} href={'/form/hair-growth'} video={true}/>
              </motion.div>
            </Grid>
            {/* <Grid item xs={12} md={4}>
              <motion.div 
                  variants={cardVariantsSmall} 
                  initial="hidden"
                  animate="visible"
                >
                  <Card height={200} //title={'Hair Growth For Men'}
                  src={imgHairMan} alt={'Hair Growth For Men'} widthImg={100} heighImg={100} size={false} href={'/'}/>
              </motion.div>
            </Grid> */}
            {/* <Grid item xs={12} md={4}>
            <motion.div 
                  variants={cardVariantsSmall} 
                  initial="hidden"
                  animate="visible"
                >
                 <Card height={200} //title={'Hair Growth For Women'}
                  src={imgHairWomen} alt={'Hair Growth For Women'} widthImg={100} heighImg={100} size={false} href={'/'}/>
              </motion.div>
            </Grid> */}
            {/* <Grid item xs={12} md={12}>
            <motion.div 
                  variants={cardVariantsSmall} 
                  initial="hidden"
                  animate="visible"
                >
                  <Card height={300} title={'Hair Growth'}
                  src={imgProducts} alt={'Best Seller From Our Pharmacy'} widthImg={100} heighImg={100} size={false} href={'/'}/>
              </motion.div>
            </Grid> */}
          </Grid>
        </Box>

        <Box mt={5}>
          <MedWork steps={stepsHomePage}/>
        </Box>

        <Box className="weightloss">
          <VideoRolling title='Lose weight and keep it off with GLP-1s' description='Keep it off with GLP-1s' src="/videos/weightVideo.mp4"/>
          <CardSlider cards={cards1} type='product'/>
        </Box>

        <Box className="sexualHealth">
          <VideoRolling title='Sexual health and keep it off with Cialis' description='Keep it off with Cialis' src="/videos/sexualVideo.mp4"/>
          <CardSlider cards={cards2} type='product'/>
        </Box>

        <Box className="greeting">
          <VideoRolling title='Sexual health and keep it off with Cialis' description='Keep it off with Cialis' src="/videos/sexualVideo.mp4"/>
          <CardSlider cards={cards} type='appear' />
        </Box>

        <TestimonialsSection/>

        <Box className="weightloss">
          <Typography variant="h2" padding={7}>JoeyMed Online 100%</Typography>
          <Typography variant="h3" paddingLeft={7}>Health guide</Typography>
          <CardSlider cards={cards} type='blog'/>
        </Box>

        <Questions questions={questions} />
      </div>
    </>
  );
}
