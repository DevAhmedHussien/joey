import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Box from '@mui/material/Box';
import GppGoodIcon from '@mui/icons-material/GppGood';
import { useTheme } from '@mui/material';
import { tokens } from '../../../theme/theme';
import { motion } from 'framer-motion';

export default function Question({ ques, ans }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
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
                delay: 0.1 // slight delay for smoother transition
            } 
        }
    };

    return (
        <Accordion 
            sx={{ background: colors.primary[100], borderRadius: '8px', marginBottom: '10px' }}
            expanded={expanded}
            onChange={handleChange}
        >
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon sx={{ color: colors.primary[1600] }} />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                    '& .MuiAccordionSummary-content': {
                        alignItems: 'center',
                    },
                    '&:hover': {
                        backgroundColor: '#f5f5f5',
                    },
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GppGoodIcon sx={{ fontSize: '20px', color: colors.primary[1600] }} />
                    <Typography variant='h4' component='h4' sx={{ color: colors.primary[200]}}>{ques}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: colors.primary[100], padding: '0px 20px' }}>
                <motion.div
                    initial="hidden"
                    animate={expanded ? "visible" : "hidden"}
                    variants={variants}
                >
                    <Typography sx={{ color: colors.primary[200], fontSize: '16px', lineHeight: '1.5', padding: '15px 0' }}>
                        {ans}
                    </Typography>
                </motion.div>
            </AccordionDetails>
        </Accordion>
    );
}
