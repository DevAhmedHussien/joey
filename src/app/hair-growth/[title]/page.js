import CardSlider from "@/components/commons/cartslider/CardSlider";
import Questions from "@/components/layout/frequentlyquestions/Questions";
import InstructionComponent from "@/components/layout/instruction-component/InstructionComponent";
import MedWork from "@/components/layout/medWorkStepper/MedWork";
import HowItWorks from "@/components/layout/servicepage/custom/HowItWorks";
import ProductComponent from "@/components/layout/servicepage/custom/ProductComponenet";
import { cardData, questions, blogCards, productCategories } from "@/utility/data";
import { Box, Typography } from "@mui/material";


export async function generateStaticParams() {
  // Combine all products from the sexual_health category into a single array
  let allHairGrowthProducts = [
    ...productCategories['hair-growth'].men,
    ...productCategories['hair-growth'].women,
  ];

  return allHairGrowthProducts.map(({ referenceHandle }) => ({
    title: referenceHandle,
  }));
}

// Metadata generation function
export async function generateMetadata({ params }) {
  const { title } = params;

  // Combine all products from the sexual_health category into a single array
  let allHairGrowthProducts = [
    ...productCategories['hair-growth'].men,
    ...productCategories['hair-growth'].women,
  ];

  // Find the specific product based on the referenceHandle
  let specificProduct = allHairGrowthProducts.find(
    (p) => p.referenceHandle === title
  );

  if (!specificProduct) {
    return {
      title: "Product Not Found | Joey Med",
      description: "The product you are looking for does not exist.",
    };
  }

  return {
    title: `${specificProduct.itemName} - Hair Growth Product | Joey Med`,
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

  // Combine all products from the hair_growth category into a single array
  let allHairGrowthProducts = [
    ...productCategories['hair-growth'].men,
    ...productCategories['hair-growth'].women,
  ];

  // Filter the specific product based on the referenceHandle
  let specificProduct = allHairGrowthProducts.find(
    (p) => p.referenceHandle === title
  );
  return (
    <>
      {/* Dynamically populate the <Head> component */}
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

        <Box mt={6}>
          <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "500" }}>
            Ro Body Program members taking branded GLP-1 medications were paid for their testimonials.
          </Typography>
          <InstructionComponent
            title="Explanation about Our Products"
            description="Here you can see Instructions"
            instructions={cardData.hairGrowth}
          />
        </Box>
   
        <HowItWorks />

        <Box>
          <Typography variant="h2" textAlign="start" padding={3}>
            Patient reviews
          </Typography>
          <CardSlider cards={blogCards} type="blog" />
        </Box>

        {/* <MedWork steps={[]} />  */}
        <Questions questions={questions}/>
      </div>
    </>
  );
}
