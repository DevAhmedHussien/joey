'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography,Grid , Box} from '@mui/material';
// ** animation
import { motion } from "framer-motion";
import {itemVariants, cardVariantsRight, cardVariantsLeft, cardVariantsSmall} from'@/utility/animationSyles'
import Card from '@/components/commons/card/Card';
import imgWeightloss from '../../../public/images/homePage/weight.png'
import imgSexual from '../../../public/images/homePage/sexual.png'
import imgProducts from '../../../public/images/homePage/products.png'
import Questions from '@/components/layout/frequentlyquestions/Questions';
export default function Form() {


  return (
    <Box sx={{ p: 5 }}>
      <Typography variant='h1' component='h1' gutterBottom textAlign={'center'}>Forms</Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} md={4}>
        <motion.div 
            variants={cardVariantsRight}
            initial="hidden"
            animate="visible"
          >
          <Card height={400} title={'Weight Loss'} src={imgWeightloss} alt={'Weight Loss'} widthImg={400} heighImg={400} size={true} href={'/form/weight-loss'}/>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={4}>
      <motion.div 
            variants={cardVariantsSmall} 
            initial="hidden"
            animate="visible"
          >
          <Card height={400}title={'Sexual Health'} src={imgSexual} alt={'Sexual Health'} widthImg={200} heighImg={200} size={true} href={'/form/sexual-health'}/>
        </motion.div>
      </Grid>
      <Grid item xs={12} md={4}>
      <motion.div 
            variants={cardVariantsLeft} 
            initial="hidden"
            animate="visible"
          >
            <Card height={400} title={'Hair Growth'}
            src={imgProducts} alt={'Best Seller From Our Pharmacy'} widthImg={100} heighImg={100} size={true} href={'/form/hair-growth'}/>
        </motion.div>
      </Grid>
      {/* <Grid item xs={12} md={4}>
        <motion.div 
            variants={cardVariantsSmall} 
            initial="hidden"
            animate="visible"
          >
            <Card height={200} //title={'Hair Growth For Men'}
            src={imgHairMan} alt={'Hair Growth For Men'} widthImg={100} heighImg={100} size={false} href={'/'}/>
        </motion.div>
      </Grid> */}
      {/* <Grid item xs={12} md={4}>
      <motion.div 
            variants={cardVariantsSmall} 
            initial="hidden"
            animate="visible"
          >
           <Card height={200} //title={'Hair Growth For Women'}
            src={imgHairWomen} alt={'Hair Growth For Women'} widthImg={100} heighImg={100} size={false} href={'/'}/>
        </motion.div>
      </Grid> */}
      <Grid item xs={12} md={12}>
      <motion.div 
            variants={cardVariantsSmall} 
            initial="hidden"
            animate="visible"
          >
            <Card height={300} title={'Hair Growth'}
            src={imgProducts} alt={'Best Seller From Our Pharmacy'} widthImg={100} heighImg={100} size={false} href={'/'}/>
        </motion.div>
      </Grid>
    </Grid>
    <Box>
      <Questions/>
    </Box>
  </Box>
  );
}
