import { Box, Typography, Link } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
// import { motion } from 'framer-motion';
// import { cardVariantsLeft, cardVariantsSmall, cardVariantsRight } from '@/utility/animationSyles';
import GreetingComponent from '../servicepage/custom/GreetingComponent';
import ImageWithSpinner from '@/components/commons/image/ImageWithSpinner';
import ContactForm from '@/components/Auth/ContactForm';
import "./contactUs.scss"

const ContactUsPage = () => {
åå
//   // Title Animation
//   const titleAnimation = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   // Icon Animation
//   const iconAnimation = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
//   };

  return (
    <>
    <GreetingComponent
        title=" Get in touch"
        description=" We’re here to help you with all your telehealth and online pharmacy needs. Get in touch with us today!"
      />
     <Box>
       <Box className="image-container">
         <ImageWithSpinner alt="contact us" src="/images/blogs.png" />
       </Box>
     </Box>
       
        {/* Content */}
        <Box classNam="content-field"  sx={{p:5,display:'flex',justifyContent:'center',alignItem:'center',flexWrap:'wrap',gap:2}}>
          {/* <motion.div variants={cardVariantsRight}> */}
            <Box
              sx={{
                padding: { xs: 2, md: 4 },
                borderRadius: 2,
                boxShadow: 3,
                zIndex: 1,
                width: '100%',
                maxWidth: '650px',
              }}
            >
              <ContactForm />
            </Box>
          {/* </motion.div> */}
          {/* <motion.div variants={cardVariantsSmall}> */}
            <Box
              sx={{
                background:'var(--primary-background2)',
                padding: { xs: 2, md: 4 },
                borderRadius: 2,
                boxShadow: 3,
                zIndex: 1,
                width: '100%',
                maxWidth: '650px',
                maxHeight:'300px'
              }}
            >
              <Typography variant="h3" component="h3" gutterBottom  >
                Contact Information
              </Typography>
              {/* <motion.div variants={iconAnimation} initial="hidden" animate="visible"> */}
                <Typography variant="p" component="p" paragraph mt={2}>
                  <EmailOutlinedIcon className='icon-app'  />
                  <strong>Email:</strong> <Link href="mailto:support@joeymed.com" >support@joeymed.com</Link>
                </Typography>
              {/* </motion.div> */}
              {/* <motion.div variants={iconAnimation} initial="hidden" animate="visible" transition={{ delay: 0.1 }}> */}
                <Typography variant="p" component="p" paragraph >
                  <PhoneOutlinedIcon className='icon-app' />
                  <strong>Phone:</strong> <Link href="tel:+1234567890" >+1 (234) 567-890</Link>
                </Typography>
              {/* </motion.div> */}
              {/* <motion.div variants={iconAnimation} initial="hidden" animate="visible" transition={{ delay: 0.2 }}> */}
                <Typography variant="p" component="p" paragraph >
                  <LocationOnOutlinedIcon className='icon-app'  />
                  <strong>Address:</strong> 123 Health St, Tampa, Florida, 33602
                </Typography>
              {/* </motion.div> */}
              {/* <motion.div variants={iconAnimation} initial="hidden" animate="visible" transition={{ delay: 0.3 }}> */}
                <Typography variant="p" component="p" paragraph >
                  <AccessTimeOutlinedIcon className='icon-app'  />
                  <strong>Office Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM EST
                </Typography>
              {/* </motion.div> */}
            </Box>
          {/* </motion.div> */}
        </Box>

        {/* Map Placeholder */}
        {/* <motion.div variants={cardVariantsSmall}> */}
          <Box >
            <Box>
                <Typography variant="h2" component="h2" align="center" gutterBottom >
                  How you can reach us
                </Typography>
            </Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.083658692194!2d-82.45844458456577!3d27.95057568263698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c520507be10d%3A0x1c2f9d9282d97b1d!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1622451837151!5m2!1sen!2sus"
              width="100%"
              height="500"
              style={{ borderRadius: 20, boxShadow: '0px 10px 20px #cce0e7' }}
              allowFullScreen=""
              loading="lazy"
            />
          </Box>
        {/* </motion.div> */}
    </>
  );
};

export default ContactUsPage;
