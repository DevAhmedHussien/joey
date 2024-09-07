import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image'; // Assuming you're using Next.js for image optimization
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';
//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';
import ImageWithSpinner from '../image/ImageWithSpinner';
import Video from '../video/Video';

const Card = ({
  width,
  height,
  title ,
  size,
  src,
  alt,
  widthImg,
  heighImg,
  href,
  video = false
}) => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box 
      sx={{ 
        position: 'relative',
        textAlign: 'center', 
        borderRadius: 2, 
        boxShadow: 3, 
        width: width,
        minHeight: height,
        overflow: 'hidden', /* Ensures the image stays within the card */
        transition: 'transform 0.3s ease-in-out', /* Smooth scaling transition */
        '&:hover .card-image img': {
          transform: 'scale(1.1)', /* Scale the image slightly on hover */
        },
      }}
    >
      <Typography variant="h3" component='h3'gutterBottom position={'absolute'} p={2} zIndex={2} color={colors.primary[200]}>
       {title}
      </Typography>
      <Box
        className="card-image"
        sx={{
          width:'100%',
          height: height,
          overflow: 'hidden', /* Ensures the image stays within the card */
          transition: 'transform 0.3s ease-in-out', /* Smooth scaling transition */
        }}
      >
        {/* {video 
        ?   */}
        <Video
          // className="video-thumbnail"
          src={src}
          type="video/mp4"
          alt="A description of the video content"
          // controls
          autoPlay={true}
          loop
        />
        {/* // :
        // <ImageWithSpinner src={src}
        // alt={alt} />
        // } */}
        
      </Box>
      <Box position={'absolute'} bottom={5} right={5} zIndex={6}> 
        {size ? 
        <AppButton title="start now" color="black" href={href} /> : <NavigationButton  href={href}/>}
      </Box>
    </Box>
  );
};

export default Card;
