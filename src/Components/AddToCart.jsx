
import { Button } from "neetoui";

const AddtoCart=({ isInCart, toggleIsInCart })=>{
    const handleClick=e=>{
        e.stopPropagation();
        e.preventDefault();
        toggleIsInCart();
    };
    return (
        <Button
        label={isInCart ? "Remove from cart" : "Add to cart"}
        size="large"
        onClick={handleClick}
      />
    );
};
export default AddtoCart;