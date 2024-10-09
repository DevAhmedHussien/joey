import GreetingComponent from '@/components/layout/servicepage/custom/GreetingComponent';
import { Container, Typography, Box } from '@mui/material';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import SectionFeature from '@/components/layout/servicepage/custom/SectionFeature';
import MedWork from '@/components/layout/medWorkStepper/MedWork';
import VideoRolling from '@/components/layout/videoRolling/VideoRolling';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import TestimonialsSection from '@/components/layout/testimationsection/TestimonialsSection';

// ** SEO
import Head from 'next/head';

// ** data 
import { stepsHomePage, productCategories, questions, cardData, imagesSexualHomePage } from '@/utility/data';
import InstructionComponent from '@/components/layout/instruction-component/InstructionComponent';

export default function SexualHealth() {
  const cards2 = [...productCategories['sexual-health'].pills,...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams]
  return (
    <>
      <Head>
        <title>Sexual Health - Joey Med | Personalized Online Treatment</title>
        <meta name="description" content="Explore Joey Med's sexual health services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers." />
        <link rel="canonical" href="https://www.joeymed.com/sexual-health" />
        <meta property="og:title" content="Sexual Health - Joey Med" />
        <meta property="og:description" content="Joey Med offers online telehealth services for sexual health, including personalized treatment plans and discreet shipping." />
        <meta property="og:url" content="https://www.joeymed.com/sexual-health" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/sexual-health-og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="sexual health, online treatment, ED treatment, Joey Med, personalized healthcare, telehealth" />
        <meta name="author" content="Joey Med" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Sexual Health Services",
              "provider": {
                "@type": "Organization",
                "name": "Joey Med",
                "url": "https://www.joeymed.com/",
                "logo": "https://www.joeymed.com/logo.png",
              },
              "description": "Joey Med offers personalized telehealth services for sexual health, including 24/7 provider support, clinically proven treatments, and discreet shipping.",
              "url": "https://www.joeymed.com/sexual-health",
              "image": "https://www.joeymed.com/images/sexual-health-og-image.jpg",
              "areaServed": "US",
            }),
          }}
        />
      </Head>

      <Container maxWidth="xl" sx={{padding:' 0 !important'}}>
        <GreetingComponent 
          title="Confidential and Convenient Sexual Health Care at Your Fingertips" 
          description="Take control of your sexual health with personalized telehealth services from licensed medical providers." />
        <SectionFeature images={imagesSexualHomePage} />
        <Box margin='20px 0 20px'>
          {/* <WeightLossComponent /> */}
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

        <Box>
          <Typography variant="body2" component='p' sx={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review. Products like Viagra and Cialis are FDA-approved for treating erectile dysfunction. Your provider may also offer personalized recommendations.
          </Typography>
        </Box>

        <InstructionComponent 
            title='Explanation about Our Products '
            description='Here you can see Instructions'
            instructions={cardData.sexualHealth}/>
        
        <Box sx={{ mt: 4, background: 'white' }}>
          <MedWork steps={stepsHomePage} /> 
        </Box>

        <Box mt={5}>
          {/* <TestimonialsSection /> */}
        </Box>

        <Box>
          <Questions questions={questions} />
        </Box>
      </Container>
    </>
  );
}
