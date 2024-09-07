import Video from '@/components/commons/video/Video';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function SectionFeature({ images }) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: '40px 20px', // Added padding for better spacing
      }}
    >
      {/* Image and Video Row */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          // maxWidth: '1200px', // Set a max-width for better responsiveness
          gap: '20px', // Adds space between images/videos
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            // width={'40%'}
            // height={'100%'}
            position={'relative'}
            sx={{
              overflow: 'hidden',
                  // boxShadow: '0px 1px 7px 0px #e58a81',


            }}
          >
            {image.type === 'img' ? (
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={500}
                height={500}
                objectFit="cover"
                quality={100}
                loading="lazy"
                style={{ width: '100%', height: '100%'}}
              />
            ) : (
              <Box 
                sx={{
                  width:450,
                  // height:400,
                  transform: 'scale(1.02)',
                  borderRadius:5,
                //   display:'flex',
                //   justifyContent:'center' ,alignItems:'center',
                //   boxShadow: '0px 1px 7px 0px #black'
                }} 
                >
                <Video
                  src={image.src}
                  type="video/mp4"
                  alt="A description of the video content"
                  autoPlay={true}
                  loop
                  muted
                  // style={{boxShadow: '0px 1px 7px 0px #e58a81'}}
               
                />
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Features Row */}
      <Box
        sx={{
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
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
