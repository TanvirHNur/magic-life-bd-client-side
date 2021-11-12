import { Typography } from '@mui/material';
import React from 'react';
import './HomeBanner.css'

const HomeBanner = () => {
    return (
        <div className="home-bg">
            {/* <h2>Introducing Life Fitness Axiom Series</h2> */}
            <Typography style={{paddingTop: '200px', color: 'white'}} variant="h2" component="div" sx={{  }}>
            Introducing Life Fitness Axiom Series
                  </Typography>
            <Typography style={{color: 'white'}} variant="h6" component="div" sx={{  }}>
            A comprehensive strength training offering including single and dual-exercise machines,
                  </Typography>
                  <br />
            <Typography style={{color: 'white'}} variant="h6" component="div" sx={{  }}> a dual adjustable pulley, and benches and racks
                  </Typography>
                  
        </div>
    );
};

export default HomeBanner;