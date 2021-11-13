import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, CircularProgress } from '@mui/material';


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect( () => {
        const url = `https://desolate-hamlet-07512.herokuapp.com/orders`
        fetch(url)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    } , [])



    const handleDelete =(id) =>{
        const procced = window.confirm('Are you sure, you want to delete?')
        if(procced){
            
        const url = `https://desolate-hamlet-07512.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            
            if(data.deletedCount > 0){
                const remainingOrders = orders.filter(service => service._id !== id);
                setOrders(remainingOrders)
                alert('Deleted')
            }
        })
        }
    };
    const handleUpdate =id => {
        
        const url=`https://desolate-hamlet-07512.herokuapp.com/orders/${id}`;
        const updatedItem =orders.find(item => item._id ==id);
        console.log(updatedItem)
        updatedItem.status='Shipped'
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res=> res.json())
        .then(data => {
            const all= [...orders]
            setOrders(all)
            if(data.modifiedCount >0){
                alert('Updated successfully');
                const all= [...orders]
                setOrders(all)
            }
        })
    }
    return (
        <div>
            <h2>Orders {orders.length} </h2>
             {
                 orders.length === 0 ? 
                 <CircularProgress /> :
                 <TableContainer component={Paper}>
      <Table sx={{}} aria-label="orders table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Product</TableCell>
            <TableCell align="right">shipping Adress</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Cencel</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
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
              {
                  row.status === 'pending' ? 
                  <Button onClick={ () => handleUpdate(row._id)} variant="outlined" color="error">
                 Update
            </Button>
                  : 
                  <Button  variant="contained" color="success">
                  Shipped
             </Button>
                 
              }
              </TableCell>
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
             }
        </div>
    );
};

export default ManageAllOrders;