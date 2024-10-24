import dynamic from 'next/dynamic';
import { Container, Typography, Box } from '@mui/material';
import HeartBeats from '@/components/layout/navbar/HeartBeats';

// Dynamic Imports
const GreetingComponent = dynamic(() => import('@/components/layout/servicepage/custom/GreetingComponent'));
const CardSlider = dynamic(() => import('@/components/commons/cartslider/CardSlider'), { loading: () => <HeartBeats/>});
const SectionFeature = dynamic(() => import('@/components/layout/servicepage/custom/SectionFeature'), { loading: () => <HeartBeats/>});
const MedWork = dynamic(() => import('@/components/layout/medWorkStepper/MedWork'), { loading: () => <HeartBeats/>});
const VideoRolling = dynamic(() => import('@/components/layout/videoRolling/VideoRolling'), { loading: () => <HeartBeats/>});
const Questions = dynamic(() => import('@/components/layout/frequentlyquestions/Questions'));
const InstructionComponent = dynamic(() => import('@/components/layout/instruction-component/InstructionComponent'), { loading: () => <HeartBeats/>});
// const TestimonialsSection = dynamic(() => import('@/components/layout/testimationsection/TestimonialsSection'));

// ** Data
import { stepsHomePage, productCategories, questions, cardData, imagesSexualHomePage, blogCards } from '@/utility/data';
import VideoMedWork from '@/components/commons/videoexplantion/VideoMedWork';

export default function SexualHealth() {
  const cards2 = [...productCategories['sexual-health'].pills, ...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams];

  return (
    <>
      <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
        <GreetingComponent 
          title="Confidential and Convenient Sexual Health Care at Your Fingertips" 
          description="Take control of your sexual health with personalized telehealth services from licensed medical providers." 
        />
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
          <CardSlider cards={cards2} type='product' />
        </Box>

        <Box>
          <Typography variant="p" component='p' sx={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review. Products like Viagra and Cialis are FDA-approved for treating erectile dysfunction. Your provider may also offer personalized recommendations.
          </Typography>
        </Box>

        <InstructionComponent 
          title='Explanation about Our Products '
          description='Here you can see Instructions'
          instructions={cardData.sexualHealth} 
        />

        <Box sx={{ mt: 4, background: 'white' }}>
          {/* <MedWork steps={stepsHomePage} /> 
           */}
            <VideoMedWork/>    
        </Box>
        <Box>
          <Typography variant="h2" component="h2" textAlign="start" padding={3}>
            Patient reviews
          </Typography>
          <CardSlider cards={blogCards} type="blog" />
        </Box>
        <Box>
          {/* <TestimonialsSection /> */}
        </Box>

        <Box >
          <Questions questions={questions} />
        </Box>
      </Container>
    </>
  );
}
