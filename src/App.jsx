import "./App.css";
import { Button } from "neetoui";
import {NavLink,Route,Switch} from "react-router-dom";
import Product from "./Components/Product"
import ProductList from "./Components/ProductList";
import PageNotFound from "./Components/commons/PageNotFound";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


const App = () => (  
  <>
   {/* <div className="flec space-x-2">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/product">Product</NavLink>
  </div> */}
  <Switch>
  <Route exact component={Product} path="/product"/>
  <Route exact component={ProductList} path="/products"/>
  <Route exact component={Product} path="/products/:slug"/>
  <Redirect exact from="/" to ="/products"/>
  <Route exact component={PageNotFound} path="*"/>
  </Switch>
  </>

);

export default App;
