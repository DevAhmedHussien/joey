import { Box, Typography } from '@mui/material';
import Questions from '@/components/layout/frequentlyquestions/Questions';
import ImageWithSpinner from '@/components/commons/image/ImageWithSpinner';
import GreetingComponent from '../servicepage/custom/GreetingComponent';
import CardSlider from '@/components/commons/cartslider/CardSlider';
import { questions } from '@/utility/data';
import VideoMedWork from '@/components/commons/videoexplantion/VideoMedWork';

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

      <VideoMedWork/>    

      {/* Frequently Asked Questions */}
      <Box className="faq-section">
        <Questions questions={questions} />
      </Box>
    </>
  );
};

export default BlogPage;
