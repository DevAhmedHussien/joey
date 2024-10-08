'use client'

import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { VideoCall, Phone, Security, Assignment } from '@mui/icons-material'; // Importing Icons
import './telehealth-consent.scss';

const sections = [
  {
    title: 'Nature of Telehealth Services',
    content: `Telehealth involves the use of electronic communications to allow a healthcare provider to assess, 
              diagnose, and treat a patient remotely. The types of communication methods used may include video calls, 
              phone calls, and secure messaging.`,
    icon: <VideoCall />,
  },
  {
    title: 'Risks and Benefits',
    content: `Telehealth can provide significant benefits, such as access to healthcare services without the need for 
              in-person visits. However, it also comes with risks like delays in evaluation or treatment due to 
              technological issues or lack of in-person examination.`,
    icon: <Assignment />,
  },
  {
    title: 'Informed Consent',
    content: `By consenting to telehealth, you acknowledge that telehealth services are provided by licensed medical 
              providers, and Joey Med serves as a platform to facilitate these consultations. You have the right to 
              withdraw consent at any time.`,
    icon: <Security />,
  },
  {
    title: 'Confidentiality',
    content: `Your health information will be protected through HIPAA-compliant systems, such as PracticeQ and AWS. 
              All telehealth sessions are confidential, but you are responsible for maintaining the privacy of your 
              communication device (e.g., phone, computer).`,
    icon: <Phone />,
  },
  {
    title: 'Follow-Up Care',
    content: `Following your telehealth consultation, the provider may issue prescriptions or provide recommendations. 
              You are responsible for following the healthcare provider's instructions.`,
    icon: <Assignment />,
  },
];

const TelehealthConsent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" className={'telehealthContainer'}>
        <Box my={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={'heading'}
          >
            Telehealth Consent
          </Typography>
          <Typography variant="body2" className={'effectiveDate'}>
            Effective Date: [Insert Date]
          </Typography>

          <Divider className={'divider'} />

          {sections.map((section, index) => (
            <Box className={'section'} key={index}>
              <Typography variant="h6" component="h2" className={'subHeading'}>
                {section.icon} {section.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {section.content}
              </Typography>
            </Box>
          ))}

          <Divider className={'divider'} />

          <Typography variant="body1" className={'contactInfo'}>
            If you have any concerns, please contact us at <a href="mailto:telehealth@joeymed.com">telehealth@joeymed.com</a>.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default TelehealthConsent;
