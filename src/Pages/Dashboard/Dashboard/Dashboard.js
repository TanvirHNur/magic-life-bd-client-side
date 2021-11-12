import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route, Link, useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardHome from '../DashbordHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Payment from '../Payment/Payment';
import WriteAReview from '../WriteAReview/WriteAReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';

const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {path, url} = useRouteMatch();
  const  {admin, logOut} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <NavLink sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} to="/allProducts">
          <Button color="inherit">Explore more</Button>
          </NavLink>
      <NavLink sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} to={`${url}/writeAReview`}>
          <Button color="inherit">Write A Review</Button>
          </NavLink>
          <Link to={`${url}`} sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} >
          <Button color="inherit">My Orders</Button>
          </Link>
      <Link to={`${url}/payment`} sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} >
          <Button color="inherit">Pay Now</Button>
          </Link>
          <br />
          <Link to="/" style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}}>
                  <Button  color="inherit" onClick={logOut}>Log out</Button>
                  </Link> 
      {
        admin && <Box>
          <Link to={`${url}/makeAdmin`} sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} >
          <Button color="inherit">Make Admin</Button>
          </Link>
          <Link to={`${url}/manageAllOrders`} sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} >
          <Button color="inherit">All Orders</Button>
          </Link>
      <Link to={`${url}/addProduct`} sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} >
          <Button color="inherit">Add Product</Button>
          </Link>
      <Link to={`${url}/manageProducts`} sx={{p: 3}} style={{textDecoration: 'none', color: 'white', backgroundColor: '#41bcc0bd', padding: '5px'}} >
          <Button color="inherit">Manage Products</Button>
          </Link>
        </Box>
      }
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
            
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
          <NavLink style={{textDecoration: 'none', color: 'white'}} to="/">
          <Button color="inherit">Home</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          <Switch>
              <Route exact path={path}>
              <DashboardHome />
              </Route>
              <Route exact path={`${path}/payment`}>
              <Payment />
              </Route>
              <Route exact path={`${path}/writeAReview`}>
              <WriteAReview />
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/AddProduct`}>
                <AddProduct/>
              </AdminRoute>
              <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
          </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
