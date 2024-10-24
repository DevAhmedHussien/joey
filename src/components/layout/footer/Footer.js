'use client';
import React, { useState } from 'react';
import { Box, Typography, Link, IconButton, Drawer, Button, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from 'next/image';
import imgLogo from '../../../../public/images/logo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme } from '@mui/material';
import { tokens } from '../../../theme/theme';
import './footer.scss';

export default function Footer() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const [openSections, setOpenSections] = useState({
    popular: false,
    about: false,
    support: false,
    legal: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <Box sx={{ backgroundColor: colors.primary[400], p: 5 }}>
      {/* Footer Bottom Section */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          <Image
            src={imgLogo}
            quality={100}
            height={65}
            	loading="lazy"
            alt="Joeymed logo"
            style={{ transform: 'scale(1.7)', transformOrigin: 'center' }}
          />
        </Typography>
        {/* Social Media Icons */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ color: colors.primary[1600] }}>
              <FacebookIcon  />
            </IconButton>
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ color: colors.primary[1600] }}>
              <TwitterIcon />
            </IconButton>
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <IconButton sx={{ color: colors.primary[1600] }}>
              <InstagramIcon />
            </IconButton>
          </Link>
        </Box>
        <Typography variant="p" component="p" color={ colors.primary[200]} mt={1}>2024 © All rights reserved, Joey Med</Typography>
      </Box>

      <Box sx={{ mt:5, display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap' }}>
        {/* Popular Section */}
        <Box mt={2}>
          <Box onClick={() => toggleSection('popular')} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
            <Typography variant="h4">Popular</Typography>
            <IconButton>
              {openSections.popular ? <ExpandLessIcon sx={{}} /> : <ExpandMoreIcon sx={{}} />}
            </IconButton>
          </Box>
          <Collapse in={openSections.popular}>
            <Box sx={{ pl: 2 }}>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Weight Loss</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Erectile Dysfunction</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Ozempic</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Wegovy</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Zepbound</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Cialis</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Hair Loss</Link>
            </Box>
          </Collapse>
        </Box>

        {/* About Joey Med Section */}
        <Box>
          <Box onClick={() => toggleSection('about')} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mt: 2 }}>
            <Typography variant="h4">About Joey Med</Typography>
            <IconButton>
              {openSections.about ? <ExpandLessIcon sx={{}} /> : <ExpandMoreIcon sx={{}} />}
            </IconButton>
          </Box>
          <Collapse in={openSections.about}>
            <Box sx={{ pl: 2 }}>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Founders letter</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Joey Med Operating System</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Advisors</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Careers</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Press</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Health Guide</Link>
            </Box>
          </Collapse>
        </Box>

        {/* Support Section */}
        <Box>
          <Box onClick={() => toggleSection('support')} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mt: 2 }}>
            <Typography variant="h4">Support</Typography>
            <IconButton>
              {openSections.support ? <ExpandLessIcon sx={{}} /> : <ExpandMoreIcon sx={{}} />}
            </IconButton>
          </Box>
          <Collapse in={openSections.support}>
            <Box sx={{ pl: 2 }}>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Contact us</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>FAQ</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Returns & Refunds</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Pricing</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>GLP-1 Supply Tracker</Link>
            </Box>
          </Collapse>
        </Box>

        {/* Legal Section */}
        <Box>
          <Box onClick={() => toggleSection('legal')} sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', mt: 2 }}>
            <Typography variant="h4">Legal</Typography>
            <IconButton>
              {openSections.legal ? <ExpandLessIcon sx={{}} /> : <ExpandMoreIcon sx={{}} />}
            </IconButton>
          </Box>
          <Collapse in={openSections.legal}>
            <Box sx={{ pl: 2 }}>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Terms</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Privacy</Link>
              <Link href="/" color="inherit" underline="none" display="block" mt={1}>Consumer Health Data Privacy</Link>
              <Link onClick={() => toggleDrawer(true)} color="inherit" underline="none" display="block" mt={1}>Your Privacy Choices</Link>
            </Box>
          </Collapse>
        </Box>
      </Box>

      {/* Privacy Drawer */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} sx={{width:'30%'}}>
        <Box sx={{ width:'100%', p: 3 }}>
          <Typography variant="h6" gutterBottom>Your Privacy Choices</Typography>
          <Typography variant="p" component="p" >
            You can use the toggles below to manage your privacy preferences. By clicking "Opt in to all" you consent to Joey Med's processing of your personal data, including limited information about the products and services in which you express an interest, for all of the purposes below. You can change your privacy preferences at any time by clicking the "My Privacy Choices" link in our website footer or by visiting the “Privacy settings” page in your Joey Med account. View our Privacy Policy to learn more about our data practices.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <Typography variant="p" component="p" >Manage preferences</Typography>
            <Typography  variant="p" component="p" >
              To opt out of the sale and sharing of your information via online cookies, pixels, and similar tools, please select the state below.
            </Typography>
            <select style={{ width: '100%', padding: '8px', margin: '10px 0' }}>
              <option>Please select</option>
              <option>California</option>
              <option>Connecticut</option>
              <option>Colorado</option>
              {/* Add more states as needed */}
            </select>

            <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>Opt in to all</Button>
            <Button variant="outlined" color="primary" fullWidth>Opt out of all</Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
