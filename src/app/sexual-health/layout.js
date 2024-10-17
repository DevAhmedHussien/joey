import Head from "next/head";

export const metadata = {
    title: "Sexual Health",
    description:
      "Learn how joey med collects, uses, and protects your personal and health information through our HIPAA-compliant telehealth platform.",
  };
  
  export default function SexualHealthLayout({ children }) {
    return (
      <>
      <Head>
        <title>Sexual Health - Joey Med | Personalized Online Treatment</title>
        <meta name="description" content="Explore Joey Med's sexual health services. Get personalized treatment plans, discreet shipping, and 24/7 support from our healthcare providers." />
        <link rel="canonical" href="https://www.joeymed.com/sexual-health" />
        <meta property="og:title" content="Sexual Health - Joey Med" />
        <meta property="og:description" content="Joey Med offers online telehealth services for sexual health, including personalized treatment plans and discreet shipping." />
        <meta property="og:url" content="https://www.joeymed.com/sexual-health" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/sexual-health-og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="sexual health, online treatment, ED treatment, Joey Med, personalized healthcare, telehealth" />
        <meta name="author" content="Joey Med" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Sexual Health Services",
              "provider": {
                "@type": "Organization",
                "name": "Joey Med",
                "url": "https://www.joeymed.com/",
                "logo": "https://www.joeymed.com/logo.png",
              },
              "description": "Joey Med offers personalized telehealth services for sexual health, including 24/7 provider support, clinically proven treatments, and discreet shipping.",
              "url": "https://www.joeymed.com/sexual-health",
              "image": "https://www.joeymed.com/images/sexual-health-og-image.jpg",
              "areaServed": "US",
            }),
          }}
        />
      </Head>
        {children}
      </>
    );
  }
  