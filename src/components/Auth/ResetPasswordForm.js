'use client'
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const StyledForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '0 20px',
  background: 'linear-gradient(120deg, #f0f4f8 0%, #fafafa 100%)', // Light gradient background
});

const StyledTextField = styled(TextField)({
  marginBottom: '20px',
  width: '100%',
  maxWidth: '400px',
  '& .MuiInputBase-root': {
    borderRadius: '8px',
  },
  '& .MuiInputBase-input': {
    padding: '14px',
    fontSize: '16px',
  },
});

const StyledButton = styled(Button)({
  width: '100%',
  maxWidth: '400px',
  padding: '14px',
  fontSize: '16px',
  backgroundColor: '#000000', // Dark black button background
  color: '#ffffff',
  borderRadius: '8px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#333333',
  },
});
function ResetPasswordForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Handle reset password logic
    console.log('Reset Password Data:', data);
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Typography variant="h3" gutterBottom position={'absolute'} top={40}>Joey med </Typography>
      <Link href={'/'}><CloseOutlinedIcon sx={{position:'absolute',top:40, left:40, color:'black'}}/> </Link>
      <Typography variant="h1" gutterBottom position={'absolute'} top={180}>Let’s get you logged in</Typography>
      <Typography variant="subtitle1" gutterBottom position={'absolute'} top={220} padding={2}>  Enter your email address and we will send you instructions to reset your password.</Typography>
      {/* <Typography variant="h4" gutterBottom>Let’s get you logged in</Typography> */}
      <Typography variant="subtitle1" gutterBottom>
       Reset your password now
      </Typography>
      <StyledTextField
        label="Enter your email address"
        variant="outlined"
        fullWidth
        {...register('email', { 
          required: 'Email is required', 
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Enter a valid email address'
          }
        })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Box sx={{ display:'flex', flexDirection:'column', alignItems:'center',gap:1

      }}>
        <StyledButton type="submit" variant="contained">
          Send email
        </StyledButton>
        {/* <Button className="responsive-appbar-button">
          Send email
        </Button> */}
        <Button className="responsive-appbar-button" 
          component={Link}
          href="/sign-in">
          Back to login
        </Button>
      </Box>
    </StyledForm>
  );
}

export default ResetPasswordForm;
