
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Orders from '../Orders/Orders';

const DashboardHome = () => {  

    return (
        <Box>
            <Grid container spacing={2}>
  {/* <Grid item xs={12} sm={6} md={5}>
      hi
  </Grid> */}
  <Grid item xs={12} sm={12} md={7}>
      <Orders />
  </Grid>
</Grid>
        </Box>
    );
};

export default DashboardHome;