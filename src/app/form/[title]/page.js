// import CardSlider from "@/components/commons/cartslider/CardSlider";
// import InstructionCard from "@/components/commons/instructioncard/InstructionsCard";
// import Questions from "@/components/layout/frequentlyquestions/Questions";
// import MedWork from "@/components/layout/medWorkStepper/MedWork";
// import HowItWorks from "@/components/layout/servicepage/custom/HowItWorks";
// import ProductComponent from "@/components/layout/servicepage/custom/ProductComponenet";
// import VideoRolling from "@/components/layout/videoRolling/VideoRolling";
// import { productCategories } from "@/utility/data";
// import { Box, Typography } from "@mui/material";
// import Head from "next/head";

// const cards = [
//     {
//         title: 'Chat with a provider 24/7',
//         image: '/images/chat-provider.png',
//         description: 'Get real-time support from our providers anytime, anywhere.',
//     },
//     {
//         title: 'Manage goals in one place',
//         image: '/images/manage-goals.png',
//         description: 'Track your progress and make adjustments easily.',
//     },
//     {
//         title: 'Clinically proven ingredients',
//         image: '/images/clinically-proven.png',
//         description: 'Access treatments that are FDA-approved and proven to work.',
//     },
//     {
//         title: 'Fast, discreet shipping',
//         image: '/images/discreet-shipping.png',
//         description: 'Receive your treatment quickly and privately.',
//     },
//     {
//         title: 'Convenient online care',
//         image: '/images/online-care.png',
//         description: 'Experience healthcare at your fingertips.',
//     },
//     {
//         title: 'Personalized treatment plans',
//         image: '/images/treatment-plans.png',
//         description: 'Get a treatment plan tailored to your needs.',
//     },
// ];

// const cardData = [
//     {
//       title: 'Which GLP-1 is right for you?',
//       content: [
//         'There are a number of GLP-1 medications on the market, but they all work by slowing down gastric emptying, making you feel full faster and longer.',
//         'Selecting a GLP-1 that’s right for you depends on a few factors, including your health history and insurance coverage (if you’re using insurance).',
//         'If you qualify for the Body Program, your provider will help determine which GLP-1 is the best fit for you.'
//       ],
//     },
//     {
//       title: 'How GLP-1 Medications Work',
//       content: [
//         'GLP-1 medications mimic the effects of a naturally occurring hormone that slows down how quickly your stomach empties food.',
//         'This can help you feel full sooner and longer after eating, which can lead to weight loss.',
//         'These medications are usually taken as a once-weekly injection.'
//       ],
//     },
//     {
//       title: 'Benefits of GLP-1 Medications',
//       content: [
//         'GLP-1 medications have been shown to help people lose weight and improve blood sugar levels.',
//         'They can also reduce the risk of heart attack and stroke in people with type 2 diabetes.',
//         'Your provider will work with you to determine the best medication and dosage for your needs.'
//       ],
//     }
// ];

// export default function ProductsPage(props) {

//   // Combine all products from the sexual_health category into a single array
//   let allSexualHealthProducts = [
//     ...productCategories['hair-growth'].men,
//     ...productCategories['hair-growth'].women,
//   ];

//   // Filter the specific product based on the referenceHandle
//   let specificProduct = allSexualHealthProducts.filter(
//     (p) => props.params.title === p.referenceHandle
//   );

//   return (
//     <>
//       <Head>
//         <title>{specificProduct[0]?.itemName} - hair-growth Product | Joey Med</title>
//         <meta name="description" content={`${specificProduct[0]?.description} Find out more about ${specificProduct[0]?.itemName} and how it can benefit your hair-growth.`} />
//         <link rel="canonical" href={`https://www.joeymed.com/hair-growth/${props.params.title}`} />
//         <meta property="og:title" content={`${specificProduct[0]?.itemName} - Joey Med`} />
//         <meta property="og:description" content={`${specificProduct[0]?.description}. Learn more about ${specificProduct[0]?.itemName} and its benefits.`} />
//         <meta property="og:url" content={`https://www.joeymed.com/sexual-health/${props.params.title}`} />
//         <meta property="og:type" content="product" />
//         <meta property="og:image" content={specificProduct[0]?.image || "/images/default-product-image.jpg"} />
//         <meta name="robots" content="index, follow" />
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Product",
//               "name": specificProduct[0]?.itemName,
//               "description": specificProduct[0]?.description,
//               "image": specificProduct[0]?.image || "/images/default-product-image.jpg",
//               "brand": "Joey Med",
//               "offers": {
//                 "@type": "Offer",
//                 "url": `https://www.joeymed.com/hair-growth/${props.params.title}`,
//                 "priceCurrency": "USD",
//                 "price": specificProduct[0]?.price || "Check on the website",
//                 "availability": "https://schema.org/InStock",
//               }
//             }),
//           }}
//         />
//       </Head>

//       <div>
//         <ProductComponent 
//             name={specificProduct[0]?.itemName} 
//             description={specificProduct[0]?.description} 
//             images={specificProduct[0]?.images}
//             questions={specificProduct[0]?.questions}
//             productDescription={specificProduct[0]?.ProductDescription}
//             benefit={specificProduct[0]?.Benefits}
//         />

//         <Box mt={6}>
//           <Typography variant='h3' sx={{textAlign:'center',fontWeight:'500'}} >
//             Ro Body Program members taking branded GLP-1 medications were paid for their testimonials.
//           </Typography>
//           <Box sx={{mt:2, display:'flex', justifyContent:'center', alignItems:'center', gap:1, flexWrap:'wrap'}}>
//             {cardData.map((card, index) => (
//               <InstructionCard key={index} title={card.title} content={card.content} />
//             ))}
//           </Box>
//         </Box>
   
//         <HowItWorks />

//         <Box>
//           <VideoRolling title='Sexual health and keeping it with Cialis' description='Explore the benefits of using Cialis for sexual health.' />
//           <Typography variant="h2" textAlign='start' padding={3}>Patient reviews</Typography>
//           <CardSlider cards={cards} type='blog'/>
//         </Box>
        
//         <MedWork steps={[]} /> 
//         <Questions/>
//       </div>
//     </>
//   );
// }


'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

export default function Form() {
  const [loading, setLoading]=useState(false)
  useEffect(() => {
  setLoading(true)
    // You can load external JotForm scripts here if necessary
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);
    setLoading(false)

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Connect to Doctors
      </Typography>
      <iframe
        id="JotFormIFrame-242244243723147"
        title="Joey Med's Hair Growth Consultation"
        allowTransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/242244243723147"
        frameBorder="0"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
        scrolling="no"
      ></iframe>
    </Container>
  );
}
