'use client'
import React, { useState } from "react";
import { Box, Typography, AppBar, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";
import AppButton from "@/components/commons/appbutton/AppButton";
import Question from "../../frequentlyquestions/Question";
import "./productComponenet.scss";
import ImageWithSpinner from "@/components/commons/image/ImageWithSpinner";

// ** Animation styles
const containerVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Section with background color for dynamic content
function SectionWithBackground({ content }) {
  return (
    <motion.div
      variants={itemVariants}
      style={{ marginTop: "20px", backgroundColor: "#f0f0f0", borderRadius: "12px", padding: "16px" }}
    >
      <Typography variant="p" component="p" p={1}>
        {content}
      </Typography>
    </motion.div>
  );
}

export default function ProductComponent({
  name,
  description,
  images = [],
  questions,
  productDescription,
  price,
  benefit,
  ingredient = "x",
  safety = "x",
}) {
  // ** Hooks
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [tabValue, setTabValue] = useState(0); // For Tab navigation

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Handle image selection
  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      // minHeight="100vh"
      padding={{ xs: 1, md: 3 }}
      // sx={{ backgroundColor: "#f5f5f5" }}
    >
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems={"start"}
        gap={4}
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          borderRadius: "8px",
          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
          overflow: "hidden",
          width: "100%", // Full width on mobile
          // maxWidth: "1200px", // Limit width on larger screens
        }}
      >
        {/* Product Images Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "400px" }, // Responsive width for images
            height: { xs: 300, md: 500 }, // Responsive height for images
            padding: { xs: 1, md: 0 }, // Adjust padding on smaller screens
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: "100%", height: "100%" }}>
            <Box height="100%" mt={2}>
              <ImageWithSpinner
                src={selectedImage}
                alt="Product Image"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
          </motion.div>

          {/* Thumbnails for image selection */}
          <Box mt={2} display="flex" justifyContent="center" gap={1} flexWrap="wrap">
            {images.map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageSelect(image)}
                sx={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                  border: image === selectedImage ? `2px solid black` : "none",
                }}
              />
            ))}
          </Box>
        </Box>

        {/* Product Information Section */}
        <Box
          padding={2}
          marginTop={{xs:5,md:0}}
          width={{ xs: "100%", md: "50%" }}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <motion.div initial="hidden" animate="visible" variants={containerVariants} style={{ width: "100%" }}>
            <Typography variant="h3" component="h3"> {/* Responsive typography */}
              {name}
            </Typography>
            <Typography variant="p" component="p" p={1} >
              {productDescription}
            </Typography>

            {/* AppBar for Ingredient, Benefit, Safety */}
            <AppBar position="static" color="default" sx={{ borderRadius: "8px", boxShadow: "none" }}>
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                variant="fullWidth"
              >
                <Tab label="Ingredient" />
                <Tab label="Benefit" />
                <Tab label="Safety" />
              </Tabs>
            </AppBar>

            {/* Conditionally Render Section Based on Tab Selection */}
            {tabValue === 0 && <SectionWithBackground content={ingredient} />}
            {tabValue === 1 && (
              <SectionWithBackground
                content={benefit.map((b, index) => (
                  <div key={index} style={{padding:5}}>
                    <strong>{Object.keys(b)[0]}:</strong> {Object.values(b)[0]}
                    <br />
                  </div>
                ))}
              />
            )}
            {tabValue === 2 && <SectionWithBackground content={safety} />}

            {/* Start Now Button */}
            <Box mt={1} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
              <AppButton title="start now" />
            </Box>

            {/* Additional Info */}
            <Typography
              variant="p"
              component="p"
              marginTop={5}
              marginBottom={2}
            >
              *After medication dissolved. Compounded drugs are permitted to be prescribed under federal law but are not FDA-approved.
            </Typography>

            {/* Frequently Asked Questions */}
            {questions.map((q, index) => (
              <Question key={index} ques={q.question} ans={q.answer} />
            ))}
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
