import GreetingComponent from '@/components/layout/servicepage/custom/GreetingComponent';
import { Container, Typography, Box } from '@mui/material';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import SectionFeature from '@/components/layout/servicepage/custom/SectionFeature';
import MedWork from '@/components/layout/medWorkStepper/MedWork';
import VideoRolling from '@/components/layout/videoRolling/VideoRolling';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import TestimonialsSection from '@/components/layout/testimationsection/TestimonialsSection';


// ** data 
import { stepsHomePage, productCategories, questions, cardData, imagesSexualHomePage } from '@/utility/data';
import InstructionComponent from '@/components/layout/instruction-component/InstructionComponent';

export default function SexualHealth() {
  const cards2 = [...productCategories['sexual-health'].pills,...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams]
  return (
    <>
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

        <Box>
          {/* <TestimonialsSection /> */}
        </Box>

        <Box>
          <Questions questions={questions} />
        </Box>
      </Container>
    </>
  );
}
