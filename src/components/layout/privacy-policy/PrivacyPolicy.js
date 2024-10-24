'use client'

import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Security, Payment, Visibility, ContactSupport } from '@mui/icons-material'; // Importing Icons
import './privacy-policy.scss';

const sections = [
  {
    title: 'Information We Collect',
    content: `When you register for an account, we collect your name, address, email, 
              phone number, and health-related information necessary to provide telehealth services. 
              Your health information is securely stored through HIPAA-compliant partners, and payments are 
              processed through Square.`,
    icon: <Visibility />,
  },
  {
    title: 'How We Use Your Information',
    content: `We use your personal and health data to provide telehealth consultations, 
              manage your subscriptions, orders, and appointments, and comply with HIPAA regulations. 
              Additionally, we communicate with you regarding any updates to our services.`,
    icon: <Security />,
  },
  {
    title: 'Data Sharing',
    content: `We only share your data with trusted third-party providers like medical groups, pharmacies, 
              and payment processors, all of whom comply with HIPAA or similar privacy standards.`,
    icon: <Payment />,
  },
  {
    title: 'Your Rights',
    content: `You have the right to request access, correction, or deletion of your personal 
              information. Please reach out to privacy@joeymed.com to exercise these rights.`,
    icon: <ContactSupport />,
  },
];

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" className={'privacyContainer'}>
        <Box my={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={'heading'}
          >
            Privacy & Policy
          </Typography>
          <Typography variant="p" component="p" className={'effectiveDate'}>
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
            For any questions or concerns, contact us at <a href="mailto:privacy@joeymed.com">privacy@joeymed.com</a>.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default PrivacyPolicy;
