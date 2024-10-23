'use client'

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { motion } from 'framer-motion';

export default function Question({ ques, ans }) {
   
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    const variants = {
        hidden: { opacity: 0, height: 0 },
        visible: { 
            opacity: 1, 
            height: 'auto',
            transition: { 
                type: 'spring', 
                stiffness: 100, 
                damping: 20,
                duration: 0.5, 
                delay: 0.1
            } 
        }
    };

    return (
        <Accordion 
            sx={{  borderRadius: '8px', marginBottom: '10px' }}
            expanded={expanded}
            onChange={handleChange}
        >
            <AccordionSummary
                expandIcon={ <ArrowDropDownIcon sx={{ color: 'var(--primary-icon)'}} />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                    transition: 'background-color 0.3s ease-in-out',
                    '& .MuiAccordionSummary-content': {
                        alignItems: 'center',
                    },
                    '&:hover': {
                        backgroundColor: 'var(--primary-background2)',
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GppGoodIcon sx={{ fontSize: '20px', color: 'var(--primary-icon)' }} />
                    <Typography variant='h5' component='h5' >{ques}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{  padding: '0px 20px' }}>
                <motion.div
                    initial="hidden"
                    animate={expanded ? "visible" : "hidden"}
                    variants={variants}
                >
                    <Typography  variant='p' component='p' sx={{  fontSize: '16px', lineHeight: '1.5', padding: '15px 0' }}>
                        {ans}
                    </Typography>
                </motion.div>
            </AccordionDetails>
        </Accordion>
    );
}
