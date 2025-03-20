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
import i18n from "src/common/i18n";
import withTitle from "utils/withTitle";
import { useFetchCartProducts } from "hooks/reactQuery/useProductsApi";
const Cart = () => {
  const slugs = useCartItemsStore(store => keys(store.cartItems));

  const { data: products = [], isLoading } = useFetchCartProducts(slugs);
const { cartItems, setSelectedQuantity } = useCartItemsStore();
const totalMrp = cartTotalOf(products, MRP);
const totalOfferPrice = cartTotalOf(products, OFFER_PRICE);

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

export default withTitle(Cart, i18n.t("cart.title"))