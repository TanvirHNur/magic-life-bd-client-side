import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import './Reviews.css';
import StarIcon from '@mui/icons-material/Star';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res=> res.json())
        .then(data=> setReviews(data))
        .catch(err => {
            console.log(err)
        })
    } , [])
    return (
        <Box className="reviews">
            <Typography sx={{ color: 'error.main' }} variant="h4" component="div" gutterBottom>
                    Based on Varified Buyer
            </Typography>
            <StarIcon fontSize="large" sx={{  color: 'error.main' }}  />
            <StarIcon fontSize="large" sx={{  color: 'error.main' }}  />
            <StarIcon fontSize="large" sx={{  color: 'error.main' }}  />
            <StarIcon fontSize="large" sx={{  color: 'error.main' }}  />
            <StarIcon fontSize="large" sx={{  color: 'error.main' }}  />
            <Container sx={{my: 5}}>
            {
                reviews.length === 0 ? 
                <CircularProgress/> 
                :
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review=> <Review
                    key={review._id}
                    userReview={review}
                    ></Review>)
                }
        
                </Grid>
            }
            </Container>
        </Box>
    );
};

export default Reviews;