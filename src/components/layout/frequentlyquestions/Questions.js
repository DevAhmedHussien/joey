'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Question from './Question';
import { tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';

export default function Questions({ questions=[] }) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box variant='div'
            sx={{
                mt: 5
            }}>
            <Typography variant='h2' sx={{ textAlign: 'center'}} color={colors.primary[200]}>
                Frequently Asked 
                <span> Questions</span> 
            </Typography>
            <Typography variant='h5' sx={{ textAlign: 'center', mt: 1 }} color={colors.primary[200]}>
                More questions and answers on 
                <span color={colors.primary[1600]}> our FAQ page</span>
            </Typography>
            <Box variant='div'
                sx={{
                    m: '70px auto',
                    width: '90%',
                }}>
                {
                    questions.map((q, index) => (
                        <Question key={index} ques={q.question} ans={q.answer} />
                    ))
                }
            </Box>
        </Box>
    );
}
