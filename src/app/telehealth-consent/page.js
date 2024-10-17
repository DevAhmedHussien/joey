
import TelehealthConsent from '@/components/layout/telehealth-consent/TelehealthConsent';
import { Box } from '@mui/material';
import Head from 'next/head';

export const metadata = {
  title: "Telehealth Consent",
};

const Consent = () => {


  return (
    <>
    <Head>
    <title>Telehealth Consent | Joey Med</title>
    <meta name="description" content="Review the telehealth consent agreement for Joey Med's telehealth services. Learn more about the risks, benefits, and informed consent for remote healthcare services." />
    <meta name="keywords" content="Joey Med, Telehealth Consent, telehealth services, HIPAA, remote healthcare, telehealth agreement" />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Telehealth Consent - Joey Med" />
    <meta property="og:description" content="Review Joey Med's telehealth consent agreement, including the nature of telehealth services and patient rights." />
    <meta property="og:url" content="https://www.joeymed.com/telehealth-consent" />
    </Head>
    <Box>
      <TelehealthConsent/>
    </Box>

   
    </>
  );
};

export default Consent;
