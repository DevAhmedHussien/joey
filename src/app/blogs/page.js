import HeartBeats from '@/components/layout/navbar/HeartBeats';
import dynamic from 'next/dynamic';
import Head from 'next/head';

// Dynamically import the BlogPage component
const BlogPage = dynamic(() => import('@/components/layout/blog-page/BlogPage'), {
  loading: () =>  <HeartBeats/>, // Optional loading state
});

export const metadata = {
  title: "Blogs",
  description: "Read the latest blog posts from Joey Med. Explore topics on telehealth services, online pharmacy tips, healthcare advice, and how to get quality healthcare without insurance."
};

const Blog = () => {
  return (
    <>
      <BlogPage />
    </>
  );
};

export default Blog;
