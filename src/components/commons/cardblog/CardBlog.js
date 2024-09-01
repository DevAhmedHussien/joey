import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import Image from 'next/image';
import './cardBlog.scss';
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';

const BlogCard = ({
    width = 500, 
    height = 300, 
    imageSrc = '/images/homePage/products.png',  // Ensure the path is correct
    profilePicSrc = '/images/profilePic.png', // Path to the profile picture
    imageAlt = 'Blog Image',
    readTime,
    title,
    comments = "ay haryharyharyharyharyhary ",
    size
}) => {
  return (
    <Box 
      className="blog-card" 
      sx={{ 
        position: 'relative',
        cursor: 'pointer', 
        width: width, 
        height: height,
        borderRadius: '8px', 
        overflow: 'hidden',
        color: '#fff',
        '&:hover .image-container': {
          transform: 'scale(1.1)',
        }
      }}
    >
      {/* Image container for scaling effect */}
      <Box 
        className="image-container"
        sx={{ 
          position: 'relative',
          width: '100%', 
          height: '70%', 
          overflow: 'hidden',
          transition: 'transform 0.3s ease-in-out',  
        }}
      >
        <Image
          src="/images/homePage/appear.jpg" 
          alt={imageAlt}
          layout="fill"
          objectFit="cover"  
          quality={100}
        />
      </Box>

      {/* Profile picture and comments */}
      <Box 
        sx={{ 
          position: 'relative',
          backgroundColor: '#f5f5f5',
          borderRadius: '0 0 8px 8px',
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'start',
          height: '30%',
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'start', justifyContent: 'start', width: '100%' }}>
          <Avatar 
            alt="Profile Picture" 
            src={profilePicSrc}
            sx={{ width: 40, height: 40 }}
          />
          <Box position='relative'>
            <Typography variant="h6" component="h6" color='black'//{colors.primary[200]}
             >
              ahmed 
            </Typography>
            <Typography sx={{position:'absolute', top: '15px', width: '100px'}} variant="body2" component='body2' color={'purple'} mt={1} fontSize={10}>
             Joey Member
            </Typography>
          </Box>
         
        </Box>
        <Box sx={{ padding:'0 10px' ,mt: 2, width: '100%', display: 'flex', gap: 2, alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" textAlign={'left'} color={'black'} sx={{ width: '70%' }}>
            "{comments}"
          </Typography>

          {/* Action Button in the bottom left */}
          <Box sx={{ position: 'absolute', bottom: 8, right: 8 }}>
            {size ? <AppButton title="start now" color="black" /> : <NavigationButton />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BlogCard;
