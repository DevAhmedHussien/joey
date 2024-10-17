import React from 'react';
import Head from 'next/head';

import Questions from '@/components/layout/frequentlyquestions/Questions';
import { questions } from '@/utility/data';

import AboutPage from '@/components/layout/about-page/AboutPage';

export const metadata = {
  title: "About joey med ",
  description:"Learn about Joey Med, a leading telehealth and online pharmacy service based in Tampa, Florida. No insurance required. Accessible and affordable healthcare from the comfort of your home."
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
      <AboutPage/>
        <Questions questions={questions} />

    </>
  );
};

export default AboutUs;
