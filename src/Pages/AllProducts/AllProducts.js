import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Home/Product/Product';
import { CircularProgress, Container } from '@mui/material';


const AllProducts = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))
        .catch(err => {
            console.log(err)
        })
    } , [])
    return (
        <div>
            <Container sx={{my: 5}}>
           {
               products.length === 0 ? 
               <CircularProgress /> : 
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               {
                   products.map(product=> <Product
                   key={product._id}
                   product={product}
                   ></Product>)
               }
       
               </Grid>
           }
            </Container>
           
            
        </div>
    );
};

export default AllProducts;