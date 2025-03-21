import "./App.css";
import { Button } from "neetoui";
import {NavLink,Route,Switch} from "react-router-dom";
import Product from "./Components/Product"
import ProductList from "./Components/ProductList";
import PageNotFound from "./Components/commons/PageNotFound";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import route from "routes";
import { useState } from "react";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
  

  
  return (  
  <>
   {/* <div className="flec space-x-2">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/product">Product</NavLink>
  </div> */}
  <Switch>
  <Route exact component={ProductList} path={route.products.index}/>
  <Route exact component={Product} path={route.products.show}/>
  <Route exact component={Cart} path={route.cart} />
  <Route exact component={Checkout} path={route.checkout} />
  <Redirect exact from={route.root} to ={route.products.index}/>
  <Route  component={PageNotFound} path="*"/>
  
  </Switch>
  </>

);
};

export default App;
