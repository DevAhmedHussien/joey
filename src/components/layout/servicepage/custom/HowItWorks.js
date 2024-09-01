import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const steps = [
  {
    imgSrc: "/path/to/image1.jpg", // Replace with actual image paths
    stepNumber: "01",
    description: "Place under the tongue",
  },
  {
    imgSrc: "/path/to/image2.jpg",
    stepNumber: "02",
    description: "Let it dissolve fully",
  },
  {
    imgSrc: "/path/to/image3.jpg",
    stepNumber: "03",
    description: "Get hard in 15 minutes on average*",
  },
];

export default function HowItWorks() {
  return (
    <Box  backgroundColor="#f8f8f8">
      <Typography variant="h2" textAlign='start' padding={2}>  How it works</Typography>
      <Box padding={4} display="flex" justifyContent="space-between" flexWrap="wrap" gap={1}>
        {steps.map((step, index) => (
          <Box
            key={index}
            flexBasis={{ xs: "100%", md: "30%" }}
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            padding={2}
            bgcolor="white"
            borderRadius={2}
             minHeight={300} 
             maxWidth={400} 
          >
            <Image
              src={step.imgSrc}
              alt={step.description}
              width={300}
              height={200}
              style={{ borderRadius: "8px", marginBottom: "16px" }}
              	loading="lazy"
            />
            <Typography variant="h6" color="primary">
              {step.stepNumber}
            </Typography>
            <Typography variant="body1">{step.description}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
