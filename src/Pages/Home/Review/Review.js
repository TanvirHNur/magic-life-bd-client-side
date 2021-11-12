import React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/system';
import { Grid, Paper } from '@mui/material';


const Review = ({userReview}) => {
    const {name, rating, review} = userReview;
    return (
        <>
        <Grid item xs={2} sm={4} md={4} >
        <Paper variant="outlined" style={{height: '200px'}}>
        {/* <Card sx={{ maxWidth: 345 }}> */}
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       Varified Buyer
      </Typography>
      <Typography variant="h5" component="div">
          {name}
      </Typography>
      <Typography variant="body2">
       {review}
        <br />
      </Typography>
      {
          rating >= 5 && 
          <Box>
               <StarIcon  sx={{  color: 'error.main',fontSize: 30 }}  />
            <StarIcon sx={{  color: 'error.main',fontSize: 30  }}  />
            <StarIcon  sx={{  color: 'error.main',fontSize: 30  }}  />
            <StarIcon f sx={{  color: 'error.main',fontSize: 30  }}  />
            <StarIcon  sx={{  color: 'error.main',fontSize: 30  }}  />
          </Box>
      }

      {
          rating == 4 && 
          <Box>
               <StarIcon  sx={{  color: 'error.main',fontSize: 30 }}  />
            <StarIcon sx={{  color: 'error.main',fontSize: 30  }}  />
            <StarIcon  sx={{  color: 'error.main',fontSize: 30  }}  />
            <StarIcon f sx={{  color: 'error.main',fontSize: 30  }}  />
          </Box>
      }

      {
          rating == 3 && 
          <Box>
               <StarIcon  sx={{  color: 'error.main',fontSize: 30 }}  />
            <StarIcon sx={{  color: 'error.main',fontSize: 30  }}  />
            <StarIcon  sx={{  color: 'error.main',fontSize: 30  }}  />
          </Box>
      }

      {
          rating == 2 && 
          <Box>
               <StarIcon  sx={{  color: 'error.main',fontSize: 30 }}  />
            <StarIcon sx={{  color: 'error.main',fontSize: 30  }}  />
          </Box>
      }

      {
          rating == 1  && 
          <Box>
               <StarIcon  sx={{  color: 'error.main',fontSize: 30 }}  />
           
          </Box>
      }
      {
          rating == 0  && 
          <Box>
               
           
          </Box>
      }



    </CardContent>
        {/* </Card> */}
        </Paper>
        
    </Grid>
        </>
    );
};

export default Review;