import { useState } from 'react';
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
                                height={60}
                                loading="lazy"
                                alt="Joey med - logo"
                                style={{  transform: 'scale(1.4)'}}
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
                                    <Button className="responsive-appbar-button">
                                        {page.replace('-', ' ')}
                                    </Button>
                                </Link>
                               
                                {hoveredCategory === page && subCategories && (
                                    <Box
                                        className={`responsive-appbar-product-box ${hoveredCategory === page ? 'open' : 'close'}`}
                                        onMouseEnter={() => setHoveredCategory(page)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Button className="responsive-appbar-button" component={Link} href={`/${page}`}>
                                            See all {page.replace('-', ' ')}
                                        </Button>
                                        {Object.keys(subCategories).map((subCategoryKey) => (
                                            <Box key={subCategoryKey} className='type-of-products'>
                                                <Typography variant="h5" component="h5" sx={{ textTransform: 'capitalize', padding: '10px 5px' }}>
                                                    {subCategoryKey.replace('-', ' ')}
                                                </Typography>
                                                <Box className='handling-products'>
                                                    {subCategories[subCategoryKey].map((product) => (
                                                        <Button
                                                            key={product.SKU}
                                                            className="responsive-appbar-button"
                                                            component={Link}
                                                            href={`/${page}/${product.referenceHandle}`}
                                                        >
                                                            {product.itemName}
                                                        </Button>
                                                    ))}
                                                </Box>
                                            </Box>
                                        ))}
                                        <Box  className='handling-Images'>
                                            {page == 'sexual-health'
                                                ? <Image
                                                quality={100}
                                                    src={sexualImg}
                                                    alt="Fertility"
                                                    width={100}
                                                    height={130}
                                                    loading="lazy"
                                                />
                                                : page == 'weight-loss'
                                                    ? <Image
                                                    quality={100}
                                                    src={weighImg}
                                                    alt="Fertility"
                                                    width={100}
                                                    height={130}
                                                    loading="lazy"
                                                    />
                                                : page == 'hair-growth'
                                                    ? <Image
                                                    quality={100}
                                                    src={hairImg}
                                                    alt="Fertility"
                                                    width={100}
                                                    height={130}
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
                        <Link  href={'https://joeymed.intakeq.com/portal'}>
                            <Box>
                                <CustomPersonIconSVG width={35} height={35}  />
                            </Box>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
         </AppBar>
        </>
    );
}

export default MainNavBar;

