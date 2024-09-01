'use client'
import React, { useState } from "react";
import { Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import './productComponenet.scss'
import AppButton from "@/components/commons/appbutton/AppButton";
import InfoList from "../../infolist/InfoList";
import Question from "../../frequentlyquestions/Question";

// ** Animation 
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { cardVariantsLeft, cardVariantsRight } from '@/utility/animationSyles';
 
export default function ProductComponent({name, description ,images , questions, productDescription, benefit}) {
  const [selectedImage, setSelectedImage] = useState(images[0]); // replace with your image path

 
  return (
    <Box mt={4} padding={2} display="flex" justifyContent={'center'} alignItems={'start'}  gap={2} flexDirection={{ xs: "column", md: "row" }}>
      
      {/* Product Images Section */}
      <Box height={600} width={'45%'} >
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={cardVariantsRight} 
          style={{ width: '100%' }}
          >
          <Box height={600}>
            <Image 
              src={selectedImage}
              alt="Product Image"
              width={500}
              height={500}
              quality={100}
              	loading="lazy"
              style={{ borderRadius: "8px" ,width:'100%' ,height:'100%'}}
            />
            <Box display="flex" justifyContent="start" gap={1} >
              {images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  	loading="lazy"
                  alt={`Thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  onClick={() => setSelectedImage(img)}
                  style={{ cursor: "pointer", borderRadius: "4px", border: selectedImage === img ? "2px solid teal" : "2px solid transparent" }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      </Box>

      {/* Product Information Section */}
      <Box  padding={2} mt={1}  width={'45%'}>
        <motion.div 
          initial="hidden"
          animate="visible"
            variants={cardVariantsLeft}
          
          style={{ width: '100%' }}
        >
          
            <Typography variant="h2" component='h2' gutterBottom>
            {name}
            </Typography>
            <Typography variant="h5" component='h5' gutterBottom mt={1}>
                {productDescription}
            </Typography>
            <Box mt={2}>
            <Typography variant="h3" component='h3' gutterBottom>
            Benefit
            </Typography>
            <Typography variant="h5" component='h5' gutterBottom mt={1}>
                {benefit}
            </Typography>
                {/* <InfoList/> */}
            </Box>
            <Box mt={2}>
                <AppButton title='start now'/>
            </Box>
            <Typography variant="caption" display="block" marginTop={5} marginBottom={2}>
              *After medication dissolved. Compounded drugs are permitted to be prescribed under federal law but are not FDA-approved. 
            </Typography>
            {
                questions.map((q, index) => (
                    <Question key={index} ques={q.question} ans={q.answer} />
                ))
            }
        </motion.div>
      </Box>
    </Box>
  );
}
