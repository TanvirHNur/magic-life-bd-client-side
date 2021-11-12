import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CircularProgress } from '@mui/material';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect( () => {
        const url = `http://localhost:5000/products`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setProducts(data))
    } , [])
    const handleDelete =(id) =>{
        const procced = window.confirm('Are you sure, you want to delete?')
        if(procced){
            
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            
            if(data.deletedCount > 0){
                const remainingProducts = products.filter(product => product._id !== id);
                setProducts(remainingProducts)
                alert('Deleted')
            }
        })
        }
    };
    return (
        <div>
            <h2>Products {products.length} </h2>
             {
                 products.length === 0 ? 
                 <CircularProgress /> :
                 <TableContainer component={Paper}>
      <Table sx={{}} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Prodcut</TableCell>
            <TableCell align="right">price</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
             
              <TableCell align="right">
              <Button onClick={ () => handleDelete(row._id)} variant="outlined" color="error">
                 Delete
            </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
             }
        </div>
    );
};

export default ManageProducts;