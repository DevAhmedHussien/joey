'use client'
import * as React from "react";
import { useRef ,useState} from "react";
import { motion, useCycle } from "framer-motion";
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";
import { productCategories } from '@/utility/data';
import AppButton from "@/components/commons/appbutton/AppButton";
import sexualImg from '../../../../public/images/navbar/sexual.png';
import weighImg from '../../../../public/images/navbar/weight.png';
import hairImg from '../../../../public/images/navbar/hair.png';
import imgLogo from '../../../../public/images/logo2.png';
// useDimensions hook to get the dimensions of the sidebar

export const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  React.useEffect(() => {
    const measure = () => {
      if (ref.current) {
        dimensions.current.width = ref.current.offsetWidth;
        dimensions.current.height = ref.current.offsetHeight;
      }
    };

    measure(); // Measure dimensions on component mount
    window.addEventListener('resize', measure); // Re-measure on resize
    return () => window.removeEventListener('resize', measure); // Clean up listener on unmount
  }, [ref]);

  return dimensions.current;
  };

  // Define the animation for opening and closing the sidebar
  const sidebarVariants = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 10 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 30,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(20px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

  const Path = props => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={props.stroke}
      strokeLinecap="round"
      {...props}
    />
  );

  const MenuToggle = ({ toggle , isOpen}) => (
    <button className="buttonIcon" onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 24 24">
        <Path
          strokeWidth="1.5" // Set the stroke width to 1 for thinner lines
          stroke="currentColor" // Set the stroke color to current text color or customize
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path
          strokeWidth="1.5" 
          stroke="currentColor" 
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          strokeWidth="1.5" // Set the stroke width to 1 for thinner lines
          stroke= "currentColor" 
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );

// Navigation component
const Navigation = ({ isOpen, close }) => {
  const pages = ['sexual-health', 'weight-loss', 'hair-growth', 'blogs',  'about-us', 'contact-us'];
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const handleMouseEnter = (page) => {
        setHoveredCategory(page);
        fetchCategoryData(page);
    };

  const handleMouseLeave = () => {
      setHoveredCategory(null);
      setSubCategories([]);
  };

  const fetchCategoryData = (category) => {
      const data = productCategories[category];
      setSubCategories(data);
  };
    const handleClose = ()=>{
      close()
  }
  return (
    isOpen && (
      <motion.ul
        className="motionUl"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
      >
        <Link href='/'>
          <Image
            quality={100}
            src={imgLogo}
            height={70}
            priority 
            alt="Joeymed logo"
            style={{scale:1.5 , margin :'5px auto'}}
            onClick={handleClose}
          />
        </Link>
        {/* <span style={{ color:'red', position:'relative', right:10, }}> { hoveredCategory === null ? <p> no </p> : <p> yes </p> } </span> */}
        
        {pages.map((page) => (
            <Box
                key={page}
                // className="responsive-appbar-link"
                onClick={() => { 
                  if(hoveredCategory == null) {
                    handleMouseEnter(page)
                  }else {
                    handleMouseLeave()
                  }
                  }}
                // onMouseLeave={handleMouseLeave}
              >
              <motion.li
                style={{padding:4}}
                    variants={variants}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }} >
                  <Link href={page === 'about-us' || page === 'contact-us' || page === 'blogs' ? `/${page}` : ""}>
                    <Button className='responsive-appbar-button'>
                      {page.replace('-', ' ')} 
                    </Button>
                  </Link>
              </motion.li>
                {hoveredCategory === page && subCategories && (
                    <Box p={2} className={`${hoveredCategory === page ? 'open' : 'close'}`}
                        onClick={() => setHoveredCategory(page)}// onMouseLeave={handleMouseLeave}
                        >
                        <Button className="responsive-appbar-button" 
                          component={Link} href={`/${page}`}
                          onClick={handleClose}>
                            See all {page.replace('-', ' ')}
                        </Button> 
                        {Object.keys(subCategories).map((subCategoryKey) => (
                            <Box key={subCategoryKey} className='type-of-products'>
                                <Typography variant="h5" component="h5" textAlign='center' sx={{ textTransform: 'capitalize', padding: '10px 5px' }}>
                                    {subCategoryKey.replace('-', ' ')}
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                    {subCategories[subCategoryKey].map((product) => (
                                        <motion.li key={product.SKU}
                                          variants={variants}
                                          whileHover={{ scale: 1.1 }}
                                          whileTap={{ scale: 0.95 }}>
                                       <Button
                                            key={product.SKU}
                                            className="responsive-appbar-button"
                                            component={Link}
                                            onClick={handleClose}
                                            href={`/${page}/${product.referenceHandle}`}>
                                            {product.itemName}
                                        </Button>
                            </motion.li>
                          ))}
                  </Box>
                          </Box>
                      ))}
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                          {page == 'sexual-health'
                              ? <Image
                                  quality={100}
                                  sizes="(max-width: 768px) 100vw, 
                                  (max-width: 1200px) 50vw, 
                                  33vw"
                                  style={{ objectFit: 'cover' }}
                                  src={sexualImg}
                                  alt="Fertility"
                                  width={100}
                                  height={130}
                                  loading="lazy"
                              />
                              : page == 'weight-loss'
                              ? <Image
                                  src={weighImg}
                                  alt="Fertility"
                                  quality={100}
                                  sizes="(max-width: 768px) 100vw, 
                                  (max-width: 1200px) 50vw, 
                                  33vw"
                                  style={{ objectFit: 'cover' }}
                                  width={100}
                                  height={130}
                                  loading="lazy"
                              />
                              : page == 'hair-growth'
                                  ? <Image
                                      src={hairImg}
                                      quality={100}
                                      sizes="(max-width: 768px) 100vw, 
                                      (max-width: 1200px) 50vw, 
                                      33vw"
                                      style={{ objectFit: 'cover',  borderRadius: 8}}
                                      alt="Fertility"
                                      width={100}
                                      height={130}
                                      loading="lazy"
                              />
                              : null
                    }
                   <AppButton title='start now' color='black' href={`/form/${page}`} />
                   </Box>
                    </Box>
                )}
                </Box>
        ))}
      </motion.ul>
    )
  );
};

// Main MotionBar component
const MotionBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        width: "300px",
      }}
    >
      <motion.div
        className="background"
        style={{
          position: "absolute",
          top :isOpen ? 0: '-10px' ,
          width: "100%",

          background:'var(--primary-background)',
          boxShadow: '1px 1px 8px 2px #bdbdbd'
        }}
        variants={sidebarVariants}
        custom={height}
      />
      <Navigation isOpen={isOpen} close={toggleOpen} />
      <MenuToggle toggle={() => toggleOpen()}  isOpen={isOpen}  />
    </motion.nav>
  );
};

export default MotionBar;
