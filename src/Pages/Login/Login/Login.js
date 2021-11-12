import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login-2.jpg'

const Login = (e) => {
  const [loginData, setLoginDate] =  useState({});
  const {user, isLoading, authError, logIn, signWithGoogle} = useAuth();

  const location = useLocation();
  const histroy = useHistory();

  const handleOnchange = e =>{
      const field = e.target.name;
      const value= e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginDate(newLoginData)
  }
  const handleSubmit = e =>{
    logIn(loginData.email, loginData.password,location,histroy)

    e.preventDefault()
  };
  const HandlesignWithGoogle =() => {
      signWithGoogle(location,histroy);
  }

    return (
        <Container>
            <Grid container spacing={2}>
  <Grid item xs={12} md={6} sx={{mt:8}}>
  <Typography variant="body1" gutterBottom>
       Login
      </Typography>
    {
      !isLoading && 
      <Box>
        <form onSubmit={handleSubmit}>
      <TextField sx={{width: "75%", m:1}} onBlur={handleOnchange}  name="email"
      id="standard-basic" label="Your Email" variant="standard" />
      <TextField sx={{width: "75%", m:1}}  onBlur={handleOnchange}  name="password" id="standard-basic" label="password" variant="standard" type="password" />
      <br />
      <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained" style={{backgroundColor: '#5CE7ED'}}>Login</Button>
    <br />
      <NavLink to="/register" style={{textDecoration: 'none'}}>
      <Button variant="text">New to Magic LifeBD?</Button>
      </NavLink>
    </form>
    <br />
      <Button onClick={HandlesignWithGoogle} sx={{ width: '75%', m: 1 }} type="submit" variant="contained" style={{backgroundColor: '#5CE7ED'}}>Sign in with Google</Button>
      </Box>
    }
  
    {
       isLoading && <CircularProgress color="secondary" />
    }

    {
      user?.email && <Alert sx={{ width: '75%', m: 1 }} severity="success">Logged in successfully!</Alert>
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

export default Login;