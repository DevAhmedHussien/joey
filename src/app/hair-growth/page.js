import dynamic from 'next/dynamic';
import { Container, Typography, Box } from '@mui/material';
import Head from 'next/head';

// ** data 
import { stepsHomePage, productCategories, questions, imagesSexualHomePage, cardData } from '@/utility/data';
import HeartBeats from '@/components/layout/navbar/HeartBeats';

// Dynamic Imports for non-critical components
const GreetingComponent = dynamic(() => import('@/components/layout/servicepage/custom/GreetingComponent'), { loading: () => <HeartBeats/> });
const CardSlider = dynamic(() => import('@/components/commons/cartslider/CardSlider'), { loading: () => <HeartBeats/> });
const SectionFeature = dynamic(() => import('@/components/layout/servicepage/custom/SectionFeature'), { loading: () => <HeartBeats/> });
const MedWork = dynamic(() => import('@/components/layout/medWorkStepper/MedWork'), { loading: () => <HeartBeats/> });
const VideoRolling = dynamic(() => import('@/components/layout/videoRolling/VideoRolling'), { loading: () => <HeartBeats/> });
const Questions = dynamic(() => import('@/components/layout/frequentlyquestions/Questions'), { loading: () => <HeartBeats/> });
const InstructionCard = dynamic(() => import('@/components/commons/instructioncard/InstructionsCard'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/layout/testimationsection/TestimonialsSection'), { ssr: false });


export const metadata = {
  title: "Hair growth",
  description: "Explore Joey Med's hair growth services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers."
};

const cards2 = [...productCategories['hair-growth'].men, ...productCategories['hair-growth'].women];

export default function HairGrowth() {
  return (
    <>
      <Head>
        <title>Hair Growth - Joey Med | Personalized Online Treatment</title>
        <meta name="description" content="Explore Joey Med's hair growth services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers." />
        <link rel="canonical" href="https://www.joeymed.com/hair-growth" />
        <meta property="og:title" content="Hair Growth - Joey Med" />
        <meta property="og:description" content="Joey Med offers online telehealth services for hair growth, including personalized treatment plans and discreet shipping." />
        <meta property="og:url" content="https://www.joeymed.com/hair-growth" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hair-growth-og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Hair Growth Services",
              "provider": {
                "@type": "Organization",
                "name": "Joey Med",
                "url": "https://www.joeymed.com/",
                "logo": "https://www.joeymed.com/logo.png",
              },
              "description": "Joey Med offers personalized telehealth services for hair growth, including 24/7 provider support, clinically proven treatments, and discreet shipping.",
              "url": "https://www.joeymed.com/hair-growth",
              "image": "https://www.joeymed.com/images/hair-growth-og-image.jpg",
              "areaServed": "US",
            }),
          }}
        />
      </Head>

      <Container maxWidth="xl" sx={{ padding: '0 !important' }}>
        <GreetingComponent 
          title="Restore and Revitalize Your Hair with Effective Treatments" 
          description="Experience the power of science-backed treatments designed to combat hair loss and promote fuller, healthier hair." 
        />
        <SectionFeature images={imagesSexualHomePage} />

        <Box>
          <VideoRolling 
            title="Enhance Your Hair Health" 
            description="Learn more about our proven hair growth treatments." 
            src="/videos/weightVideo.mp4" 
          />
          <CardSlider cards={cards2} type="product" />
        </Box>

        <Box>
          <Typography variant="body2" component="p" sx={{ marginTop: '40px', textAlign: 'center', color: 'gray' }}>
            As an alternative to FDA-approved branded products, where appropriate, a provider may prescribe a compounded drug, which is prepared by a state-licensed sterile compounding pharmacy partner. Although compounded drugs are permitted to be prescribed under federal law, they are not FDA-approved and do not undergo safety, effectiveness, or manufacturing review.
          </Typography>
        </Box>

        <Box sx={{ mt: 4, background: 'white' }}>
          <MedWork steps={stepsHomePage} />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
            Explanation about Our Products
          </Typography>
          <Typography variant="h5" component="h5" sx={{ textAlign: 'center', mt: 1 }}>
            Here you can see instructions
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
            {cardData.hairGrowth.map((card, index) => (
              <InstructionCard key={index} title={card.title} content={card.content} />
            ))}
          </Box>
        </Box>

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
