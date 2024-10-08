'use client'

import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { Warning, Medication, Info, Store, ReportProblem } from '@mui/icons-material'; // Importing Icons
import './risks-benefits.scss';

const sections = [
  {
    title: 'Storage',
    content: `Store medications in a cool, dry place at room temperature (below 75°F). 
              Avoid exposure to direct sunlight or high temperatures (e.g., in a vehicle).`,
    icon: <Store />,
  },
  {
    title: 'Intended Use',
    content: `Medications provided through Joey Med are for individuals 18 years and older. 
              These compounded medications, although made from FDA-approved ingredients, are NOT 
              FDA-approved for any specific indication.`,
    icon: <Info />,
  },
  {
    title: 'How to Use',
    content: `Follow the dosing instructions provided by your healthcare provider. Medications will not 
              produce their intended effects unless used as prescribed.`,
    icon: <Medication />,
  },
  {
    title: 'Interactions and Contraindications',
    content: `Do NOT take medications provided by Joey Med if you are currently using nitrates, 
              as this can cause a dangerous drop in blood pressure. Avoid grapefruit, excessive alcohol 
              consumption, and certain medications that may interfere with your prescribed treatment.`,
    icon: <ReportProblem />,
  },
  {
    title: 'Warnings',
    content: `If you experience serious side effects such as chest pain, syncope (fainting), 
              or an allergic reaction, seek immediate medical attention. If you have pre-existing conditions 
              such as cardiovascular disease, liver or kidney impairment, or are taking medications like alpha-blockers, 
              consult with your healthcare provider.`,
    icon: <Warning />,
  },
  {
    title: 'Common Side Effects',
    content: `Side effects may include headache, nausea, flushing, or muscle aches. Contact your provider if these 
              become severe or persistent.`,
    icon: <Info />,
  },
  {
    title: 'Serious Side Effects',
    content: `Discontinue use and seek medical attention if you experience prolonged erections, sudden vision or 
              hearing loss, or signs of an allergic reaction.`,
    icon: <ReportProblem />,
  },
];

const RisksBenefits = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container maxWidth="lg" className={'risksContainer'}>
        <Box my={4}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            className={'heading'}
          >
            Risks & Benefits
          </Typography>
          <Typography variant="body2" className={'lastUpdated'}>
            Last Updated: [Insert Date]
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
            For any questions or concerns, please contact us at <a href="mailto:care@joeymed.com">care@joeymed.com</a>.
          </Typography>
        </Box>
      </Container>
    </motion.div>
  );
};

export default RisksBenefits;
