export const visible = { opacity: 1, x: 0, transition: { duration: 0.8 } };

export const itemVariants = {
    hidden: { opacity: 0.3, x: -50 },
    visible
  };
  
  export const cardVariantsRight = {
    hidden: { opacity: 0, scale: 0.8, x: -200 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 50, 
        duration: 2 
      } 
    }
  };
  export const cardVariantsLeft = {
    hidden: { opacity: 0, scale: 0.8, x: 200 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 50, 
        duration: 2 
      } 
    }
  };
  export const cardVariantsSmall = {
    hidden: { 
      opacity: 0, 
      scale: 0.2, // Starts very small, almost like a point
      x: 0, // Start position (adjust as needed)
      y:0
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, // Increase stiffness for a snappier effect
        damping: 20, // Add some damping to make the motion smoother
        duration: 1.5 // Shorter duration for quicker appearance
      } 
    }
  };

    // Animation Variants
    export const titleAnimation = {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };
  
    export const cardAnimation = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    };
  
    export const iconAnimation = {
      hidden: { opacity: 0, rotate: -45 },
      visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: 'easeInOut' } },
    };