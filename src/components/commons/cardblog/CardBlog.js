'use client'
import React, { useState } from 'react';
import { Box, Typography, Avatar, Drawer, IconButton } from '@mui/material';
import Image from 'next/image';
import './cardBlog.scss';
import AppButton from '../appbutton/AppButton';
import NavigationButton from '../navigatiobutton/NavigationButton';
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Icon for closing the drawer

const BlogCard = ({
  width = 300, 
  height = 350,
  imageSrc = '/images/homePage/products.png',
  profilePicSrc = '/images/homePage/products.png',
  imageAlt = 'Blog Image',
  readTime,
  title,
  comments = "Sample comments here",
  size
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to manage Drawer open/close
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle the Drawer
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      {/* Blog Card */}
      <Box className="blog-card" onClick={toggleDrawer(true)}>
        <Box className="image-container">
        <Image
          src="/images/homePage/appear.jpg" 
          alt={imageAlt}
          layout="fill"
          objectFit="cover"  
          quality={100}
        />
        </Box>

        {/* Profile picture and comments */}
        <Box className="blog-content">
          <Box className="blog-info">
            <Avatar 
              alt="Profile Picture" 
              src={profilePicSrc}
              className="profile-pic"
            />
            <Box className="profile-details">
              <Typography variant="h6" component="h6" className="profile-name">
                ahmed
              </Typography>
              <Typography variant="body2" className="profile-role">
                Joey Member
              </Typography>
            </Box>
          </Box>

          <Box className="blog-footer">
            <Typography variant="body2" className="comments">
              "{comments}"
            </Typography>
            <Box className="button-wrapper" >
              {size ? <AppButton title="start now" /> : <NavigationButton />}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Drawer Component */}
     {/* Drawer Component */}
<Drawer 
  anchor="left" 
  open={drawerOpen} 
  onClose={toggleDrawer(false)} 
  PaperProps={{ 
    sx: { 
      width: '70%', 
      height: '300px' 
    } 
  }}
>
  <Box className="drawer-content" role="presentation">
    <IconButton onClick={toggleDrawer(false)} className="close-button">
      <CloseIcon />
    </IconButton>

    <Box className="drawer-details">
      <Box className="blog-info" sx={{display:'flex', alignItems:'start',gap:1 }}>
        <Avatar 
          alt="Profile Picture" 
          src={profilePicSrc}
          className="profile-pic"
        />
        <Box className="profile-details">
          <Typography variant="h6" component="h6" className="profile-name">
            ahmed
          </Typography>
          <Typography variant="body2" className="profile-role">
            Joey Member
          </Typography>
        </Box>
      </Box>
      <Typography variant="h4" component="h4">
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        Read time: {readTime}
      </Typography>
      <Typography variant="body2" paragraph>
        Comments: {comments}
      </Typography>
    </Box>
  </Box>
</Drawer>

    </>
  );
};

export default BlogCard;
