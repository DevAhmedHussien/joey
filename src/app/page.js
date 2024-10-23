import dynamic from 'next/dynamic';
import { Typography, Box } from '@mui/material';

// ** Data
import { productCategories, questions, homeCards, blogCards } from '@/utility/data';
import HeartBeats from '@/components/layout/navbar/HeartBeats';

// Dynamically import components
const HeroSection = dynamic(() => import('./HeroSection'),
 { loading: () => <HeartBeats/>}
);
const VideoRolling = dynamic(() => import('@/components/layout/videoRolling/VideoRolling'),
 { loading: () => <HeartBeats/>}
);
const CardSlider = dynamic(() => import('@/components/commons/cartslider/CardSlider'),
 { loading: () => <HeartBeats/>}
);
const TestimonialsSection = dynamic(() => import('@/components/layout/testimationsection/TestimonialsSection'));
const MeetTheTeam = dynamic(() => import('@/components/commons/meetteam/MeetTheTeam'),
 { loading: () => <HeartBeats/>}
);
const WhyChooseUs = dynamic(() => import('@/components/commons/whychooseus/WhyChooseUs'),
 { loading: () => <HeartBeats/>}
);
const Questions = dynamic(() => import('@/components/layout/frequentlyquestions/Questions'),
 { loading: () => <HeartBeats/>}
);
const ServicesSection = dynamic(() => import('./ServicesSection'), { loading: () => <HeartBeats/>});


export default function Home() {
  
  const cards1 = [...productCategories['weight-loss'].pills, ...productCategories['weight-loss'].injections];
  const cards2 = [...productCategories['sexual-health'].pills, ...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams];
  const cards3 = [...productCategories['hair-growth'].men, ...productCategories['hair-growth'].women];

  return (
    <>
      <div >
        {/* Hero Section */}
        <HeroSection/>

        {/* Services Section */}
        <ServicesSection homeCards={homeCards} />

        {/* Weight Loss Section */}
        <Box className="weightloss">
          <VideoRolling 
            title='Take control of your weight loss journey' 
            description='with the help of GLP-1 medications' 
            src="/videos/weightVideo.mp4" 
            alt='Keep it off with GLP-1s'
            additionalInformation='Discover how our platform can help you achieve your health goals with personalized weight loss plans, tailored specifically to your needs. We provide expert guidance, ongoing support, and resources designed to ensure lasting results. Start your journey towards a healthier you today!'
          />
          <CardSlider cards={cards1} type='product' />
        </Box>

        {/* Sexual Health Section */}
        <Box className="sexualHealth">
          <VideoRolling 
            title='Enhance your vitality and boost your confidence' 
            description='with our range of sexual health treatments' 
            src="/videos/sexualVideo.mp4" 
            alt='Keep it off with GLP-1s'
            additionalInformation="Explore how our platform can support your sexual health goals. With personalized treatments and expert advice, we're committed to helping you achieve lasting improvements. Enjoy greater confidence, vitality, and well-being with our comprehensive solutions."
          />
          <CardSlider cards={cards2} type='product' />
        </Box>

        {/* Hair Growth Section */}
        <Box className="Hair Growth">
          <VideoRolling 
            title='Say goodbye to thinning and hello to vibrant' 
            description='with our powerful hair growth solutions.' 
            src="/videos/ss.mp4" 
            alt='Keep it off'
            additionalInformation="Learn more about how our personalized hair growth treatments can help you achieve lasting results. With expert guidance and customized plans, we’re here to support your journey to healthier, fuller hair. Discover the confidence that comes with a revitalized look!"
          />
          <CardSlider cards={cards3} type='product' />
        </Box>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Meet the Team */}
        <MeetTheTeam />

        {/* Blog Cards Section */}
        <Box sx={{}}>
          <Typography variant="h2" p={3}>Health Guide</Typography>
          <CardSlider cards={blogCards} type='blog' />
        </Box>

        {/* FAQ Section */}
        <Questions questions={questions} />
      </div>
    </>
  );
}
