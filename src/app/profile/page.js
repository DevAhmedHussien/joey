'use client'
import React, { useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import Image from 'next/image';

const ColorPalette = {
  background: '#f5f5f5',  // Light Gray
  border: '#e4e4e4',      // Another Light Gray for borders
  primary: '#00d8ff',     // Bright Teal
  accent: '#e48a81',      // Coral
  textPrimary: '#001d4a', // Dark Blue for primary text
};

const SidebarButton = styled(IconButton)({
  position: 'absolute',
  top: '10px',
  left: '10px',
  zIndex: 1000,
});

const Profile = () => {
  const [activeSection, setActiveSection] = useState('My Team'); // State to manage active sidebar item
  const [collapsed, setCollapsed] = useState(true); // Sidebar starts collapsed
  const [hovered, setHovered] = useState(false); // State to manage hover effect on sidebar

  // Function to handle button clicks and update the sidebar
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: ColorPalette.background }}>
      {/* Sidebar */}
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: 'relative',
          width: collapsed && !hovered ? '70px' : '250px',
          transition: 'width 0.3s ease-in-out',
          backgroundColor: '#fff',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'start', justifyContent: 'center' }}>
          <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Image
              src={'/images/logo.png'}
              width={120}
              height={65}
              	loading="lazy"
              alt="Joeymed logo"
              style={{ width: collapsed && !hovered ? '100%' : '100%', transform: collapsed && !hovered ? 'scale(0.6)' : 'scale(1.3)', transformOrigin: 'center' }}
            />
          </Box>
          <SidebarButton onClick={toggleSidebar} color="primary">
            {collapsed ? (
              <MenuIcon sx={{ color: ColorPalette.textPrimary }} />
            ) : (
              <MenuOpenOutlinedIcon sx={{ color: ColorPalette.textPrimary }} />
            )}
          </SidebarButton>
        </Box>

        <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Button
            startIcon={<PersonIcon />}
            onClick={() => handleButtonClick('My Team')}
            sx={{
              justifyContent: hovered || !collapsed ? 'flex-start' : 'center',
              fontWeight: 'bold',
              color: activeSection === 'My Team' ? ColorPalette.accent : ColorPalette.textPrimary,
              backgroundColor: activeSection === 'My Team' ? '#e9ecef' : 'transparent',
              mb: 1,
              textAlign: 'left',
              width: '100%',
              transition: 'background-color 0.3s ease, margin-left 0.3s ease, justify-content 0.3s ease',
              '&:hover': {
                backgroundColor: ColorPalette.accent,
                color: '#fff',
                // ml: collapsed && !hovered ? 2 : 0,
              },
            }}
          >
            {(hovered || !collapsed) && 'My Team'}
          </Button>
          <Button
            startIcon={<SearchIcon />}
            onClick={() => handleButtonClick('Appointments')}
            sx={{
              justifyContent: hovered || !collapsed ? 'flex-start' : 'center',
              fontWeight: 'bold',
              color: activeSection === 'Appointments' ? ColorPalette.accent : ColorPalette.textPrimary,
              backgroundColor: activeSection === 'Appointments' ? '#e9ecef' : 'transparent',
              mb: 1,
              textAlign: 'left',
              width: '100%',
              transition: 'background-color 0.3s ease, margin-left 0.3s ease, justify-content 0.3s ease',
              '&:hover': {
                backgroundColor: ColorPalette.accent,
                color: '#fff',
                // ml: collapsed && !hovered ? 2 : 0,
              },
            }}
          >
            {(hovered || !collapsed) && 'Appointments'}
          </Button>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: ColorPalette.textPrimary }}>
            {activeSection}
          </Typography>
        </Box>
        {/* Placeholder for Additional Content */}
        <Box sx={{ backgroundColor: '#fff', borderRadius: 2, p: 3, boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
          {/* Additional content goes here */}
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
