// src/app/weight-loss/page.js
import GreetingComponent from '@/components/layout/servicepage/custom/GreetingComponent';
import { Container, Typography, Box } from '@mui/material';
import WeightLossComponent from '@/components/layout/servicepage/weightLoss/WeightLossComponent';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import SectionFeature from '@/components/layout/servicepage/custom/SectionFeature';
import MedWork from '@/components/layout/medWorkStepper/MedWork';
import VideoRolling from '@/components/layout/videoRolling/VideoRolling';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import InstructionCard from '@/components/commons/instructioncard/InstructionsCard';
import TestimonialsSection from '@/components/layout/testimationsection/TestimonialsSection';

// ** SEO
import Head from 'next/head';

// ** data 
import { stepsHomePage, productCategories, questions, cardData, imagesSexualHomePage } from '@/utility/data';

export default function SexualHealth() {
  const cards2 = [...productCategories['sexual-health'].vitaly,...productCategories['sexual-health'].tadalafil, ...productCategories['sexual-health'].sidenafil]
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

      <Container maxWidth="xl">
        <GreetingComponent title="Sexual Health Services at Joey Med Sexual HealthSexual Health" description="Personalized care at your fingertips" />
        <SectionFeature images={imagesSexualHomePage}/>
        <Box >
          <WeightLossComponent />
        </Box>

        <Box >
          <VideoRolling title='Sexual health and keep it off with Cialis' description='Keep it off with Cialis' src="/videos/sexualVideo.mp4"/>
          <CardSlider cards={cards2} type='product'/>
        </Box>
       
        <Box>
          <Typography variant="body2" component='p' sx={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review. Products like Viagra and Cialis are FDA-approved for treating erectile dysfunction. Your provider may also offer personalized recommendations.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, background: 'white' }}>
          <MedWork steps={stepsHomePage} /> 
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h2" component='h2' sx={{ textAlign: 'center' }}>
            Explination about Our Products 
          </Typography>
          <Typography variant="h5" component='h5' sx={{ textAlign: 'center', mt: 1 }}>
            here you can see Instruction
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            {cardData.map((card, index) => (
              <InstructionCard key={index} title={card.title} content={card.content} />
            ))}
          </Box>
        </Box>

        <Box mt={5}>
          <TestimonialsSection />
        </Box>

        <Box>
          <Questions questions={questions}/>
        </Box>
      </Container>
    </>
  );
}
