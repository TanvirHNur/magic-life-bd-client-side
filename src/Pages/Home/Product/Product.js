import React from 'react';
import './Product.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id,title, img, des,price} =product;
    return (
        <>
        <Grid item xs={2} sm={4} md={4} >
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="240"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {des.slice(0,200)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        price ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/purchase/${_id}`} style={{textDecoration: 'none', color: 'white', backgroundColor: '#5CE7ED'}} >
        <Button size="small">Shop Now</Button>
        </Link>
      </CardActions>
    </Card>
         </Grid>
             
        </>
    );
};

export default Product;