
import Head from 'next/head';

//** Third part Mui */
import { Typography, Box, Grid } from '@mui/material';

// ** Common Components */
import MedWork from '@/components/layout/medWorkStepper/MedWork';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import VideoRolling from '@/components/layout/videoRolling/VideoRolling';
import TestimonialsSection from '@/components/layout/testimationsection/TestimonialsSection';
import ServicesSection from './ServicesSection';

// ** data 
import { stepsHomePage, productCategories,questions, homeCards, blogCards } from '@/utility/data';

// ** animation
import HeroSection from './HeroSection';
import MeetTheTeam from '@/components/commons/meetteam/MeetTheTeam';
import WhyChooseUs from '@/components/commons/whychooseus/WhyChooseUs';

export default function Home() {

  const cards1 = [...productCategories['weight-loss'].pills,...productCategories['weight-loss'].injections]
  const cards2 = [...productCategories['sexual-health'].pills,...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams]
  const cards3 = [...productCategories['hair-growth'].men,...productCategories['hair-growth'].women]

  return (
    <>
      <Head>
        <title>joey med - Telehealth Services for Weight Loss, Sexual Health, Hair Growth, and More</title>
        <meta name="description" content="JoeyMed provides convenient, online telehealth services for weight loss, sexual health, hair growth, and more. Access personalized treatment plans, chat with providers, and manage your health goals from anywhere." />
        <link rel="canonical" href="https://www.joeymed.com/" />
        <meta property="og:title" content="JoeyMed - Online Telehealth Services" />
        <meta property="og:description" content="Access telehealth services for weight loss, sexual health, and hair growth with JoeyMed. Personalized care at your fingertips." />
        <meta property="og:url" content="https://www.joeymed.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/joeymed-og-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
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
      <div maxWidth="lg"  >
        <HeroSection/>
       
       {/* Services Section */}
        <ServicesSection  homeCards={homeCards}/>

        <Box className="weightloss">
          <VideoRolling 
            title='Take control of your weight loss journey' 
            description='with the help of GLP-1 medications' 
            src="/videos/weightVideo.mp4" 
            alt='Keep it off with GLP-1s'
           additionalInformation='Discover how our platform can help you achieve your health goals with personalized weight loss plans, tailored specifically to your needs. We provide expert guidance, ongoing support, and resources designed to ensure lasting results. Start your journey towards a healthier you today!'
          />
          <CardSlider cards={cards1} type='product'/>
        </Box>

        <Box className="sexualHealth">
          <VideoRolling 
          title='Enhance your vitality and boost your confidence ' 
          description='with our range of sexual health treatments' 
          src="/videos/sexualVideo.mp4" 
          alt='Keep it off with GLP-1s'
          additionalInformation="Explore how our platform can support your sexual health goals. With personalized treatments and expert advice, we're committed to helping you achieve lasting improvements. Enjoy greater confidence, vitality, and well-being with our comprehensive solutions."
          />
          <CardSlider cards={cards2} type='product'/>
        </Box>

        <Box className="Hair Growth">
          <VideoRolling 
          title='Say goodbye to thinning and hello to vibrant' 
          description='with our powerful hair growth solutions.' 
          src="/videos/ss.mp4" 
          alt='Keep it off '
          additionalInformation="Learn more about how our personalized hair growth treatments can help you achieve lasting results. With expert guidance and customized plans, we’re here to support your journey to healthier, fuller hair. Discover the confidence that comes with a revitalized look!"
          />
          <CardSlider cards={cards3} type='product' />
        </Box>
        <WhyChooseUs/>
        <TestimonialsSection/>
        
        <Box mt={5}>
          <MedWork steps={stepsHomePage}/>
        </Box>
        <MeetTheTeam/>
        
        
        
        <Box sx={{p:3}}>
          {/* <Typography variant="h1" paddingTop={5}>joey med Online 100%</Typography> */}
          <Typography variant="h2"paddingTop={3} >Health guide</Typography>
          <CardSlider cards={blogCards} type='blog'/>
        </Box>

        <Questions questions={questions} />
      </div>
    </>
  );
}
