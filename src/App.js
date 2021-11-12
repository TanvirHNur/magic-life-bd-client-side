import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import AllProducts from './Pages/AllProducts/AllProducts';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import Purchase from './Pages/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
   <AuthProvider>
   <Router>
       <Navigation/>
       <Switch>
       <Route exact path="/">
            <Home />
          </Route>
         <Route path="/home">
         <Home/>
         </Route>
         <Route path="/allProducts">
          <AllProducts/>
         </Route>
         <PrivateRoute path="/purchase/:id">
          <Purchase/>
         </PrivateRoute>
         <PrivateRoute path="/dashboard">
          <Dashboard/>
         </PrivateRoute>
         <Route path="/login">
            <Login/>
         </Route>
         <Route path="/Register">
            <Register/>
         </Route>
         <Route path="*">
            <NotFound/>
         </Route>
        
       </Switch>
     </Router>
   </AuthProvider>
    </div>
  );
}

export default App;
