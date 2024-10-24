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
        padding: { xs: '20px 10px', sm: '40px 20px' },
      }}
    >
      {/* Image and Video Row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: '20px',
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0px 0px 20px 2px rgba(0,0,0,0.1)',
              borderRadius: 2,
              maxWidth: { xs: '100%', sm: '45%', md: '30%' }, 
              flex: '1 1 calc(100% / 2)', 
              minWidth: '280px', //
            }}
          >
            {image.type === 'img' ? (
              <Image
                src={image.src}
                alt={image.alt}
                layout="responsive"
                width={300}
                height={300}
                objectFit="cover"
                quality={100}
                loading="lazy"
                style={{
                  borderRadius: '8px', // Round corners for images
                }}
              />
            ) : (
              <Box
                sx={{
                  transform: 'scale(1.02)',
                  borderRadius: 5,
                  width: '100%',
                  height: 'auto',
                }}
              >
                <Video
                  src={image.src}
                  type="video/mp4"
                  autoPlay
                  loop
                  muted
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
          flexDirection: { xs: 'column', md: 'row' }, // Stack vertically on small screens
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          gap: { xs: 3, md: 5 }, // Adjust gap based on screen size
        }}
      >
        {[
          { icon: '🩺', text: 'Receive professional consultations' },
          { icon: '💊', text: 'Tailored treatment plans' },
          { icon: '📦', text: 'Discreet delivery safely' },
          { icon: '🏡', text: 'All from the comfort of your home.' },
        ].map((feature, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              width: { xs: '100%', sm: '45%', md: 'auto' }, // Adjust width based on screen size
            }}
          >
            <Box component="span" sx={{ fontSize: '2rem' }}>
              {feature.icon}
            </Box>
            <Typography variant="p" component="p" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              {feature.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
