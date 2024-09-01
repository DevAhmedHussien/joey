import React from 'react';
import Button from '@mui/material/Button';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import Link from 'next/link';

const NavigationButton = ({ href='/' }) => {
  return (
    <>
      <Link href={href}>
        <Button className="custom-button" sx={{color:'black'}}>
          <DoubleArrowOutlinedIcon className="arrow-icon " color='black' />
        </Button>
      </Link>
    </>
    
  );
};

export default NavigationButton;
