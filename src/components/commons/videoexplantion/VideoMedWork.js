import React from 'react';
import { Box, Typography } from '@mui/material';

const VideoMedWork = () => {
  return (
    <Box className="video-section" sx={{ padding: 4 }}>
      {/* Title Section */}
      <Typography variant="h2" component="h2" className="title-2" gutterBottom>
        Learn More About Telehealth
      </Typography>

      {/* Video Container */}
      <Box className="video-container" sx={{ mt: 2 }}>
        <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '1920/1080' }}>
          <iframe
            src="https://share.synthesia.io/embeds/videos/845ce7a9-ae4e-4541-83ac-b0667a75e986"
            loading="lazy"
            title="Synthesia video player - Joey Med Process"
            allowFullScreen
            allow="encrypted-media; fullscreen;"
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0,
              overflow: 'hidden'
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default VideoMedWork;
