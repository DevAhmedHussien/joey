import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const steps = [
  {
    imgSrc: "/images/homePage/man.png", // Replace with actual image paths
    stepNumber: "01",
    description: "Place under the tongue",
  },
  {
    imgSrc: "/images/homePage/man.png", //
    stepNumber: "02",
    description: "Let it dissolve fully",
  },
  {
    imgSrc: "/images/homePage/man.png", //
    stepNumber: "03",
    description: "Get hard in 15 minutes on average*",
  },
];

export default function HowItWorks() {
  return (
    <Box mt={3}>
      <Typography variant="h2" component="h2" textAlign="center" padding={2} >
        How it works
      </Typography>
      <Box
        padding={3}
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap={4}
      >
        {steps.map((step, index) => (
          <Box
            key={index}
            flexBasis={{ xs: "100%", md: "30%" }} // Adjust for smaller screens
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
            padding={2}
            bgcolor="linear-gradient(145deg, #f0f0f5, #ffffff)"
            borderRadius={2}
            boxShadow="0 10px 15px rgba(0, 0, 0, 0.1)"
            minHeight={350}
            width={320}
            sx={{
              border: "1px solid #e0e0e0",
              maxWidth: "400px",
            }}
          >
            <Image
              src={step.imgSrc}
              alt={`Step ${step.stepNumber}: ${step.description}`}
              width={300}
              height={200}
              style={{ borderRadius: "12px", marginBottom: "24px" }}
              loading="lazy"
            />
            <Typography
              variant="h4"
              component="div"
              color="primary"
              fontWeight="bold"
              mb={2}
              sx={{
                fontSize: "2rem",
                background: "linear-gradient(145deg, #ff6f61, #00a6fb)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {step.stepNumber}
            </Typography>
            <Typography variant="body1" fontSize="1.1rem">
              {step.description}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
