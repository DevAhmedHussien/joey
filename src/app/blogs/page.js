// pages/blog.js
'use client'
import React from 'react';
import Head from 'next/head';

// ** Animation styles
import BlogPage from '@/components/layout/blog-page/BlogPage';



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
