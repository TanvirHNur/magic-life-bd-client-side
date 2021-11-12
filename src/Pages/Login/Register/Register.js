import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert, AlertTitle  } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login-.jpg'

const Register = (e) => {
  const [loginData, setLoginDate] =  useState({});
  const history = useHistory()
  const {user, registerUser, isLoading,authError} = useAuth();
  

  const handleOnBlur = e =>{
      const field = e.target.name;
      const value= e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginDate(newLoginData)
  }
  const handleRegister = e =>{
    e.preventDefault();
    if(loginData.password.length <6){
      alert('Password atleast 6 character')
      return;
  }
      if(loginData.password !== loginData.password2){
          alert('Password did not match')
          return;
      }
    
      registerUser(loginData.email, loginData.password, loginData.name, history)
  };

    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6} sx={{mt:8}}>
  <Typography variant="body1" gutterBottom>
       Register
      </Typography>
    {
      ! isLoading && 
      <form onSubmit={handleRegister}>
      <TextField sx={{width: "75%", m:1}} onBlur={handleOnBlur}  name="name" type="text" 
      id="standard-basic" label="Your Name*" variant="standard" required />
      <TextField sx={{width: "75%", m:1}} onBlur={handleOnBlur}  name="email" type="email" 
      id="standard-basic" label="Your Email" variant="standard" required />
      <TextField sx={{width: "75%", m:1}}  onBlur={handleOnBlur}  name="password" id="standard-basic" label="password" variant="standard" type="password" />
      <TextField sx={{width: "75%", m:1}}  onBlur={handleOnBlur}  name="password2" id="standard-basic" label="Retype Your password" variant="standard" type="password" />
      <br />
      
      <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" style={{backgroundColor: '#5CE7ED'}}>Register</Button>
    <br />
      <NavLink to="/login" style={{textDecoration: 'none'}}>
      <Button variant="text">Have An Account?</Button>
      </NavLink>
    </form>
    }
    {
       isLoading && <CircularProgress color="secondary" />
    }

    {
      user?.email && <Alert sx={{ width: '75%', m: 1 }} severity="success">Your Account Created successfully!</Alert>
    }
    {
      authError && <Alert sx={{ width: '75%', m: 1 }} severity="error">
      <AlertTitle>Error</AlertTitle>
      {authError} <strong>check it out!</strong>
    </Alert>
    }
  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width: '90%'}} src={login} alt="login" />
  </Grid>
  
</Grid>
        </Container>
    );
};

export default Register;