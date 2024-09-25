'use client';
import React, { useState } from 'react';
import { Box, Typography, Slider } from '@mui/material';
import './WeightLossComponent.scss'; // Import the SCSS file

function WeightLossComponent() {
  const [weight, setWeight] = useState(252);

  const handleSliderChange = (event, newValue) => {
    setWeight(newValue);
  };

  const calculateWeightLoss = (currentWeight) => {
    return Math.round(currentWeight * 0.2); // 20% weight loss calculation
  };

  return (
    <Box className="weight-loss-container">
      <Box className="left-section">
        <Typography variant="h1" component='h1'>
          20% 
        </Typography>
        <Typography variant="body1">
          On average, people on Wegovy or Zepbound lose 15-20% of their weight in a year*.
        </Typography>
      </Box>

      <Box className="right-section">
        <Box className="slider-box">
          <Typography variant="body1" className="slider-title">
            Select your current weight
          </Typography>
          <Typography variant="h4" className="slider-value">
            {weight} lbs
          </Typography>
          <Slider
            value={weight}
            onChange={handleSliderChange}
            min={100}
            max={400}
            className="slider-element"
          />
          <Typography variant="body1">
            Weight you could lose (lbs):
          </Typography>
          <Typography variant="h4" className="weight-loss-result">
            {calculateWeightLoss(weight)} lbs
          </Typography>
        </Box>

        <Typography variant="body2" className="disclaimer">
          *In a 68- and 72-week clinical trial studying Wegovy (2.4 mg) and Zepbound (15 mg) in patients without diabetes 
          and with BMI ≥30, or BMI ≥27 with a weight-related condition, the average weight loss was 15% and 20%, when 
          paired with diet and exercise changes (compared to 2.4% and 3.1%, respectively, with diet and exercise alone).
        </Typography>
      </Box>
    </Box>
  );
}

export default WeightLossComponent;
