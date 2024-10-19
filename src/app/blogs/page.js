import HeartBeats from '@/components/layout/navbar/HeartBeats';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the BlogPage component
const BlogPage = dynamic(() => import('@/components/layout/blog-page/BlogPage'), {
  loading: () =>  <HeartBeats/>, // Optional loading state
});

export const metadata = {
  title: "Blog Joey Med",
  description: "Read the latest blog posts from Joey Med. Explore topics on telehealth services, online pharmacy tips, healthcare advice, and how to get quality healthcare without insurance."
};

const Blog = () => {
  return (
    <>
      <Head>
        <title>Joey Med Blog | Telehealth & Online Pharmacy Insights</title>
        <meta
          name="description"
          content="Read the latest blog posts from Joey Med. Explore topics on telehealth services, online pharmacy tips, healthcare advice, and how to get quality healthcare without insurance."
        />
        <meta name="keywords" content="Joey Med blog, telehealth tips, online pharmacy advice, healthcare without insurance, Tampa Florida, telemedicine, healthcare articles" />
      </Head>

      <BlogPage />
    </>
  );
};

export default Blog;
