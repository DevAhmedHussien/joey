'use client'
import { useForm } from 'react-hook-form';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/system';
import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import googleImg from '../../../public/images/googleimg.png'
import Image from 'next/image';

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

function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setFocus } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  // onSubmit function that sends login details to the backend API
  const onSubmit = async data => {
    if (!showPassword) {
      setShowPassword(true);
      setFocus('password');
    } else {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: data.email,
            password: data.password,
          }),
        });

        if (!response.ok) {
          throw new Error('Login failed. Check your credentials.');
        }

        const result = await response.json();
        
        if (result.token) {
          console.log('Login successful', result.token);
          localStorage.setItem('authToken', result.token); // Securely store token (you may want to use httpOnly cookies for production)
          // Redirect user after successful login
          window.location.href = '/dashboard'; // Adjust according to your app
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    }
  };
  return (
    <> 
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Typography variant="h3" gutterBottom  position={'absolute'} top={40}>Joey med </Typography>
        <Link href={'/'}><CloseOutlinedIcon sx={{position:'absolute',top:40, left:40, color:'black'}}/> </Link>
        <Typography variant="h1" gutterBottom position={'absolute'} top={170}>Welcome back</Typography>
        <Typography variant="subtitle1" gutterBottom position={'absolute'} top={220}>Let’s get you logged in.</Typography>
        <StyledTextField
            label="Email or phone number"
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
        {showPassword && (
            <StyledTextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            {...register('password', { 
                required: 'Password is required',
                minLength: {
                value: 8,
                message: 'Password must be at least 8 characters'
                }
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
            />
        )}
        <StyledButton type="submit" variant="contained">
            {showPassword ? 'Log in and continue' : 'Continue'}
        </StyledButton>
        <StyledButton type="submit" variant="contained" sx={{mt:1, display:"flex",gap:2}}>
        {/* <GoogleIcon style={{ color: '#4285F4'  }}  />  */}
        
          <Image
          	loading="lazy"
              src={googleImg}
              width={32}
              height={32}
              alt="Joeymed logo"
              />
        <span> Sign in with Google</span>

        {/* <Typography style={{ fontWeight: '500' }}>
          Sign in with Google
        </Typography>  */}
      </StyledButton>
        <Box sx={{ mt:2 ,display:'flex', justifyContent:'center', alignItems:'center',gap:5}}>
          <Button className="responsive-appbar-button" 
            component={Link} 
            href="/password-reset" >
              Forgot password?
          </Button>
          <Button className="responsive-appbar-button" 
            component={Link} 
            href="/sexual-health">
            Not you? Log in here
          </Button>
        </Box>
       {/* <ResetPasswordForm/> */}
      
     
    </StyledForm>
    </>
   
  );
}

export default LoginForm;
