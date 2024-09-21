import React from 'react';
import { Box, Typography, Chip, Link } from '@mui/material';
import Image from 'next/image'; // Next.js image optimization
import AppButton from '../appbutton/AppButton';

const ProductCard = ({ width = 360, height = 400, name, description, href }) => {
  return (
    <Box
      sx={{
        position:'relative',
        textAlign: 'center',
        p: 2,
        borderRadius: 2,
        boxShadow: 3,
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: '#fff',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '&:hover .product-image': {
          transform: 'scale(1.1)',
        },
      }}
    >
      {/* Product Image */}
      <Box
        className="product-image"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: '8px',
          transition: 'transform 0.5s ease-in-out',
          zIndex: 1,
        }}
      >
        <Image
          src="/images/navbar/sexual.png" // Ensure this path is correct
          alt={name}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="product-image"
          	loading="lazy"
        />
      </Box>

      {/* Product Info */}
      <Box sx={{ zIndex: 2}}>
        <Typography variant="h3" component="h3" sx={{ mb: 2, color: '#ffffff' }}>
          {name}{' '}
          <Typography component="span" sx={{ mb: 2, fontSize: '0.75rem', verticalAlign: 'super', color: '#000' }}>
            Joey
          </Typography>
        </Typography>

        <Typography variant="body2" sx={{ color: '#ffffff' }}>
          {description}
        </Typography>

        {/* Stock Status Label */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <Chip 
            label="In stock via Joey med"
            sx={{ 
              position: 'absolute',
              right: 0,
              top:120,
              transform: 'rotate(35deg)',
              backgroundColor: '#E0F2F1',
              color: '#004D40',
              fontWeight: 'bold',
              fontSize: '0.75rem' }}
          />
        </Box>
      </Box>

      {/* Action Buttons at the Bottom */}
      <Box
        sx={{
          width: '72%',
          position: 'absolute',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          gap:2,
          bottom: '8px',
          right: '50px',
          zIndex:5
        }}
      >
        <AppButton title="start now" color="primary" />
        <AppButton title="Learn More" color="white" href={href} />
      </Box>

      {/* Safety Information Link */}
      <Link href="#" underline="hover" sx={{ display: 'block', mt: 2, fontSize: '0.875rem', color: '#fff', zIndex: 2, position: 'relative' }}>
        {/* Important safety information */}
      </Link>
    </Box>
  );
};

export default ProductCard;


// import React from 'react';
// import { Box, Typography, Chip, Link } from '@mui/material';
// import Image from 'next/image'; // Next.js image optimization
// import AppButton from '../appbutton/AppButton';

// const ProductCard = ({ name, description, href }) => {
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         textAlign: 'center',
//         p: 2,
//         borderRadius: 2,
//         boxShadow: 3,
//         width: '350px',
//         maxWidth: '400px', // Ensure it doesn't grow too large
//         height: 'auto',
//         backgroundColor: '#fff',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         '&:hover .product-image': {
//           transform: 'scale(1.05)',
//         },
//         transition: 'transform 0.5s ease-in-out',
//         margin: '0 auto', // Center the card
//         '@media (max-width: 600px)': {
//           maxWidth: '100%', // On smaller screens, make the card take full width
//         },
//       }}
//     >
//       {/* Product Image */}
//       <Box
//         className="product-image"
//         sx={{
//           position: 'relative',
//           width: '100%',
//           height: '300px', // Set fixed height for images
//           overflow: 'hidden',
//           borderRadius: '8px',
//           transition: 'transform 0.5s ease-in-out',
//           zIndex: 1,
//         }}
//       >
//         <Image
//           src="/images/navbar/sexual.png" // Ensure this path is correct
//           alt={name}
//           layout="fill"
//           objectFit="cover"
//           quality={100}
//           loading="lazy"
//         />
//       </Box>

//       {/* Product Info */}
//       <Box sx={{ zIndex: 2, mt: 2 }}>
//         <Typography variant="h6" sx={{ mb: 1, color: '#000' }}>
//           {name}
//           <Typography
//             component="span"
//             sx={{ fontSize: '0.875rem', verticalAlign: 'super', color: '#ff5722', ml: 1 }}
//           >
//             Joey
//           </Typography>
//         </Typography>

//         <Typography variant="body2" sx={{ color: '#666' }}>
//           {description}
//         </Typography>

//         {/* Stock Status Label */}
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             mt: 1,
//             position: 'relative',
//           }}
//         >
//           {/* <Chip
//             label="In stock via Joey med"
//             sx={{
//               position: 'absolute',
//               right: 0,
//               top: '10px',
//               transform: 'rotate(15deg)',
//               backgroundColor: '#E0F2F1',
//               color: '#004D40',
//               fontWeight: 'bold',
//               fontSize: '0.75rem',
//             }}
//           /> */}
//         </Box>
//       </Box>

//       {/* Action Buttons at the Bottom */}
//       <Box
//         sx={{
//           width: '100%',
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           gap: 2,
//           mt: 2,
//           paddingBottom: 2,
//         }}
//       >
//         <AppButton title="start now" color="primary" />
//         <AppButton title="Learn More" color="white" href={href} />
//       </Box>

//       {/* Safety Information Link */}
//       <Link
//         href="#"
//         underline="hover"
//         sx={{ display: 'block', mt: 2, fontSize: '0.875rem', color: '#00796b', zIndex: 2, position: 'relative' }}
//       >
//         Important safety information
//       </Link>
//     </Box>
//   );
// };

// export default ProductCard;
