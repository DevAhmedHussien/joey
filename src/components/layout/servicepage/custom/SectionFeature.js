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
          flexWrap:"wrap",
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
                width={400}
                height={400}
                objectFit="cover"
                quality={100}
                loading="lazy"
                style={{ width: '100%', height: '100%'}}
              />
            ) : (
              <Box 
                sx={{
                  maxWidth:450,
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
                 {/* <iframe
                style={{height:400, scale:1}}
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/11FQ66MuLF8?controls=0&autoplay=1&loop=1&playlist=11FQ66MuLF8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  controls={0}
                  autoplay= {1}
                  loop={1}
                  muted
                ></iframe> */}
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
          justifyContent:  {xs:'start', md:'space-between'},
          flexDirection: {xs:'column', md:'row'},
          alignItems: 'start',
          width: '100%',
          maxWidth: '1200px',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          gap: {xs:1, md:10},
        }}
      >
      <Box sx={{ textAlign: 'center',  display: 'flex', justifyContent: 'center', flexDirection: 'row',alignItems:'center',gap:1}}>
        <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🩺</Box>
          <Typography variant="h6" component="div" gutterBottom>
           
            Receive professional consultations 
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center',  display: 'flex', justifyContent: 'center', flexDirection: 'row',alignItems:'center',gap:1}}>
          <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>💊 </Box>
          <Typography variant="h6" component="div" gutterBottom>
            tailored treatment plans
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center',  display: 'flex', justifyContent: 'center', flexDirection: 'row',alignItems:'center',gap:1}}>
          <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>📦</Box>
          <Typography variant="h6" component="div" gutterBottom>
            discreet delivery safely
          </Typography>
         
        </Box>
        <Box sx={{ textAlign: 'center',  display: 'flex', justifyContent: 'center', flexDirection: 'row',alignItems:'center',gap:1}}>
          <Box component="span" sx={{ fontSize: '2rem', display: 'block', marginBottom: '10px' }}>🏡</Box>
          <Typography variant="h6" component="div" gutterBottom>
           all from the comfort of your homee.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
