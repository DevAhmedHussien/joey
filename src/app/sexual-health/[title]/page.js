import CardSlider from "@/components/commons/cartslider/CardSlider";
import InstructionCard from "@/components/commons/instructioncard/InstructionsCard";
import Questions from "@/components/layout/frequentlyquestions/Questions";
import MedWork from "@/components/layout/medWorkStepper/MedWork";
import HowItWorks from "@/components/layout/servicepage/custom/HowItWorks";
import ProductComponent from "@/components/layout/servicepage/custom/ProductComponenet";
import VideoRolling from "@/components/layout/videoRolling/VideoRolling";
import { productCategories } from "@/utility/data";
import { Box, Typography } from "@mui/material";
import Head from "next/head";

import { cardData, questions, stepsHomePage } from "@/utility/data";

const cards = [
    {
        title: 'Chat with a provider 24/7',
        image: '/images/chat-provider.png',
        description: 'Get real-time support from our providers anytime, anywhere.',
    },
    {
        title: 'Manage goals in one place',
        image: '/images/manage-goals.png',
        description: 'Track your progress and make adjustments easily.',
    },
    {
        title: 'Clinically proven ingredients',
        image: '/images/clinically-proven.png',
        description: 'Access treatments that are FDA-approved and proven to work.',
    },
    {
        title: 'Fast, discreet shipping',
        image: '/images/discreet-shipping.png',
        description: 'Receive your treatment quickly and privately.',
    },
    {
        title: 'Convenient online care',
        image: '/images/online-care.png',
        description: 'Experience healthcare at your fingertips.',
    },
    {
        title: 'Personalized treatment plans',
        image: '/images/treatment-plans.png',
        description: 'Get a treatment plan tailored to your needs.',
    },
];


export default function ProductsPage(props) {

  // Combine all products from the sexual_health category into a single array
  let allSexualHealthProducts = [
    ...productCategories['sexual-health'].pills,
    ...productCategories['sexual-health'].Capsules,
    ...productCategories['sexual-health'].Creams
  ];

  // Filter the specific product based on the referenceHandle
  let specificProduct = allSexualHealthProducts.filter(
    (p) => props.params.title === p.referenceHandle
  );

  return (
    <>
      <Head>
        <title>{specificProduct[0]?.itemName} - Sexual Health Product | Joey Med</title>
        <meta name="description" content={`${specificProduct[0]?.description} Find out more about ${specificProduct[0]?.itemName} and how it can benefit your sexual health.`} />
        <link rel="canonical" href={`https://www.joeymed.com/sexual-health/${props.params.title}`} />
        <meta property="og:title" content={`${specificProduct[0]?.itemName} - Joey Med`} />
        <meta property="og:description" content={`${specificProduct[0]?.description}. Learn more about ${specificProduct[0]?.itemName} and its benefits.`} />
        <meta property="og:url" content={`https://www.joeymed.com/sexual-health/${props.params.title}`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={specificProduct[0]?.image || "/images/default-product-image.jpg"} />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": specificProduct[0]?.itemName,
              "description": specificProduct[0]?.description,
              "image": specificProduct[0]?.image || "/images/default-product-image.jpg",
              "brand": "Joey Med",
              "offers": {
                "@type": "Offer",
                "url": `https://www.joeymed.com/sexual-health/${props.params.title}`,
                "priceCurrency": "USD",
                "price": specificProduct[0]?.price || "Check on the website",
                "availability": "https://schema.org/InStock",
              }
            }),
          }}
        />
      </Head>
      <div>
        <ProductComponent 
          name={specificProduct[0]?.itemName} 
          description={specificProduct[0]?.description} 
          images={specificProduct[0]?.images}
          questions={specificProduct[0]?.questions}
          productDescription={specificProduct[0]?.ProductDescription}
          benefit={specificProduct[0]?.Benefits}
          ingredient={specificProduct[0]?.ingredient}
          safety={specificProduct[0]?.safety}
        />
        <Box mt={15}>
          <Typography variant='h3' sx={{textAlign:'center'}} >
            Ro Body Program members taking branded GLP-1 medications were paid for their testimonials.
          </Typography>
          <Box sx={{mt:2, display:'flex', justifyContent:'center', alignItems:'center', gap:1, flexWrap:'wrap'}}>
            {cardData.sexualHealth.map((card, index) => (
              <InstructionCard key={index} title={card.title} content={card.content} />
            ))}
          </Box>
        </Box>
   
        <HowItWorks />

        <Box>
          {/* <VideoRolling title='Sexual health and keeping it with Cialis' description='Explore the benefits of using Cialis for sexual health.' /> */}
          <Typography variant="h2" textAlign='start' padding={3}>Patient reviews</Typography>
          <CardSlider cards={cards} type='blog'/>
        </Box>
        
        <MedWork steps={stepsHomePage} /> 

        <Questions questions={questions}/>
      </div>
    </>
  );
}
