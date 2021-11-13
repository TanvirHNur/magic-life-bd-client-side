import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box className="features">
       <Container>

            <Box  sx={{ flexGrow: 1, my: 5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
            <Grid item xs={2} sm={4} md={3} sx={{mt: 8}} style={{textAlign: 'left'}}>
                <Box > 
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'white'}}>Home</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Check Up</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Contact Us</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Showroom Mega Store</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>FAQ's</Link>
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h6" component="div" style={{color: '#5CE7ED'}}>
            CUSTOMER SUPPORT
        </Typography>
                <Box>
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'white'}}>Request Service</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Find a Distributor</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Find a Store</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Invention Submission</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Custom Home Gym Design</Link>
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h6" component="div" style={{color: '#5CE7ED'}}>
            PRODUCT SUPPORT
        </Typography>
                <Box>
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'white'}}>Download Catalog</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Shop Parts</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Product Registration</Link>
                </Box>
              
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h6" component="div" style={{color: '#5CE7ED'}}>
            COMPANY
        </Typography>
                <Box>
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'white'}}>Life Fitness Family of Brands</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Careers</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Press Releases</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'white', marginBottom: '10px'}}>Cookie Policy</Link>
                </Box>
               <FacebookOutlinedIcon sx={{ fontSize: 30  }}/>
               <YouTube sx={{ fontSize: 30  }}/>
               <Twitter sx={{ fontSize: 30  }}/>
               <Instagram sx={{ fontSize: 30  }}/>
            </Grid>
          
        </Grid>
      </Box>
       </Container>
       </Box>
    );
};

export default Footer;