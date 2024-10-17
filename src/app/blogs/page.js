// pages/blog.js
import Head from 'next/head';
import BlogPage from '@/components/layout/blog-page/BlogPage';

export const metadata = {
  title: "Blog joey med ",
  description:"Read the latest blog posts from Joey Med. Explore topics on telehealth services, online pharmacy tips, healthcare advice, and how to get quality healthcare without insurance."
};


const Blog = () => {


  return (
    <>
      <Head>
        <title>joey med Blog | Telehealth & Online Pharmacy Insights</title>
        <meta
          name="description"
          content="Read the latest blog posts from Joey Med. Explore topics on telehealth services, online pharmacy tips, healthcare advice, and how to get quality healthcare without insurance."
        />
        <meta name="keywords" content="joey med blog, telehealth tips, online pharmacy advice, healthcare without insurance, Tampa Florida, telemedicine, healthcare articles" />
      </Head>

    <BlogPage/>
    </>
  );
};

export default Blog;
