import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');
    const [success,setSuccess] = useState(false);

    const handleOnBlur = e => {
        const email = e.target.value;
        setEmail(email);
        console.log(email)
    }
    const handleAdminSubmit = e =>{
        const user={email};
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT', 
            headers: {
               'content-type': 'application/json' 
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.modifiedCount){
                setEmail('')
                setSuccess(true)
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            make your beloved one Admin 
            <form onSubmit={handleAdminSubmit}>
            <TextField sx={{width: "50%", m:1}} onBlur={handleOnBlur}  name="email"  label="Your Email" variant="standard" type="email" required />
             <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained" style={{backgroundColor: '#5CE7ED'}}>Make Admin</Button>
            </form>

            {
      success&& <Alert sx={{ width: '50%', m: 1 }} severity="success">Made admin successfully!</Alert>
    }
        </div>
    );
};

export default MakeAdmin;