'use client';

import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';

export default function Form() {
  const [loading, setLoading]=useState(false)
  useEffect(() => {
  setLoading(true)
    // You can load external JotForm scripts here if necessary
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);
    setLoading(false)

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h1" gutterBottom>
        Connect to Doctors
      </Typography>
      <iframe
        id="JotFormIFrame-242244243723147"
        title="Joey Med's Hair Growth Consultation"
        allowTransparency="true"
        allow="geolocation; microphone; camera; fullscreen"
        src="https://form.jotform.com/242244243723147"
        frameBorder="0"
        style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
        scrolling="no"
      ></iframe>
    </Container>
  );
}
