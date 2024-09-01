import React, { useRef, useEffect, useState } from 'react';

const Video = ({ src, poster, alt, controls = false, loop = false, muted = true, autoPlay = false, ...props }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        setIsLoaded(true);
      };

      videoRef.current.addEventListener('loadeddata', handleLoadedData);

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener('loadeddata', handleLoadedData);
        }
      };
    }
  }, []);

  return (
    <div className={`video-container ${isLoaded ? 'loaded' : ''}`} style={{ position: 'relative', overflow: 'hidden' }}>
      {!isLoaded && (
        <div className="loading-spinner">
          {/* Add a loading spinner or skeleton here */}
        </div>
      )}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={controls}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        style={{ width: '100%', height: 'auto', display: isLoaded ? 'block' : 'none' }}
        {...props}
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .video-container {
          width: 100%;
          height: auto;
        }
        .loading-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </div>
  );
};

export default Video;
