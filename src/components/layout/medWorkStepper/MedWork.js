'use client';
import React, { useState } from 'react';
import { Button, Step, Stepper, Typography, StepLabel, StepContent, Drawer, Box } from '@mui/material';
import AppButton from '../../commons/appbutton/AppButton';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import LocalPharmacyOutlinedIcon from '@mui/icons-material/LocalPharmacyOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { motion, AnimatePresence } from 'framer-motion';
import './medWork.scss';
import Link from 'next/link';
import HeartBeats from '../navbar/HeartBeats';

export default function MedWork({ steps }) {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleNext = () => {
        setCompleted((prevCompleted) => ({ ...prevCompleted, [activeStep]: true }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setCompleted({});
        setActiveStep(0);
    };

    const stepIcons = {
        1: completed[0] ? <CheckCircleOutlineOutlinedIcon sx={{ color: '#00d8ff', fontSize: '20px' }} /> : <MedicalServicesOutlinedIcon sx={{ color: '#e48a81', fontSize: '22px' }} />,
        2: completed[1] ? <CheckCircleOutlineOutlinedIcon sx={{ color: '#00d8ff', fontSize: '20px' }} /> : <LocalPharmacyOutlinedIcon sx={{ color: '#e48a81', fontSize: '22px' }} />,
        3: completed[2] ? <CheckCircleOutlineOutlinedIcon sx={{ color: '#00d8ff', fontSize: '20px' }} /> : <HealingOutlinedIcon sx={{ color: '#e48a81', fontSize: '22px' }} />,
        4: completed[3] ? <CheckCircleOutlineOutlinedIcon sx={{ color: '#00d8ff', fontSize: '20px' }} /> : <AssignmentOutlinedIcon sx={{ color: '#e48a81', fontSize: '22px' }} />,
        5: completed[4] ? <CheckCircleOutlineOutlinedIcon sx={{ color: '#00d8ff', fontSize: '20px' }} /> : <CheckCircleOutlineOutlinedIcon sx={{ color: '#e48a81', fontSize: '22px' }} />,
    };

    const stepVariants = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
    };

    return (
        <Box className="medwork-container" sx={{ p: 4, backgroundColor: '#f5f5f5', borderRadius: '12px' }}>
            <Typography variant="h2" className="medwork-title" sx={{ color: '#001d4a', mb: 2 }}>
                How Joey Med Works
            </Typography>
            <Typography variant="h5" className="medwork-subtitle" sx={{ color: '#001d4a', mb: 4 }}>
                Joey Med makes it easy to get started with no insurance required
            </Typography>
            <Box className="medwork-stepper-container">
                <Stepper activeStep={activeStep} orientation="vertical" className="medwork-stepper">
                    {steps.map((step, index) => (
                        <Step key={step.label} className="medwork-step">
                            <StepLabel
                                optional={index === 4 ? (
                                    <Typography variant="caption" sx={{ color: '#e48a81' }}>
                                        Last step
                                    </Typography>
                                ) : null}
                                icon={stepIcons[index + 1]}
                            >
                                <Typography className="medwork-step-label" variant='h4' component='h4' sx={{ color: '#001d4a' }}>
                                    {step.label}
                                </Typography>
                            </StepLabel>
                            <StepContent>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        variants={stepVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                    >
                                        <Box className="medwork-step-content" sx={{ pl: 4, pr: 4, pt: 2, pb: 2, backgroundColor: '#e4e4e4', borderRadius: '8px' }}>
                                            <Typography variant='h6' component='h6' sx={{ width: '100%', color: '#001d4a' }}>
                                                {step.description}
                                            </Typography>
                                            <img
                                                src={step.image}
                                                alt=""
                                                className="medwork-step-image"
                                                style={{ width: '100%', borderRadius: '8px', marginTop: '20px' ,background:'red',opacity:0.6}}
                                            />
                                        </Box>
                                    </motion.div>
                                </AnimatePresence>
                                <Box className="medwork-buttons-container" sx={{ mt: 2 }}>
                                    <Button
                                        sx={{ color: '#ffffff', background: '#e48a81', textTransform: 'capitalize', mr: 2, borderRadius: '8px', padding: '8px 16px' }}
                                        variant="contained"
                                        onClick={index === steps.length - 1 ? () => setDrawerOpen(true) : handleNext}  // Open Drawer on Finish
                                        className="medwork-button-next"
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        sx={{ color: '#001d4a', textTransform: 'capitalize', borderRadius: '8px' }}
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        className="medwork-button-back"
                                    >
                                        Back
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>

                {/* Drawer Component for Completion */}
                <Drawer
                    anchor="top"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                    sx={{ '.MuiDrawer-paper': { padding: '20px', backgroundColor: '#ffff' } }}
                >
                    <Typography variant="h4" sx={{ color: '#001d4a', textAlign: 'center' }}>
                        All steps completed - you're finished!
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#001d4a', textAlign: 'center', marginTop: '20px' }}>
                        Did you understand our steps?
                    </Typography>
                    <HeartBeats/>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Button color="error" onClick={() => {
                            handleReset();
                            setDrawerOpen(false);
                        }} className="medwork-button-reset" sx={{ textTransform: 'capitalize', mr: 2, color:'#e48a81' }}>
                            No
                        </Button>
                        <Link href="./form">
                            <AppButton title='start now' color='white' href='/form' />
                        </Link>
                    </Box>
                </Drawer>
            </Box>
        </Box>
    );
}
