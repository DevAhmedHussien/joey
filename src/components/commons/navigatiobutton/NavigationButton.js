import React from 'react';
import Button from '@mui/material/Button';
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';
import Link from 'next/link';
//** Theme part */
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

const NavigationButton = ({ href='' }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      <Link href={href}>
        <Button className="custom-button" sx={{color:colors.primary[200]}}>
          <DoubleArrowOutlinedIcon className="arrow-icon " color='black' />
        </Button>
      </Link>
    </>
    
  );
};

export default NavigationButton;
