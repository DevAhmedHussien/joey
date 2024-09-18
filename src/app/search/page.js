import React from 'react';
import Head from 'next/head';
import SearchPageProduct from '@/components/layout/searchproducts/SearchPageProduct';
import { productCategories } from '@/utility/data';

const products = [...productCategories['weight-loss'].pills,...productCategories['weight-loss'].injections,...productCategories['sexual-health'].pills,...productCategories['sexual-health'].Capsules, ...productCategories['sexual-health'].Creams,...productCategories['hair-growth'].men,...productCategories['hair-growth'].women]

function SearchPage() {
  return (
    <>
      <Head>
        <title>Search Products - Joey Med | Find the Right Treatment for You</title>
        <meta name="description" content="Search and find the right treatment for your health needs at Joey Med. Explore our range of products including erectile dysfunction treatments, daily rise gummies, and more." />
        <link rel="canonical" href="https://www.joeymed.com/search" />
        <meta property="og:title" content="Search Products - Joey Med" />
        <meta property="og:description" content="Find the right treatment at Joey Med. Explore products like Ro Sparks Rx, Sildenafil Rx, and more, tailored to your health needs." />
        <meta property="og:url" content="https://www.joeymed.com/search" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/search-products-og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Search Products - Joey Med",
              "description": "Search for health products at Joey Med, including treatments for erectile dysfunction and more.",
              "url": "https://www.joeymed.com/search-products",
            }),
          }}
        />
      </Head>

      <main>
        <section aria-labelledby="search-products-header">
          <h1 id="search-products-header" style={{ display: 'none' }}>Search Products</h1>
          <SearchPageProduct products={products} />
        </section>
      </main>
    </>
  );
}

export default SearchPage;
