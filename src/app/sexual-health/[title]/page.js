import CardSlider from "@/components/commons/cartslider/CardSlider";
import Questions from "@/components/layout/frequentlyquestions/Questions";
import HowItWorks from "@/components/layout/servicepage/custom/HowItWorks";
import ProductComponent from "@/components/layout/servicepage/custom/ProductComponenet";
import { Box, Typography } from "@mui/material";

import { cardData, questions, blogCards, productCategories } from "@/utility/data";
import InstructionComponent from "@/components/layout/instruction-component/InstructionComponent";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Combine all products from the sexual_health category into a single array
  let allSexualHealthProducts = [
    ...productCategories["sexual-health"].pills,
    ...productCategories["sexual-health"].Capsules,
    ...productCategories["sexual-health"].Creams,
  ];

  return allSexualHealthProducts.map(({ referenceHandle }) => ({
    title: referenceHandle,
  }));
}

// Metadata generation function
export async function generateMetadata({ params }) {
  const { title } = params;

  // Combine all products from the sexual_health category into a single array
  let allSexualHealthProducts = [
    ...productCategories["sexual-health"].pills,
    ...productCategories["sexual-health"].Capsules,
    ...productCategories["sexual-health"].Creams,
  ];

  // Find the specific product based on the referenceHandle
  let specificProduct = allSexualHealthProducts.find(
    (p) => p.referenceHandle === title
  );

  if (!specificProduct) {
    return {
      title: "Product Not Found | Joey Med",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${specificProduct.itemName} - Sexual Health Product | Joey Med`,
    description: `${specificProduct.description}. Learn more about ${specificProduct.itemName} and how it can benefit your sexual health.`,
    canonical: `https://www.joeymed.com/sexual-health/${title}`,
    // openGraph: {
    //   title: `${specificProduct.itemName} - Joey Med`,
    //   description: specificProduct.description,
    //   url: `https://www.joeymed.com/sexual-health/${title}`,
    //   type: "product",
    //   images: [
    //     {
    //       url: specificProduct.image || "/images/default-product-image.jpg",
    //       alt: `${specificProduct.itemName} Image`,
    //     },
    //   ],
    // },
    // robots: "index, follow",
    // jsonLd: {
    //   "@context": "https://schema.org",
    //   "@type": "Product",
    //   name: specificProduct.itemName,
    //   description: specificProduct.description,
    //   image: specificProduct.image || "/images/default-product-image.jpg",
    //   brand: "Joey Med",
    //   offers: {
    //     "@type": "Offer",
    //     url: `https://www.joeymed.com/sexual-health/${title}`,
    //     priceCurrency: "USD",
    //     price: specificProduct.price || "Check on the website",
    //     availability: "https://schema.org/InStock",
    //   },
    // },
  };
}

export default function ProductsPage({ params }) {
  const { title } = params;

  // Combine all products from the sexual_health category into a single array
  let allSexualHealthProducts = [
    ...productCategories["sexual-health"].pills,
    ...productCategories["sexual-health"].Capsules,
    ...productCategories["sexual-health"].Creams,
  ];

  // Find the specific product based on the referenceHandle
  let specificProduct = allSexualHealthProducts.find(
    (p) => p.referenceHandle === title
  );
  
  if(!specificProduct) return notFound()
  return (
    <>
      <div>
        <ProductComponent
          name={specificProduct.itemName}
          description={specificProduct.description}
          images={specificProduct.images}
          questions={specificProduct.questions}
          productDescription={specificProduct.ProductDescription}
          benefit={specificProduct.Benefits}
          ingredient={specificProduct.ingredient}
          safety={specificProduct.safety}
        />

        <Box mt={2}>
          <InstructionComponent
            title="Explanation about Our Products"
            description="Here you can see Instructions"
            instructions={cardData.sexualHealth}
          />
        </Box>

        <HowItWorks />

        <Box>
          <Typography variant="h2" textAlign="start" padding={3}>
            Patient reviews
          </Typography>
          <CardSlider cards={blogCards} type="blog" />
        </Box>

        <Questions questions={questions} />
      </div>
    </>
  );
}
