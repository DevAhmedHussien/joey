"use client"
import { useForm } from 'react-hook-form';
import { Box, Button, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import CustomTextField from '../../components/commons/cutomfield/CustomField';
import AppButton from '../commons/appbutton/AppButton';
const ContactForm = () => {
   
   
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
          padding: 2,
          borderRadius: 2,
          boxShadow: 3,
          background:'var(--primary-background2)'
        }}
      >
        <Typography variant="h3" component='h3' gutterBottom>
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
          {/* <Button
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<SendIcon />}
            sx={{ marginTop: 2 }}
          >
            Send Message
          </Button> */}
          <Box width={'10%'}>
            <AppButton title={'Send'} type="submit"/>

          </Box>
        </form>
      </Box>
    </motion.div>
  );
};

export default ContactForm;
