import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
     <Router>
       <Navigation/>
       <Switch>
         <Route path="/home">

         </Route>
         <Route path="/">
            <Home />
          </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
