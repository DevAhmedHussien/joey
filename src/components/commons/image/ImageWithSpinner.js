// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Box, LinearProgress, Typography } from '@mui/material';

// const ImageWithSpinner = ({ src, alt, ...props }) => {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [imageUrl, setImageUrl] = useState(null);

//   useEffect(() => {
//     const loadImage = async () => {
//       try {
//         const response = await fetch(src);
//         const contentLength = response.headers.get('content-length');
//         const total = contentLength ? parseInt(contentLength, 10) : null;
//         let loaded = 0;

//         if (!total) {
//           // If content length is not available, show a spinner instead of progress
//           setLoading(false);
//           setImageUrl(src);
//           return;
//         }

//         const reader = response.body.getReader();
//         const stream = new ReadableStream({
//           start(controller) {
//             function push() {
//               reader.read().then(({ done, value }) => {
//                 if (done) {
//                   controller.close();
//                   setLoading(false);
//                   return;
//                 }
//                 loaded += value.length;
//                 const newProgress = Math.round((loaded / total) * 100);
//                 setProgress(newProgress);
//                 controller.enqueue(value);
//                 push();
//               });
//             }
//             push();
//           }
//         });

//         const newResponse = new Response(stream);
//         const blob = await newResponse.blob();
//         const imageUrl = URL.createObjectURL(blob);
//         setImageUrl(imageUrl);
//       } catch (err) {
//         setError(true);
//         setLoading(false);
//       }
//     };

//     loadImage();
//   }, [src]);

//   return (
//     <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
//       {loading && !error && (
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             zIndex: 1,
//             backgroundColor: '#f0f0f0',
//             flexDirection: 'column',
//           }}
//         >
//           <LinearProgress
//             variant="determinate"
//             value={progress}
//             sx={{ width: '40%', mb: 1 }}
//           />
//           <Typography variant="body2">{!isNaN(progress) ? `${progress}%` : ''}</Typography>
//         </Box>
//       )}
//       {error ? (
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             zIndex: 1,
//             backgroundColor: '#f0f0f0',
//             color: 'red',
//           }}
//         >
//           <Typography variant="body2">Image failed to load</Typography>
//         </Box>
//       ) : (
//         imageUrl && (
//           <Image
//             src={imageUrl}
//             alt={alt}
//             layout="fill"
//             objectFit="cover"
//             loading="lazy"
//             quality={100}
//             style={{
//               borderRadius: 2,
//               transition: 'transform 0.3s ease-in-out',
//               display: loading ? 'none' : 'block',
//             }}
//             {...props}
//           />
//         )
//       )}
//     </Box>
//   );
// };

// export default ImageWithSpinner;
import React, { useState } from 'react';
import Image from 'next/image';
import { Box, CircularProgress } from '@mui/material';

const ImageWithSpinner = ({ src, alt, ...props }) => {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageLoad = async () => {
    try {
      const response = await fetch(src);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
      setLoading(false);
    } catch (error) {
      console.error('Failed to load image:', error);
      setLoading(false);
    }
  };

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {loading && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            backgroundColor: '#f0f0f0',
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={alt}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          quality={100}
          onLoad={() => setLoading(false)}
          style={{
            borderRadius: 2,
            transition: 'transform 0.3s ease-in-out',
            display: loading ? 'none' : 'block',
          }}
          {...props}
        />
      )}
    </Box>
  );
};

export default ImageWithSpinner;