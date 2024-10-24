// 'use client';
// import { useState } from 'react';
// import { Box, Typography, Modal, IconButton, Avatar } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// export default function TestimonialCard({ name, role, videoSrc, testimonial, profileImg }) {
//   const [open, setOpen] = useState(false);

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <Box sx={{ minHeight:300, position: 'relative', width: '100%', maxWidth: 400, margin: '20px auto', padding: 2, borderRadius: 2, boxShadow: 3, backgroundColor: '#121212', color: '#fff' }}>

//       <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
//         <Avatar src={profileImg} alt={name} sx={{ width: 40, height: 40, marginRight: '8px' }} />
//         <Box>
//           <Typography variant="p" component="p" sx={{ fontWeight: 'bold' }}>{name}</Typography>
//           <Typography variant="p" component="p" sx={{ color: 'gray' }}>{role}</Typography>
//         </Box>
//       </Box>
//       <Box
//         onClick={handleOpen}
//         sx={{
//           cursor: 'pointer',
//           height: '300px',
//           borderRadius: '8px',
//           overflow: 'hidden',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundImage: `url(${profileImg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <video
//           src={videoSrc}
//           autoPlay
//           muted
//           loop
//           style={{
//             position: 'absolute',
//             top: '0',
//             left: '0',
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             zIndex: -1,
//             opacity: 0.5,
//           }}
//         />
//         <Typography variant="h6" sx={{ color: '#fff', zIndex: 1 }}>
//           {testimonial}
//         </Typography>
//       </Box>

      

//       <Modal open={open} onClose={handleClose} closeAfterTransition>
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             width: '80%',
//             backgroundColor: '#000',
//             borderRadius: '8px',
//             padding: '20px',
//             outline: 'none',
//           }}
//         >
//           <IconButton
//             onClick={handleClose}
//             sx={{ position: 'absolute', top: '10px', right: '10px', color: '#fff' }}
//           >
//             <CloseIcon />
//           </IconButton>
//           <video src={videoSrc} controls autoPlay style={{ width: '100%', borderRadius: '8px' }} />
//         </Box>
//       </Modal>
//     </Box>
//   );
// }
