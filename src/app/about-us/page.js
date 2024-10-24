import HeartBeats from '@/components/layout/navbar/HeartBeats';
import { questions } from '@/utility/data';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the components
const Questions = dynamic(() => import('@/components/layout/frequentlyquestions/Questions'), {
  loading: () => <HeartBeats/>,
});

const AboutPage = dynamic(() => import('@/components/layout/about-page/AboutPage'), {
  loading: () =>  <HeartBeats/> ,
});

export const metadata = {
  title: "About us",
  description: "Learn about Joey Med, a leading telehealth and online pharmacy service based in Tampa, Florida. No insurance required. Accessible and affordable healthcare from the comfort of your home."
};

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Joey Med | Telehealth & Online Pharmacy in Tampa, Florida</title>
        <meta
          name="description"
          content="Learn about Joey Med, a leading telehealth and online pharmacy service based in Tampa, Florida. No insurance required. Accessible and affordable healthcare from the comfort of your home."
        />
        <meta name="keywords" content="telehealth services, online pharmacy, Joey Med, Tampa Florida, no insurance required, telemedicine, healthcare" />
      </Head>

      {/* Top Image Section */}
      <AboutPage />
      <Questions questions={questions} />
    </>
  );
};

export default AboutUs;
