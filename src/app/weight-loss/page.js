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

import Head from 'next/head';

// ** data 
import { stepsHomePage, productCategories, questions } from '@/utility/data';

const cardData = [
  {
    title: 'Which GLP-1 is right for you?',
    content: [
      'There are a number of GLP-1 medications on the market, but they all work by slowing down gastric emptying, making you feel full faster and longer.',
      'Selecting a GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
    ],
  },
  {
    title: 'How GLP-1 Medications Work',
    content: [
      'GLP-1 medications mimic the effects of a naturally occurring hormone that slows down how quickly your stomach empties food.',
      'This can help you feel full sooner and longer after eating, which can lead to weight loss.',
      'These medications are usually taken as a once-weekly injection. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      ' help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'GLP-1 is the best fit for you.'
    ],
  },
  {
    title: 'Benefits of GLP-1 Medications',
    content: [
      'GLP-1 medications have been shown to help people lose weight and improve blood sugar levels.',
      'They can also reduce the risk of heart attack and stroke in people with type 2 diabetes.',
      'Your provider will work with you to determine the best medication and dosage for your needs. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you. GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
      'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you.'
    ],
  }
];
const images = [
  { src: "/images/homePage/man.png", alt: "Image 1" },
  { src: "/images/homePage/women.png", alt: "Image 2" },
  { src: "/images/homePage/products.png", alt: "Image 3" }
];
export default function weightLoss() {
  const cards2 = [...productCategories['weight-loss'].pills,...productCategories['weight-loss'].injections]
  return (
    <>
      <Head>
        <title>weight loss - Joey Med | Personalized Online Treatment</title>
        <meta name="description" content="Explore Joey Med's weight loss services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers." />
        <link rel="canonical" href="https://www.joeymed.com/weight-loss" />
        <meta property="og:title" content="weight loss - Joey Med" />
        <meta property="og:description" content="Joey Med offers online telehealth services for weight loss, including personalized treatment plans and discreet shipping." />
        <meta property="og:url" content="https://www.joeymed.com/weight-loss" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/weight-loss-og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "weight loss Services",
              "provider": {
                "@type": "Organization",
                "name": "Joey Med",
                "url": "https://www.joeymed.com/",
                "logo": "https://www.joeymed.com/logo.png",
              },
              "description": "Joey Med offers personalized telehealth services for weight loss, including 24/7 provider support, clinically proven treatments, and discreet shipping.",
              "url": "https://www.joeymed.com/weight-loss",
              "image": "https://www.joeymed.com/images/weight-loss-og-image.jpg",
              "areaServed": "US",
            }),
          }}
        />
      </Head>

      <Container maxWidth="xl">
        <GreetingComponent title="weigh loss Services at Joey Medweigh loss weigh loss" description="weigh loss  weigh loss at your fingertips" />
        <SectionFeature images={images}/>

        <Box >
          <WeightLossComponent />
        </Box>

        <Box  >
          <VideoRolling title='weigh lossand keep it off with weigh loss' description='Keep it off with GLp1' src="/videos/weightVideo.mp4"/>
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
