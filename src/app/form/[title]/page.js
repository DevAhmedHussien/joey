'use client'
import React, { useEffect } from 'react';

const JotFormEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.jotformEmbedHandler(
        "iframe[id='JotFormIFrame-242446150171044']",
        'https://form.jotform.com/'
      );
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id="JotFormIFrame-242446150171044"
      title="Weight Loss"
      onLoad={() => window.parent.scrollTo(0, 0)}
      allowTransparency="true"
      allow="geolocation; microphone; camera; fullscreen"
      src="https://form.jotform.com/242446150171044"
      frameBorder="0"
      style={{ minWidth: '100%', maxWidth: '100%', height: '539px', border: 'none' }}
      scrolling="no"
    />
  );
};

export default JotFormEmbed;
