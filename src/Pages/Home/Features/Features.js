import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import './Features.css'
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import DesignServicesSharpIcon from '@mui/icons-material/DesignServicesSharp';
import FitnessCenterSharpIcon from '@mui/icons-material/FitnessCenterSharp';
const Features = () => {
    return (
        <Box className="features">
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  
    <Grid item xs={6} sm={4} md={4}>
    <DesignServicesSharpIcon sx={{  color: 'white',fontSize: 130  }} />
    <CardContent>
      <Typography sx={{ fontSize: 24, color: 'white' }} gutterBottom>
      Designed in Germany
      </Typography>
      <Typography variant="h5" component="div">
      
      </Typography>
      <Typography variant="body2">
      Designed by some of the best product designers in Berlin, Germany, who have reimagined at-home workouts
        
      </Typography>
    </CardContent>
   
    </Grid>
    <Grid item xs={6} sm={4} md={4}>
    <AirportShuttleIcon sx={{  color: 'white',fontSize: 130  }} />
    <CardContent>
      <Typography sx={{ fontSize: 24, color: 'white' }} gutterBottom>
      Free Shipping
      </Typography>
      <Typography variant="h5" component="div">
      
      </Typography>
      <Typography variant="body2">
      We offer complimentary shipping Pan India on all orders placed throughout our website. No strings attached.


        
      </Typography>
    </CardContent>
   
    </Grid>
    <Grid item xs={6} sm={4} md={4}>
    <FitnessCenterSharpIcon sx={{  color: 'white',fontSize: 130  }} />
    <CardContent>
      <Typography sx={{ fontSize: 24, color: 'white' }} gutterBottom>
      EMI Financing Available
      </Typography>
      <Typography variant="h5" component="div">
      
      </Typography>
      <Typography variant="body2">
      Just because we're premium, doesn't mean we're not affordable! No Cost EMI available on orders above 10,000
        
      </Typography>
    </CardContent>
   
    </Grid>
  
</Grid>
        </Box>
    );
};

export default Features;