
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Question from './Question';


export default function Questions({ questions=[] }) {

    return (
        <>
         <Typography variant='h2' component='h2' mt={2} sx={{ textAlign: 'center'}} >
                Frequently Asked  Questions
            </Typography>
            <Box p={5}>
                {
                    questions.map((q, index) => (
                        <Question key={index} ques={q.question} ans={q.answer} />
                    ))
                }
            </Box>
        </>
        
    );
}
