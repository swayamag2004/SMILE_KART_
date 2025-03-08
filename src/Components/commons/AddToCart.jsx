import { useContext, useState } from "react";
import { Button } from "neetoui";
import CartItemsContext from "src/contexts/CartItemsContext";
import { without } from "ramda";
const AddtoCart=({ slug })=>{
    const [cartItems,setCartItems]=useContext(CartItemsContext);
    const handleClick=e=>{
        e.stopPropagation();
        e.preventDefault();
        setCartItems(prevCartItems =>
            prevCartItems.includes(slug)
              ? without([slug], cartItems)
              : [slug, ...cartItems]
          );
    };
    return (
        <Button
        label={cartItems.includes(slug) ? "Remove from cart" : "Add to cart"}
        size="large"
        onClick={handleClick}
      />
    );
};
export default AddtoCart;