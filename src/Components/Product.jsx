
import "./product.css";
import Carousel from "./Carousel";
import { Header, PageNotFound, PageLoader } from "./commons";
import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import { isNotNil,append } from "ramda";
import productsApi from "apis/product";
import AddtoCart from "./commons/AddToCart";
import useSelectedQuantity from "./hooks/useSelectedQuantity";
import { Button } from "neetoui";
import route from "routes";
import i18n from "src/common/i18n";
import withTitle from "utils/withTitle";
import { useShowProduct } from "hooks/reactQuery/useProductsApi";
const Product = () => {
  const { slug } =useParams();
  const history=useHistory();
  const { selectedQuantity, setSelectedQuantity } = useSelectedQuantity(slug);
  const { data: product = {}, isLoading, isError } = useShowProduct(slug);
if(isError)return <PageNotFound/>
const { name, description, mrp, offerPrice, imageUrls, imageUrl,availableQuantity}=product;
const discount=mrp-offerPrice;
const discountPercentage=((discount/mrp)*100).toFixed(1);
if(isLoading) {return <PageLoader/>}
  return <div className="px-6 pb-6">
   <Header title={name}/>
    <div className="flex gap-4 mt-6">
      <div className="w-2/5">
       {isNotNil(imageUrls)?(
         <Carousel/>
       ):(
        
        <img alt={name} className="w-48" src={imageUrl} />
       )}
        
      </div>
      <div className="w-3/5 space-y-4">
        <p>
          {description}
        </p>
        <p>MRP: ${mrp}</p>
        <p className="font-semibold">Offer price: ${offerPrice}</p>
        <p className="font-semibold text-green-600">{discountPercentage}% off</p>
        <div className="flex space-x-10">
            <AddtoCart {...{ availableQuantity, slug }} />
            <Button
              className="bg-neutral-800 hover:bg-neutral-950"
              label="Buy now"
              size="large"
              to={route.checkout}
              onClick={() => setSelectedQuantity(selectedQuantity || 1)}
            />
          </div>
      </div>
      
    </div>
  </div>
};

export default withTitle(Product,i18n.t("product"));