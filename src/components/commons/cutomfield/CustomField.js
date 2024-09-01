import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material';
import { tokens } from '../../../theme/theme';

const CustomTextField = ({ label, register, error, helperText, ...props }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <TextField
      fullWidth
      label={label}
      variant="outlined"
      margin="normal"
      {...register}
      error={error}
      helperText={helperText}
      sx={{
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: colors.primary[1600],
          },
        },
        '& .MuiInputLabel-root': {
          '&.Mui-focused': {
            color: colors.primary[1600],
          },
        },
      }}
      {...props}
    />
  );
};

export default CustomTextField;
