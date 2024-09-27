
import Head from 'next/head';

//** Theme part */
import { tokens } from '../theme/theme';
import { useTheme } from '@mui/material';

//** Third part Mui */
import { Typography, Box, Grid } from '@mui/material';
// import { useState, useEffect } from 'react';

// ** Common Components */
import MedWork from '@/components/layout/medWorkStepper/MedWork';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import VideoRolling from '@/components/layout/videoRolling/VideoRolling';
import TestimonialsSection from '@/components/layout/testimationsection/TestimonialsSection';

// ** data 
import { stepsHomePage, productCategories,questions } from '@/utility/data';

// ** animation
import { cardVariantsRight, cardVariantsLeft, cardVariantsSmall} from'@/utility/animationSyles'
import HeroSection from './HeroSection';

import dynamic from 'next/dynamic';
import ServicesSection from './ServicesSection';

// const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), { ssr: false });

export default function Home() {

  const cards1 = [...productCategories['weight-loss'].pills,...productCategories['weight-loss'].injections]
  const cards2 = [...productCategories['sexual-health'].pills,...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams]
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

  const homeCards=[{
    animate:cardVariantsRight,
    title:'Weight Loss',
    src:'/videos/Bottle.mp4',
    alt:'Weight Loss',
    size:true,
    video:true,
    href:'/form/weight-loss'

  },{
    animate:cardVariantsSmall,
    title:'Sexual health',
    src:'/videos/Bottle.mp4',
    alt:'Sexual health',
    size:true,
    video:true,
    href:'/form/weight-loss'

  },{
    animate:cardVariantsLeft,
    title:'Hair growth',
    src:'/videos/Bottle.mp4',
    alt:'Hair growth',
    size:true,
    video:true,
    href:'/form/weight-loss'
  }]
  


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
      <div maxWidth="lg" 
      // style={{ background :colors.primary[100]}}
      >
        <HeroSection/>
       
       {/* Services Section */}
        <ServicesSection  homeCards={homeCards}/>

        <Box className="weightloss">
          <VideoRolling title='Lose weight and keep it off with GLP-1s' description='Keep it off with GLP-1s' src="/videos/weightVideo.mp4" alt='Keep it off with GLP-1s'/>
          <CardSlider cards={cards1} type='product'/>
        </Box>

        <Box className="sexualHealth">
          <VideoRolling title='Sexual health and keep it off with Cialis' description='Keep it off with Cialis' src="/videos/sexualVideo.mp4" alt='Keep it off with GLP-1s'/>
          <CardSlider cards={cards2} type='product'/>
        </Box>

        <Box className="Hair Growth">
          <VideoRolling title='Sexual health and keep it off with Cialis' description='Keep it off with Cialis' src="/videos/ss.mp4" alt='Keep it off with GLP-1s's/>
          <CardSlider cards={cards3} type='product' />
        </Box>
        
        <Box mt={5}>
          <MedWork steps={stepsHomePage}/>
        </Box>

        <TestimonialsSection/>

        <Box sx={{p:3}}>
          <Typography variant="h1" paddingTop={5}>joey med Online 100%</Typography>
          <Typography variant="h2"paddingTop={3} >Health guide</Typography>
          <CardSlider cards={cards} type='blog'/>
        </Box>
        

        <Questions questions={questions} />
      </div>
    </>
  );
}
