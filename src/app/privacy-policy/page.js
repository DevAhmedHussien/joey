import PrivacyPolicy from '@/components/layout/privacy-policy/PrivacyPolicy';
import { Box } from '@mui/material';
import Head from 'next/head';

export const metadata = {
  title: "Privacy & Policy",
  description:"Learn how joey med collects, uses, and protects your personal and health information through our HIPAA-compliant telehealth platform."
};

const Privacy = () => {

  return (
    <>
    <Head>
        <title>Privacy & Policy | Joey Med</title>
        <meta name="description" content="Learn how Joey Med collects, uses, and protects your personal and health information through our HIPAA-compliant telehealth platform." />
        <meta name="keywords" content="Joey Med, Privacy Policy, telehealth, HIPAA, health information, medical consultations, secure data" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms & Conditions - Joey Med" />
        <meta property="og:description" content="Find out more about Joey Med's services, privacy, refunds, and subscriptions policies." />
        <meta property="og:url" content="https://www.joeymed.com/terms-conditions" />
    </Head>
    <Box>
        <PrivacyPolicy/>
    </Box>

   
    </>
  );
};

export default Privacy;
