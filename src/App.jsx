import "./App.css";
import { Button } from "neetoui";
import {NavLink,Route,Switch} from "react-router-dom";
import Product from "./Components/Product"
import ProductList from "./Components/ProductList";
import PageNotFound from "./Components/commons/PageNotFound";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import route from "routes";
import { useState } from "react";
import CartItemsContext from "./contexts/CartItemsContext";

const App = () => {
  
  const [cartItems,setCartItems]=useState([]);
  
  return (  
  <>
   {/* <div className="flec space-x-2">
  <NavLink to="/">Home</NavLink>
  <NavLink to="/product">Product</NavLink>
  </div> */}
  <CartItemsContext.Provider value={[cartItems,setCartItems]}>
  <Switch>
  <Route exact component={ProductList} path={route.products.index}/>
  <Route exact component={Product} path={route.products.show}/>
  <Redirect exact from={route.root} to ={route.products.index}/>
  <Route  component={PageNotFound} path="*"/>
  </Switch>
  </CartItemsContext.Provider>
  </>

);
};

export default App;
