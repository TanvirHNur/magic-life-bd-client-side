import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        
       <Container>
            <Box sx={{ flexGrow: 1, my: 5 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
         
            <Grid item xs={2} sm={4} md={3} sx={{mt: 8}} style={{textAlign: 'left'}}>
                <Box > 
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'black'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Check Up</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h6" component="div" style={{color: '#5CE7ED'}}>
          Services 
        </Typography>
                <Box>
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'black'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h6" component="div" style={{color: '#5CE7ED'}}>
           Oral Health
        </Typography>
                <Box>
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'black'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
            </Grid>
            <Grid item xs={2} sm={4} md={3}>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h6" component="div" style={{color: '#5CE7ED'}}>
           Our Location
        </Typography>
                <Box>
                <Link to="/" sx={{mb:4}} style={{textDecoration: 'none', color: 'black'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
                <Box>
                <Link to="/" style={{textDecoration: 'none', color: 'black', marginBottom: '10px'}}>Emergency Dental Care</Link>
                </Box>
            </Grid>
          
        </Grid>
      </Box>
       </Container>
    );
};

export default Footer;