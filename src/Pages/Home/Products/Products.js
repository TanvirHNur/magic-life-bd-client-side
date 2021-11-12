import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data.slice(0,6)))
        .catch(err => {
            console.log(err)
        })
    } , [])
    console.log(products)
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                products.map(product=> <Product
                key={product.id}
                product={product}
                ></Product>)
            }
    
            </Grid>
           
            
        </div>
    );
};

export default Products;