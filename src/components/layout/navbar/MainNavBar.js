'use client';

import React, { useState, useContext } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@mui/material';
import NotesOutlinedIcon from '@mui/icons-material/NotesOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Link from 'next/link';
import NightsStayOutlinedIcon from '@mui/icons-material/NightsStayOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { ColorModeContext, tokens } from '../../../theme/theme';
import { useTheme } from '@mui/material';
import './responsiveAppBar.scss'; 
import Image from 'next/image';
import imgLogo from '../../../../public/images/logo2.png';
import { CustomPersonIconSVG, SearchIconSVG } from '@/components/commons/icons/Icons';
import AppButton from '@/components/commons/appbutton/AppButton';
import { productCategories } from '@/utility/data';
import sexualImg from '../../../../public/images/navbar/sexual.png';
import weighImg from '../../../../public/images/navbar/weight.png';
import hairImg from '../../../../public/images/navbar/hair.png';
import { PersonPinCircleOutlined } from '@mui/icons-material';
import MotionBar from'./MotionBar'
const pages = ['sexual-health', 'weight-loss', 'hair-growth', 'contact-us', 'about-us', 'blogs'];

function MainNavBar() {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { toggleColorMode, mode } = useContext(ColorModeContext);
   
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

    return (
        <>
         <AppBar position="sticky" sx={{ 
            background: mode == 'dark' ? 'linear-gradient(#e48a81, #0f133c)'  : colors.primary[100],
            boxShadow:  mode == 'dark' ? '-1px 0px 15px #cce0e7' : ''
            }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        className="responsive-appbar-title"
                    >
                        <Image
                            quality={100}
                            src={imgLogo}
                            // width={120}
                            height={60}
                            	loading="lazy"
                            alt="Joeymed logo"
                            style={{ width: '100%', transform: 'scale(1.1)', transformOrigin: 'center' }}
                        />
                    </Typography>
                    <Box className="responsive-appbar-nav-icon">
                        <MotionBar/>
                    
                    </Box>
                
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        className="responsive-appbar-title-small"
                    >
                        {/* <Image
                            quality={100}
                            src={imgLogo}
                            // width={100}
                            height={60}
                            alt="Joeymed logo"
                            loading="lazy"
                            style={{ transform: 'scale(1.2)', transformOrigin: 'center', marginLeft: '55px' }}
                        /> */}
                    </Typography>
                    {/* for big scree */}
                    <Box className="responsive-appbar-links" padding={'0 20px'}>
                        {pages.map((page) => (
                            <Box
                                key={page}
                                className="responsive-appbar-link"
                                onMouseEnter={() => handleMouseEnter(page)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Button
                                    className='responsive-appbar-button'
                                    href={(page == 'about-us' || page == 'contact-us' ||  page == 'blogs')? `/${page}` : null }
                                    sx={{ color: colors.primary[200], textTransform: 'capitalize', fontWeight: 500, fontSize: 16 }}
                                >
                                    {page.replace('-', ' ')}
                                </Button>
                                {hoveredCategory === page && subCategories && (
                                    <Box
                                        sx={{ width: '100%', background: colors.primary[100], padding: '20px' ,
                                            boxShadow:  mode == 'dark' ? '-1px 0px 15px #cce0e7' : ''

                                        }}
                                        className={`responsive-appbar-product-box ${hoveredCategory === page ? 'open' : 'close'}`}
                                        onMouseEnter={() => setHoveredCategory(page)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Button className="responsive-appbar-button" component={Link} href={`/${page}`}
                                            sx={{ color: colors.primary[200], textTransform: 'capitalize', fontWeight: 500, fontSize: 15 }} >
                                            See all {page.replace('-', ' ')}
                                        </Button>
                                        {Object.keys(subCategories).map((subCategoryKey) => (
                                            <Box key={subCategoryKey} className='type-of-products'>
                                                <Typography variant="h3" sx={{ color: colors.primary[200], textTransform: 'capitalize', fontWeight: 500, fontSize: 15, padding: '10px 5px' }}>
                                                    {subCategoryKey.replace('-', ' ')}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                                                    {subCategories[subCategoryKey].map((product) => (
                                                        <Button
                                                            key={product.SKU}
                                                            className="responsive-appbar-button"
                                                            component={Link}
                                                            href={`/${page}/${product.referenceHandle}`}
                                                            sx={{ color: colors.primary[200], textTransform: 'capitalize', fontWeight: 400, fontSize: 15}}
                                                        >
                                                            {product.itemName}
                                                        </Button>
                                                    ))}
                                                </Box>
                                                <span className="heartbeat-line"></span>
                                            </Box>
                                        ))}
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                                            {page == 'sexual-health'
                                                ? <Image
                                                quality={100}
                                                    src={sexualImg}
                                                    alt="Fertility"
                                                    width={100}
                                                    height={130}
                                                    style={{ borderRadius: 8 }}
                                                    	loading="lazy"
                                                />
                                                : page == 'weight-loss'
                                                    ? <Image
                                                    quality={100}
                                                        src={weighImg}
                                                        alt="Fertility"
                                                        width={100}
                                                        height={130}
                                                        style={{ borderRadius: 8 }}
                                                        	loading="lazy"
                                                    />
                                                    : page == 'hair-growth'
                                                        ? <Image
                                                        quality={100}
                                                            src={hairImg}
                                                            alt="Fertility"
                                                            width={100}
                                                            height={130}
                                                            style={{ borderRadius: 8 }}
                                                            	loading="lazy"
                                                        />
                                                        : null
                                            }

                                            <AppButton title='start now' color='black'  href={`/form/${page}`} />
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        ))}
                    </Box>

                    {/* Center Bottom Dark/Light Mode Toggle */}
                    <Box
                        sx={{
                            height:'100%',
                            position: 'absolute',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            top:40,
                            right:'0.5%'
                        }}
                        onClick={toggleColorMode}
                        >
                        {/* Sign Down Indicator */}        
                        <KeyboardArrowDownOutlinedIcon 
                        sx={{
                            boxShadow: '0px 1px 0px 0px #001d4a',
                            opacity:0.6,
                            borderRadius:1,
                            color: colors.primary[1600],
                            }} />

                        {/* Hover Box */}
                        <Box
                            sx={{
                            position: 'absolute',
                            zIndex:0,
                            bottom: -33,
                            width: 50,
                            height: 50,
                            background: colors.primary[100],
                            borderRadius: '8px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow: 3,
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
                            '&:hover': {
                                opacity: 1,
                                transform: 'translateY(-10px)',
                            },
                            }}
                        >
                            {mode === 'dark' ? (
                            <WbSunnyOutlinedIcon sx={{ fontSize: '20px', color: colors.primary[200] }} />
                            ) : (
                            <NightsStayOutlinedIcon sx={{ fontSize: '20px', color: colors.primary[200] }} />
                            )}
                        </Box>
                    </Box>
                    <Box className="continer-icon">
                        <Link href={'/search'}>
                            <Box>
                                <SearchIconSVG width={30} height={30} color={colors.primary[200]} />
                            </Box>
                        </Link>
                        <Link 
                        // href={'/sign-in'}
                            href={'https://joeymed.intakeq.com/portal'}
                        >
                            <Box>
                                <CustomPersonIconSVG width={35} height={35} color= {colors.primary[200]} />
                            </Box>
                        </Link>
                    </Box>

                    {/* once admin log in 
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton sx={{ ml: 3 }}>
                        <PersonPinCircleOutlined/>
                        </IconButton>
                        <Box sx={{ ml: 1 }}>
                        <Typography variant="body2">Harendra Kumar</Typography>
                        <Typography variant="caption">superadmin</Typography>
                        </Box>
                     </Box> */}
                </Toolbar>
            </Container>
         </AppBar>
        </>
    );
}

export default MainNavBar;

