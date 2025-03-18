import { useContext, useState } from "react";
import { Button } from "neetoui";
import { isNil, paths } from "ramda";
import useCartItemsStore from "stores/useCartItemsStore";
import { without } from "ramda";
import {shallow} from "zustand/shallow";
import ProductQuantity from "./ProductQuantity";
import useSelectedQuantity from "../hooks/useSelectedQuantity";
const AddtoCart = ({ slug, availableQuantity }) => {
  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity(slug);
    const handleClick=e=>{
        e.stopPropagation();
        e.preventDefault();
        setSelectedQuantity(1);
    };
    if (isNil(selectedQuantity)) {
      return <Button label="Add to cart" size="large" onClick={handleClick} />;
    }
    return <ProductQuantity  {...{availableQuantity, slug }}/>;
};
export default AddtoCart;