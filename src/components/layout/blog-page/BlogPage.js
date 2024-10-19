import { Box, Typography } from '@mui/material';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import { titleAnimation, cardVariantsSmall } from '@/utility/animationSyles';
import ImageWithSpinner from '@/components/commons/image/ImageWithSpinner';
import GreetingComponent from '../servicepage/custom/GreetingComponent';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import './blogPage.scss';
import { questions } from '@/utility/data';

const blogPosts = [
  {
    title: 'The Benefits of Telehealth for Your Health and Wallet',
    description: 'Discover how telehealth services can save you time and money while providing top-notch healthcare.',
    image: '/images/blog-telehealth.jpg',
    link: '/blog/benefits-of-telehealth',
  },
  {
    title: 'Why You Don’t Need Insurance for Quality Healthcare',
    description: 'Learn why Joey Med’s services don’t require insurance and how this can benefit you.',
    image: '/images/blog-no-insurance.jpg',
    link: '/blog/no-insurance-healthcare',
  },
  {
    title: 'How to Choose the Right Online Pharmacy',
    description: 'A guide to selecting a reliable online pharmacy for your medication needs.',
    image: '/images/blog-online-pharmacy.jpg',
    link: '/blog/choose-online-pharmacy',
  },
  {
    title: 'The Benefits of Telehealth for Your Health and Wallet',
    description: 'Discover how telehealth services can save you time and money while providing top-notch healthcare.',
    image: '/images/blog-telehealth.jpg',
    link: '/blog/benefits-of-telehealth',
  },
  {
    title: 'Why You Don’t Need Insurance for Quality Healthcare',
    description: 'Learn why Joey Med’s services don’t require insurance and how this can benefit you.',
    image: '/images/blog-no-insurance.jpg',
    link: '/blog/no-insurance-healthcare',
  },
  {
    title: 'How to Choose the Right Online Pharmacy',
    description: 'A guide to selecting a reliable online pharmacy for your medication needs.',
    image: '/images/blog-online-pharmacy.jpg',
    link: '/blog/choose-online-pharmacy',
  },
  {
    title: 'The Benefits of Telehealth for Your Health and Wallet',
    description: 'Discover how telehealth services can save you time and money while providing top-notch healthcare.',
    image: '/images/blog-telehealth.jpg',
    link: '/blog/benefits-of-telehealth',
  },
  {
    title: 'Why You Don’t Need Insurance for Quality Healthcare',
    description: 'Learn why Joey Med’s services don’t require insurance and how this can benefit you.',
    image: '/images/blog-no-insurance.jpg',
    link: '/blog/no-insurance-healthcare',
  },
  {
    title: 'How to Choose the Right Online Pharmacy',
    description: 'A guide to selecting a reliable online pharmacy for your medication needs.',
    image: '/images/blog-online-pharmacy.jpg',
    link: '/blog/choose-online-pharmacy',
  },
];

const BlogPage = () => {
  // const theme = useTheme();

  return (
    <>
      <GreetingComponent
        title="Welcome to Our Blog"
        description="Stay informed with the latest insights on telehealth, online pharmacy services, and healthcare tips from the experts at Joey Med."
      />
      <Box className="sexu">
        <Box className="image-container">
          <ImageWithSpinner alt="about us" src="/images/blogs.png" />
        </Box>
        <CardSlider cards={blogPosts} type="blog" />
      </Box>

      {/* Video Section */}
      <Box className="video-section">
        {/* <motion.div initial="hidden" animate="visible" variants={titleAnimation}> */}
          <Typography variant="h2" component="h2" className="title" gutterBottom>
            Learn More About Telehealth
          </Typography>
        {/* </motion.div> */}
        {/* <motion.div initial="hidden" animate="visible" variants={cardVariantsSmall}> */}
          <Box className="video-container">
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
              <iframe 
                src="https://share.synthesia.io/embeds/videos/845ce7a9-ae4e-4541-83ac-b0667a75e986" 
                loading="lazy" 
                title="Synthesia video player - Joey Med Process" 
                allowFullScreen 
                allow="encrypted-media; fullscreen;" 
                style={{
                  position: 'absolute', 
                  width: '100%', 
                  height: '100%', 
                  top: 0, 
                  left: 0, 
                  border: 'none', 
                  padding: 0, 
                  margin: 0, 
                  overflow: 'hidden'
                }}>
              </iframe>
          </div>
          </Box>
        {/* </motion.div> */}
      </Box>

      {/* Frequently Asked Questions */}
      <Box className="faq-section">
        <Questions questions={questions} />
      </Box>
    </>
  );
};

export default BlogPage;
