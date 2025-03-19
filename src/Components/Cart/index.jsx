import { useEffect } from "react";
import productsApi from "apis/product";
import { Header } from "../commons";
import { keys } from "ramda";
import useCartItemsStore from "stores/useCartItemsStore";
import { shallow } from "zustand/shallow";
import { useState } from "react";
import {PageLoader} from "../commons";
import { isEmpty } from "ramda";
import ProductCard from "./ProductCard";
import { NoData } from "neetoui";
import { Toastr } from "neetoui";
import { MRP,OFFER_PRICE } from "../Constants";
import { cartTotalOf } from "../utils";
import PriceCard from "./PriceCard";

const Cart = () => {
    const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const { cartItems, setSelectedQuantity } = useCartItemsStore();
const totalMrp = cartTotalOf(products, MRP);
const totalOfferPrice = cartTotalOf(products, OFFER_PRICE);
    const slugs = keys(cartItems);
  const fetchCartProducts = async () => {
    try {
      const responses = await Promise.all(
        slugs.map(slug => productsApi.show(slug))
      );
      setProducts(responses);
      responses.forEach(({ availableQuantity, name, slug }) => {
        if (availableQuantity >= cartItems[slug]) return;
  
        setSelectedQuantity(slug, availableQuantity);
        if (availableQuantity === 0) {
          Toastr.error(
            `${name} is no longer available and has been removed from cart`,
            {
              autoClose: 2000,
            }
          );
        }
      });
    } catch (error) {
      console.log("An error occurred:", error);
    } finally{
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCartProducts();
  }, [cartItems]);


  if (isLoading) return <PageLoader />;

if (isEmpty(products)) {
  return (
    <>
      <Header title="My Cart" />
      <div className="flex h-screen items-center justify-center">
        <NoData title="Your cart is empty!" />
      </div>
    </>
  );
}

    return (
    <>
      <Header title="My Cart" />
      <div className="mt-10 flex justify-center space-x-10">
        <div className="w-1/3 space-y-5">
          {products.map(product => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
        {totalMrp > 0 && (
          <div className="w-1/4">
            <PriceCard {...{ totalMrp, totalOfferPrice }} />
          </div>
        )}
      </div>
    </>
  );

};

export default Cart;