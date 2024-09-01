'use client';
import React, { useState } from 'react';
import { Box, Typography, Slider, Grid } from '@mui/material';
import AppButton from '@/components/commons/appbutton/AppButton';

function WeightLossComponent() {
  const [weight, setWeight] = useState(252);

  const handleSliderChange = (event, newValue) => {
    setWeight(newValue);
  };

  const calculateWeightLoss = (currentWeight) => {
    return Math.round(currentWeight * 0.2); // 20% weight loss calculation
  };

  return (
    <> 
    <Box 
    sx={{
      // mt:25,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',  // Semi-transparent dark overlay
      padding: '160px 30px 0 30px',
      // borderRadius: '12px',
      width: '100%',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      display:"flex",
      justifyContent:'center',
      alignItems:'start',
      flexWrap:"wrap",
      gap:4
    }}
  >
    <Box width={'55%'}
    sx={{
      // backgroundImage: 'url(/images/homePage/sexual.png)',  // Background image path
      // backgroundSize: '200px 400px',
      // backgroundPosition: 'right',
      // backgroundRepeat: 'no-repeat',
      }}>
      <Typography variant="h1" component='h1' sx={{ fontSize:250, color: '#00d8ff' }}>
        20% 
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.25rem', marginBottom: '40px', color: '#f5f5f5' }}>
        On average, people on Wegovy or Zepbound lose 15-20% of their weight in a year*.
      </Typography>
        {/* <AppButton title='start now' color='black' /> */}
    </Box>

    <Box width={'40%'}>
      <Box 
            sx={{ 
              padding: '20px', 
              backgroundColor: '#001d4a', 
              borderRadius: '12px', 
              textAlign: 'center', 
              marginBottom: '30px',
            }}
          >
            <Typography variant="body1" sx={{ marginBottom: '20px', color: '#e48a81' }}>
              Select your current weight
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: '20px', fontSize: '3rem', color: '#00d8ff' }}>
              {weight} lbs
            </Typography>
            <Slider
              value={weight}
              onChange={handleSliderChange}
              min={100}
              max={400}
              sx={{ 
                marginBottom: '20px', 
                color: '#e48a81', 
                '& .MuiSlider-thumb': {
                  backgroundColor: '#e48a81',
                  boxShadow: '0 0 0 8px rgba(228, 138, 129, 0.2)', // Glow effect
                },
                '& .MuiSlider-track': {
                  border: 'none',
                  backgroundColor: '#e48a81',
                },
                '& .MuiSlider-rail': {
                  opacity: 0.5,
                  backgroundColor: '#f5f5f5',
                }
              }}
            />
            <Typography variant="body1" sx={{ marginBottom: '10px', color: '#f5f5f5' }}>
              Weight you could lose (lbs):
            </Typography>
            <Typography variant="h4" sx={{ fontSize: '3rem', color: '#00d8ff' }}>
              {calculateWeightLoss(weight)} lbs
            </Typography>
          </Box>

          <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#e4e4e4', marginBottom: '40px' }}>
            *In a 68- and 72-week clinical trial studying Wegovy (2.4 mg) and Zepbound (15 mg) in patients without diabetes 
            and with BMI ≥30, or BMI ≥27 with a weight-related condition, the average weight loss was 15% and 20%, when 
            paired with diet and exercise changes (compared to 2.4% and 3.1%, respectively, with diet and exercise alone).
          </Typography>
      </Box>
     
      </Box>

     
    </>
   
  );
}

export default WeightLossComponent;
