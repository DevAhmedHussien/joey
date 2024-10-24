'use client'

import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Gavel, Security, VerifiedUser, Warning, AccountBalance } from '@mui/icons-material'; // Import Material-UI icons
import './terms-conditions.scss'; 

const sections = [
  {
    title: "Introduction",
    content: `MD Telehealth Platform LLC d/b/a Joey Med ("Joey Med," "we," or "us")
      owns and operates the website located at www.joeymed.com ("Platform").
      Your access and use of the Platform, its content ("Content"), and the
      products or services provided through the Platform (collectively,
      "Service") are governed by these Terms & Conditions ("Agreement").`,
    icon: <Gavel />
  },
  {
    title: "Services Offered",
    content: `Joey Med is a telehealth and technology company connecting patients with
      licensed medical providers and pharmacies. We offer consultations, prescription
      fulfillment, and non-prescription products related to weight loss, sexual health,
      and hair growth treatments.`,
    icon: <VerifiedUser />
  },
  {
    title: "Website & Third-Party Services",
    content: `Joey Med operates solely through the Platform (www.joeymed.com) and
      collaborates with third-party providers, including Jotform, Keragon, Google Workspace,
      PracticeQ, GoHighLevel, eRX, and Amazon AWS. All personal and health data collected
      are managed through HIPAA-compliant third-party services.`,
    icon: <Security />
  },
  {
    title: "User Requirements",
    content: `To use the Service, you must be at least 18 years old. You will be
      required to create an account through our third-party electronic health record platform
      PracticeQ.`,
    icon: <Warning />
  },
  {
    title: "Payment & Transactions",
    content: `Joey Med accepts payments via Square. Additional taxes and shipping costs
      may apply, depending on the patient's address. Subscription-based products involve
      automatic billing, and you may cancel services upon request.`,
    icon: <AccountBalance />
  },
  {
    title: "Refund Policy",
    content: `No refunds are available for dispensed medication. However, a full refund
      will be provided if a patient does not qualify for a prescription or if the service is
      canceled before shipping.`,
    icon: <Warning />
  },
  {
    title: "Privacy & Data Protection",
    content: `Joey Med complies with HIPAA and similar data protection laws. We collect
      personal and health-related information only as necessary to provide medical services.`,
    icon: <Security />
  },
  {
    title: "Telehealth Consent",
    content: `By using Joey Med's telehealth services, you consent to electronic consultations
      with licensed medical providers.`,
    icon: <VerifiedUser />
  },
  {
    title: "Dispute Resolution & Arbitration",
    content: `All disputes will be resolved through binding arbitration in accordance with
      Florida state law. You waive the right to participate in class action lawsuits.`,
    icon: <Gavel />
  },
  {
    title: "Limitation of Liability",
    content: `Joey Med’s liability for any claims is limited to $1,000. This limitation applies to
      all claims arising from the use of our services, except in cases of gross negligence or willful
      misconduct.`,
    icon: <Warning />
  },
  {
    title: "Termination of Service",
    content: `Joey Med reserves the right to terminate your access to the Service for any violation
      of this Agreement, including fraudulent activity or misuse of the Platform.`,
    icon: <Security />
  },
  {
    title: "Intellectual Property",
    content: `All trademarks, logos, and content displayed on Joey Med’s website are protected by
      intellectual property laws. Any unauthorized use of Joey Med’s intellectual property is strictly
      prohibited.`,
    icon: <VerifiedUser />
  },
  {
    title: "Governing Law",
    content: `This Agreement is governed by the laws of the State of Florida.`,
    icon: <Gavel />
  }
];

const TermsAndConditions = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" className={'termsContainer'}>
        <Box my={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={'heading'}
          >
            Terms & Conditions
          </Typography>
          <Typography variant="p" component="p"  className={'updatedDate'}>
            Last Updated: [Date]
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
        </Box>
      </Container>
    </motion.div>
  );
};

export default TermsAndConditions;
