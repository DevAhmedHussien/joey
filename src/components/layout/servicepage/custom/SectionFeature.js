import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function SectionFeature({images}) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',

      }}
    >
      {/* Image Row */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        {images.map((image, index) => (
          <Box key={index} width={'33.5%'} height={'100%'}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              style={{ width:'100%' ,height:'100%'}} // Remove margin between images
            />
          </Box>
        ))}
      </Box>

      {/* Features Row */}
      <Box
        sx={{
          minHeight: 250,
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          position: 'absolute',
          top: 350,
        }}
      >
        <Box sx={{ textAlign: 'center', padding: '0 20px' }}>
          <Typography variant="h6" component="div" gutterBottom>
            <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🧴</Box>
            Spray, serum, and oral meds available
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', padding: '0 20px' }}>
          <Typography variant="h6" component="div" gutterBottom>
            <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>📦</Box>
            Free shipping in discreet packaging
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center', padding: '0 20px' }}>
          <Typography variant="h6" component="div" gutterBottom>
            <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>💬</Box>
            Unlimited messaging with a provider
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
