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
      <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
        <GreetingComponent 
          title="Achieve Lasting Weight Loss with Proven Treatments" 
          description="Start your journey toward a healthier you with expert guidance and tailored weight loss programs — all from the comfort of your home." 
        />
        <SectionFeature images={imagesSexualHomePage} />

        <Box className="weightloss">
          <VideoRolling 
            title='Take control of your weight loss journey' 
            description='with the help of GLP-1 medications' 
            src="/videos/weightVideo.mp4" 
            alt='Keep it off with GLP-1s'
            additionalInformation='Discover how our platform can help you achieve your health goals with personalized weight loss plans, tailored specifically to your needs. We provide expert guidance, ongoing support, and resources designed to ensure lasting results. Start your journey towards a healthier you today!'
          />
          <CardSlider cards={cards2} type='product' />
        </Box>
        <Box>
          <WeightLossComponent />
        </Box>
        <Box>
          <Typography variant="p" component='p' sx={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
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
