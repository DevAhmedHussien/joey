import { Box, Typography, Grid } from '@mui/material';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import HistoryEduOutlinedIcon from '@mui/icons-material/HistoryEduOutlined';
import './whyChooseUs.scss'; // Import SCSS file for styles

const reasons = [
  {
    icon: <HealthAndSafetyOutlinedIcon className="icon" />,
    title: 'Licensed Professionals',
    description: 'Affordable consultations with licensed healthcare professionals.',
  },
  {
    icon: <LocalPharmacyOutlinedIcon className="icon" />,
    title: 'Online Pharmacy',
    description: 'A user-friendly online pharmacy with fast, discreet shipping to your doorstep.',
  },
  {
    icon: <SupportAgentOutlinedIcon className="icon" />,
    title: '24/7 Support',
    description: 'Get healthcare support anytime, anywhere with our 24/7 service.',
  },
  {
    icon: <HistoryEduOutlinedIcon className="icon" />,
    title: 'Personalized Care',
    description: 'We ensure personalized care and attention with every consultation.',
  },
];

const WhyChooseUs = () => {
  return (
    <Box className="why-choose-us">
      <Typography variant="h2" className="section-title" align="center">Why Choose joey med?</Typography>
      <Grid container spacing={4} justifyContent="center">
        {reasons.map((reason, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box className="reason-card">
              {reason.icon}
              <Typography variant="h4" className="reason-title">{reason.title}</Typography>
              <Typography variant="body1" className="reason-description">{reason.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
