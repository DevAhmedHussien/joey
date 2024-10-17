'use client';

import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';
import './responsiveAppBar.scss'; 
import Image from 'next/image';
import imgLogo from '../../../../public/images/logo2.png';
import { CustomPersonIconSVG, SearchIconSVG } from '@/components/commons/icons/Icons';
import AppButton from '@/components/commons/appbutton/AppButton';
import { productCategories } from '@/utility/data';
import sexualImg from '../../../../public/images/navbar/sexual.png';
import weighImg from '../../../../public/images/navbar/weight.png';
import hairImg from '../../../../public/images/navbar/hair.png';
import MotionBar from'./MotionBar'
const pages = ['sexual-health', 'weight-loss', 'hair-growth', 'blogs',  'about-us', 'contact-us'];

function MainNavBar() {
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

    return (
        <>
         <AppBar position='sticky' sx={{ backgroundColor: '#ffffff' }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters> 
                    <Link href='/'>
                        <Typography className="responsive-appbar-title">
                            <Image
                                quality={100}
                                src={imgLogo}
                                // width={120}
                                height={60}
                                    loading="lazy"
                                alt="Joeymed logo"
                                style={{ width: '100%', transform: 'scale(1.4)', transformOrigin: 'center' }}
                            />
                        </Typography>
                    </Link>
                    <Box className="responsive-appbar-nav-icon">
                        <MotionBar/>
                    
                    </Box>

                    {/* for big scree */}
                    <Box className="responsive-appbar-links" padding={'0 20px'}>
                        {pages.map((page) => (
                            <Box
                                key={page}
                                className="responsive-appbar-link"
                                onMouseEnter={() => handleMouseEnter(page)}
                                onMouseLeave={handleMouseLeave}
                            >
                               <Link href={page === 'about-us' || page === 'contact-us' || page === 'blogs' ? `/${page}` : ""}>
                                    <Button
                                        className="responsive-appbar-button"
                                        sx={{ textTransform: 'capitalize', fontWeight: 500, fontSize: 16 }}
                                    >
                                        {page.replace('-', ' ')}
                                    </Button>
                                </Link>
                               
                                {hoveredCategory === page && subCategories && (
                                    <Box
                                        className={`responsive-appbar-product-box ${hoveredCategory === page ? 'open' : 'close'}`}
                                        onMouseEnter={() => setHoveredCategory(page)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Button className="responsive-appbar-button" component={Link} href={`/${page}`}
                                          sx={{ textTransform: 'capitalize', fontWeight: 500, fontSize: 16}}
>
                                            See all {page.replace('-', ' ')}
                                        </Button>
                                        {Object.keys(subCategories).map((subCategoryKey) => (
                                            <Box key={subCategoryKey} className='type-of-products'>
                                                <Typography variant="h5" component="h5" sx={{ textTransform: 'capitalize', padding: '10px 5px' }}>
                                                    {subCategoryKey.replace('-', ' ')}
                                                </Typography>
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start' }}>
                                                    {subCategories[subCategoryKey].map((product) => (
                                                        <Button
                                                            key={product.SKU}
                                                            className="responsive-appbar-button"
                                                            component={Link}
                                                            href={`/${page}/${product.referenceHandle}`}
                                                            sx={{ textTransform: 'capitalize', fontWeight: 400, fontSize: 15}}
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

                    <Box className="continer-icon">
                        <Link href={'/search'}>
                            <Box>
                                <SearchIconSVG width={30} height={30}  />
                            </Box>
                        </Link>
                        <Link 
                        // href={'/sign-in'}
                            href={'https://joeymed.intakeq.com/portal'}
                        >
                            <Box>
                                <CustomPersonIconSVG width={35} height={35}  />
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

