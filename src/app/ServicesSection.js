'use client'
import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Card from '@/components/commons/card/Card'; // Make sure Card is imported correctly

export default function ServicesSection({ homeCards }) {
  return (
    <Box sx={{ p: { xs: 2, md: 5 } }} display="flex" flexWrap="wrap" >
      <Grid container spacing={4}>
        {homeCards.map((c, i) => (
          <Grid item xs={12} md={4} key={i}>
            <motion.div 
              variants={c.animate}
              initial="hidden"
              animate="visible"
              // whileHover={{ scale: 1.05 }} // Optional hover animation
              // transition={{ duration: 0.5 }}
            >
              <Card 
                title={c.title} 
                src={c.src} 
                alt={c.alt} 
                size={c.size} 
                href={c.href} 
                video={c.video} 
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
