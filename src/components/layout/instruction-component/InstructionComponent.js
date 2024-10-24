import { Box, Typography } from '@mui/material';
import InstructionCard from '@/components/commons/instructioncard/InstructionsCard';

const InstructionComponent = ({ title, description, instructions }) => {
  return (
    <Box sx={{ mt: 4 }}>
        
      {/* Title Section */}
      <Typography variant="h2" component="h2" sx={{ textAlign: 'center' }}>
        {title}
      </Typography>

      {/* Description Section */}
      <Typography variant="h5" component="h5" sx={{ textAlign: 'center', mt: 1 }}>
        {description}
      </Typography>

      {/* Instruction Cards Section */}
      <Box
        sx={{
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 3, md: 7 },
          flexWrap: 'wrap',
        }}
      >
        {instructions.map((instruction, index) => (
          <InstructionCard
            key={index}
            title={instruction.title}
            content={instruction.content}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InstructionComponent;
