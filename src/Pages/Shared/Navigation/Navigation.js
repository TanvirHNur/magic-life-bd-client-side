import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {  NavLink } from 'react-router-dom';
import './Navigation.css'
// import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
  // const {user, logOut}= useAuth();
    return (
          <div>
            
              <Box sx={{ flexGrow: 1 }}>
              <AppBar className="nav-bar-bg" position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Magic Life
                  </Typography>
                  <NavLink style={{textDecoration: 'none', color: 'white', backgroundColor: '#5CE7ED'}} to="/appointment">
                  <Button color="inherit">Explore More</Button>
                  </NavLink>
                  {/* {
                    user?.email ? 
                    <>
                    <NavLink to="/dashboard" style={{textDecoration: 'none', color: 'white'}}>
                  <Button  color="inherit">Dashboard</Button>
                  </NavLink> 
                    <NavLink to="/" style={{textDecoration: 'none', color: 'white'}}>
                  <Button  color="inherit" onClick={logOut}>Log out</Button>
                  </NavLink> 
                  </>
                  : 
                  <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
                  <Button color="inherit">Login</Button>
                  </NavLink>
                  } */}
                </Toolbar>
              </AppBar>
            </Box>
          </div>
    );
};

export default Navigation;