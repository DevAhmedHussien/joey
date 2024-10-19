import dynamic from 'next/dynamic';
import { Container, Typography, Box } from '@mui/material';
import Head from 'next/head';
import HeartBeats from '@/components/layout/navbar/HeartBeats';

// Dynamically imported components
const GreetingComponent = dynamic(() => import('@/components/layout/servicepage/custom/GreetingComponent'), { loading: () => <HeartBeats/>});
const WeightLossComponent = dynamic(() => import('@/components/layout/servicepage/weightLoss/WeightLossComponent'), { loading: () => <HeartBeats/>});
const CardSlider = dynamic(() => import('@/components/commons/cartslider/CardSlider'), { loading: () => <HeartBeats/>});
const SectionFeature = dynamic(() => import('@/components/layout/servicepage/custom/SectionFeature'), { loading: () => <HeartBeats/>});
const MedWork = dynamic(() => import('@/components/layout/medWorkStepper/MedWork'), { loading: () => <HeartBeats/>});
const VideoRolling = dynamic(() => import('@/components/layout/videoRolling/VideoRolling'), { loading: () => <HeartBeats/>});
const Questions = dynamic(() => import('@/components/layout/frequentlyquestions/Questions'), { loading: () => <HeartBeats/>});
const TestimonialsSection = dynamic(() => import('@/components/layout/testimationsection/TestimonialsSection'), { loading: () => <HeartBeats/>});
const InstructionComponent = dynamic(() => import('@/components/layout/instruction-component/InstructionComponent'), { loading: () => <HeartBeats/>});

// ** Data
import { stepsHomePage, productCategories, questions, imagesSexualHomePage, cardData } from '@/utility/data';

export const metadata = {
  title: "Weight loss",
  description: "Explore Joey Med's weight loss services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers."
};

export default function weightLoss() {
  const cards2 = [...productCategories['weight-loss'].pills, ...productCategories['weight-loss'].injections];

  return (
    <>
      <Head>
        <title>Weight Loss - Joey Med | Personalized Online Treatment</title>
        <meta name="description" content="Explore Joey Med's weight loss services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers." />
        <link rel="canonical" href="https://www.joeymed.com/weight-loss" />
        <meta property="og:title" content="Weight Loss - Joey Med" />
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
              "name": "Weight Loss Services",
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

      <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
        <GreetingComponent 
          title="Achieve Lasting Weight Loss with Proven Treatments" 
          description="Start your journey toward a healthier you with expert guidance and tailored weight loss programs — all from the comfort of your home." 
        />
        <SectionFeature images={imagesSexualHomePage} />

        <Box>
          <WeightLossComponent />
        </Box>

        <Box>
          <VideoRolling 
            title='Weight Loss and Keep it Off' 
            description='Keep it off with GLP-1 treatments' 
            src="/videos/weightVideo.mp4" 
          />
          <CardSlider cards={cards2} type='product' />
        </Box>
       
        <Box>
          <Typography variant="body2" component='p' sx={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review. Products like Viagra and Cialis are FDA-approved for treating erectile dysfunction. Your provider may also offer personalized recommendations.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, background: 'white' }}>
          <MedWork steps={stepsHomePage} /> 
        </Box>

        <InstructionComponent 
          title='Explanation about Our Products'
          description='Here you can see Instructions'
          instructions={cardData.weightLoss}
        />

        <Box mt={5}>
          <TestimonialsSection />
        </Box>

        <Box>
          <Questions questions={questions} />
        </Box>
      </Container>
    </>
  );
}
