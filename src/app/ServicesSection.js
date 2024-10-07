'use client'
import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Card from '@/components/commons/card/Card'; 

export default function ServicesSection({ homeCards }) {
  return (
    <Box sx={{ p: { xs: 2, md: 5 } }} display="flex" flexWrap="wrap" justifyContent={'center'} alignItems={'center'}>
      <Grid container spacing={4}>
        {homeCards.map((c, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div 
              variants={c.animate}
              initial="hidden"
              animate="visible"
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
