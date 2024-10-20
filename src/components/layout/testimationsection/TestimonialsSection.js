'use client';
import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Drawer } from '@mui/material';
import './testimonials.scss';
import { PlayButtonIcon } from '@/components/commons/icons/Icons';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Video from '@/components/commons/video/Video';

const TestimonialsSection = () => {
  const [scrolling, setScrolling] = useState(true);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentText, setCurrentText] = useState({
    words: "'Weight loss' For years, I didn't wear jeans because they didn't fit.  Now I wear jeans every single day!'",
    persone: "Karim"
  });
  const [fadeOut, setFadeOut] = useState(false);

  // Array of texts to cycle through
  const texts = [{
    words: "'Weight loss' For years, I didn't wear jeans because they didn't fit.  Now I wear jeans every single day!'",
    persone: "Karim"
  },
  {
    words: " For month, I didn't wear jeans because they didn't fit.  Now I wear jeans every single day!'",
    persone: "Amer"
  },
  {
    words: " For hamada, I didn't wear jeans because they didn't fit.  Now I wear jeans every single day!'",
    persone: "Mina"
  },
  {
    words: " For banika, I didn't wear jeans because they didn't fit.  Now I wear jeans every single day!'",
    persone: "Ahmed"
  }];

  // Array of video paths
  const videoPaths = [
    '/videos/ss.mp4',
    '/videos/aa.mp4',
    '/videos/22.mp4',
    '/videos/Bottle.mp4',
    '/videos/Bottle.mp4',
    '/videos/Bottle.mp4',
  ];

  useEffect(() => {
    let animation;
    if (scrolling) {
      animation = requestAnimationFrame(scrollVideos);
    }
    return () => cancelAnimationFrame(animation);
  }, [scrolling]);

  const scrollVideos = () => {
    const videoColumns = document.querySelectorAll('.video-wrapper');
    videoColumns.forEach((column) => {
      column.style.transform = `translateY(${parseInt(column.style.transform.replace('translateY(', '').replace('%)', '')) - 0.5}%)`;
      if (parseInt(column.style.transform.replace('translateY(', '').replace('%)', '')) <= -100) {
        column.style.transform = 'translateY(0%)';
      }
    });
    requestAnimationFrame(scrollVideos);
  };

  const handleMouseEnter = () => setScrolling(false);

  const handleMouseLeave = () => setScrolling(true);

  const handleVideoClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setOpenDrawer(true);
  };

  const closeDrawer = () => setOpenDrawer(false);

  // Text movement
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = texts.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % texts.length;
          return texts[nextIndex];
        });
        setFadeOut(false);
      }, 500); // Delay between fading out and fading in
    }, 2500); // Change text every 2.5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <Grid container sx={{ padding: 5, display: 'flex', flexWrap: 'wrap' }}>

      {/* Left Side */}
      <Grid item xs={12} md={6} sx={{ p: { sm: 2, md: 4 } }}>
        <Box>
          <Typography variant="h5" component='h5' mb={3} color="var(--primary-icon)">
            95% love their experience
          </Typography>
          <Typography variant="h3" component="h3" color="#000">
            2,000,000+ members and counting
          </Typography>
          <Box
            sx={{
              position: 'relative',
              mt: 5,
              overflow: 'hidden',
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                transition: 'transform 0.5s ease, opacity 0.5s ease',
                transform: fadeOut ? 'translateY(-30px)' : 'translateY(0)',
                opacity: fadeOut ? 0 : 1,
                top: 0,
              }}
            >
              {currentText.words}
            </Typography>
            <Typography variant="h5" component="h5" 
              sx={{
                mt: 5,
                transition: 'transform 0.5s ease, opacity 0.5s ease',
                transform: fadeOut ? 'translateX(-60px)' : 'translateX(0)',
                opacity: fadeOut ? 0 : 1,
                top: 0,
              
              }}>
              Joey Med member <strong style={{color:'var(--primary-icon)'}}>{currentText.persone}</strong> 
            </Typography>
          </Box>
        </Box>
      </Grid>

      {/* Right Side */}
      <Grid item xs={12} md={6} sx={{ mt: 3, height: '400px', background: '#ffffff', overflow: 'hidden' }}>
        <Grid container spacing={0} sx={{ height: '100%' }}>
          {videoPaths.map((videoSrc, colIndex) => (
            <Grid
              key={colIndex}
              item
              xs={4}
              className="video-column"
              sx={{ overflow: 'hidden', height: '100%' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Box className="video-wrapper"
                sx={{ transform: 'translateY(0%)' }}>
                {videoPaths.map((src, index) => (
                  <Box key={index} sx={{ position: 'relative', height: 300, mt: 1 }}>
                    <Video
                      className="x"
                      src={src}
                      type="video/mp4"
                      alt="A description of the video content"
                      onClick={() => handleVideoClick(src)}
                      autoPlay={false}
                      loop
                    />
                    <Box onClick={() => handleVideoClick(src)}>
                      <PlayButtonIcon />
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Drawer for Fullscreen Video */}
      <Drawer
        anchor="bottom"
        open={openDrawer}
        onClose={closeDrawer}
        PaperProps={{ sx: { backgroundColor: '#ffffff', height: '100vh' } }}
      >
        <CloseOutlinedIcon onClick={closeDrawer} style={{ cursor: 'pointer' }} />
        <Video
          src={currentVideo}
          type="video/mp4"
          alt="A description of the video content"
          controls
          autoPlay={false}
          loop
        />
      </Drawer>
    </Grid>
  );
};

export default TestimonialsSection;
