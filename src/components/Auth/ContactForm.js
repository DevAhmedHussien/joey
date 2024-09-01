import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import CustomTextField from '../../components/commons/cutomfield/CustomField';

import { useTheme } from '@mui/material';
import { tokens } from '../../theme/theme';
const ContactForm = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
   
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission logic here (e.g., send data to an API)
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          backgroundColor: colors.primary[1000],
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          backdropFilter: 'blur(10px)'
        }}
      >
        <Typography variant="h3" component='h3' gutterBottom color={colors.primary[200]}>
          Send Us a Message
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CustomTextField
            label="Your Name"
            register={register('name', { required: 'Name is required' })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
          <CustomTextField
            label="Your Email"
            type="email"
            register={register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Entered value does not match email format'
              }
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <CustomTextField
            label="Subject"
            register={register('subject')}
          />
          <CustomTextField
            label="Message"
            multiline
            rows={4}
            register={register('message', { required: 'Message is required' })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
            sx={{ marginTop: 2 }}
          >
            Send Message
          </Button>
        </form>
      </Box>
    </motion.div>
  );
};

export default ContactForm;
