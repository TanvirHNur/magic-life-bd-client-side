import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const Orders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        const url = `http://localhost:5000/orders`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    } , [])
    const myOrders = orders.filter(order => order.email === user.email);
    const handleDelete =(id) =>{
        const procced = window.confirm('Are you sure, you want to delete?')
        if(procced){
            
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            if(data.deletedCount > 0){
                const remainingServices = orders.filter(service => service._id !== id);
                setOrders(remainingServices)
                alert('Deleted')
            }
        })
        }
    }
    return (
        <div>
            <h2>Orders {myOrders.length} </h2>
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">shipping Adress</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {myOrders.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.product}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
              <Button onClick={ () => handleDelete(row._id)} variant="outlined" color="error">
                 Cencel
            </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Orders;