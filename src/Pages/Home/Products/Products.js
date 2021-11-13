import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Grid from '@mui/material/Grid';
import { CircularProgress, Container } from '@mui/material';


const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('https://desolate-hamlet-07512.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setProducts(data.slice(0,6)))
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
                   key={product.id}
                   product={product}
                   ></Product>)
               }
       
               </Grid>
           }
            </Container>
           
            
        </div>
    );
};

export default Products;