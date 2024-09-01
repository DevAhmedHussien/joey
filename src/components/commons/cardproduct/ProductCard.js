import React from 'react';
import { Box, Typography, Chip, Link } from '@mui/material';
import Image from 'next/image'; // Next.js image optimization
import AppButton from '../appbutton/AppButton';

const ProductCard = ({ width = 400, height = 400, name, description, href }) => {
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
          right: '62px',
          zIndex:30
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


//  try
// import React from 'react';
// import { Box, Typography, Chip, Link } from '@mui/material';
// import Image from 'next/image'; // Next.js image optimization
// import AppButton from '../appbutton/AppButton';
// import { motion } from 'framer-motion';

// const ProductCard = ({ width = 400, height = 400, name, description, href }) => {
//   return (
//     <motion.div
//       whileHover={{
//         scale: 1.05,
//         transition: { duration: 0.2 },
//         boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
//         backgroundColor: '#f0f0f0', // Flash effect
//       }}
//       style={{
//         position: 'relative',
//         textAlign: 'center',
//         p: 2,
//         borderRadius: '16px',
//         boxShadow: '3px 3px 10px rgba(0,0,0,0.2)',
//         width: `${width}px`,
//         height: `${height}px`,
//         backgroundColor: '#fff',
//         overflow: 'hidden',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//       }}
//     >
//       {/* Product Image */}
//       <Box
//         className="product-image"
//         sx={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
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
//           className="product-image"
//         />
//       </Box>

//       {/* Product Info */}
//       <Box sx={{ zIndex: 2 }}>
//         <Typography variant="h3" component="h3" sx={{ mb: 2, color: '#ffffff' }}>
//           {name}{' '}
//           <Typography component="span" sx={{ mb: 2, fontSize: '0.75rem', verticalAlign: 'super', color: '#000' }}>
//             Joey
//           </Typography>
//         </Typography>

//         <Typography variant="body2" sx={{ color: '#ffffff' }}>
//           {description}
//         </Typography>

//         {/* Stock Status Label */}
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
//           <Chip 
//             label="In stock via Joey med"
//             sx={{ 
//               position: 'absolute',
//               right: 0,
//               top: 120,
//               transform: 'rotate(35deg)',
//               backgroundColor: '#E0F2F1',
//               color: '#004D40',
//               fontWeight: 'bold',
//               fontSize: '0.75rem' }}
//           />
//         </Box>
//       </Box>

//       {/* Action Buttons at the Bottom */}
//       <Box
//         sx={{
//           width: '72%',
//           position: 'absolute',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           gap: 2,
//           bottom: '8px',
//           right: '62px',
//           zIndex: 30
//         }}
//       >
//         <AppButton title="start now" color="primary" />
//         <AppButton title="Learn More" color="white" href={href} />
//       </Box>

//       {/* Safety Information Link */}
//       <Link href="#" underline="hover" sx={{ display: 'block', mt: 2, fontSize: '0.875rem', color: '#fff', zIndex: 2, position: 'relative' }}>
//         {/* Important safety information */}
//       </Link>
//     </motion.div>
//   );
// };

// export default ProductCard;

