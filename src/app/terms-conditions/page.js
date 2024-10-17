import TermsAndConditions from '@/components/layout/tems-condition/TermsAndConditions';
import { Box } from '@mui/material';
import Head from 'next/head';

export const metadata = {
  title: "Terms & Conditions",
};

const Terms = () => {


  return (
    <>
    <Head>
        <title>Terms & Conditions | Joey Med</title>
        <meta name="description" content="Review the terms and conditions for using Joey Med, a telehealth service providing weight loss, sexual health, and hair growth treatments." />
        <meta name="keywords" content="Joey Med, Terms & Conditions, Telehealth, Sexual Health, Weight Loss, Hair Growth" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Terms & Conditions - Joey Med" />
        <meta property="og:description" content="Find out more about Joey Med's services, privacy, refunds, and subscriptions policies." />
        <meta property="og:url" content="https://www.joeymed.com/terms-conditions" />
    </Head>
    <Box>
        <TermsAndConditions/>
    </Box>

   
    </>
  );
};

export default Terms;
