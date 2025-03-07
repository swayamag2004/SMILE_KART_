import "./App.css";
import { Button } from "neetoui";
import {NavLink,Route,Switch} from "react-router-dom";
import Product from "./Components/Product"
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";


const App = () => (  
  <>
   <div className="flec space-x-2">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/products">Product</NavLink>
  </div>
  <Switch>
  <Route exact component={Product} path="/products"/>
  <Route exact component={Home} path="/"/>
  <Route exact component={PageNotFound} path="*"/>
  </Switch>
  </>

);

export default App;
