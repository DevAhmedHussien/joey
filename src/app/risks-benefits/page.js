import { Box } from '@mui/material';
import Head from 'next/head';
import RisksBenefits from '@/components/layout/risks-benefits/RisksBenefits';


const Risk = () => {


  return (
    <>
    <Head>
        <title>Risks & Benefits | Joey Med</title>
        <meta name="description" content="Review the risks and benefits of using Joey Med's treatments, including important information about medication storage, usage, and potential side effects." />
        <meta name="keywords" content="Joey Med, Risks & Benefits, medication, side effects, storage, contraindications, telehealth" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Risks & Benefits - Joey Med" />
        <meta property="og:description" content="Learn more about the risks and benefits of Joey Med's treatments, including side effects and safety instructions." />
        <meta property="og:url" content="https://www.joeymed.com/risks-benefits" />
    </Head>

    <Box>
        <RisksBenefits/>
    </Box>

   
    </>
  );
};

export default Risk;
