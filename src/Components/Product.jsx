
import "./product.css";
import Carousel from "./Carousel";
import { Spinner } from "neetoui";
import { IMAGE_URLS } from "./Constants";
import axios from "axios";
import { useEffect, useState } from "react";
import { isNotNil,append } from "ramda";
import productsApi from "apis/product";


const Product = () => {
  const [isLoading,setIsLoading]=useState(true);
  const [product,setProduct]=useState({});
  const fetchData=async ()=>{
  try{
    const response=await productsApi.show();
    setProduct(response);
  } catch(error){
    console.log("Error occured ",error);
  } finally{
    setIsLoading(false);
  }
};
useEffect(()=>{
  fetchData();
},[]);
const { name, description, mrp, offerPrice, imageUrls, imageUrl}=product;
const discount=mrp-offerPrice;
const discountPercentage=((discount/mrp)*100).toFixed(1);
if(isLoading){
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  );
}
  return <div className="px-6 pb-6">
    <div>
      <p className="py-2 text-4xl font-semibold">{name}</p>
      <hr className="border-2 border-black" />
    </div>
    <div className="flex gap-4 mt-6">
      <div className="w-2/5">
       {isNotNil(imageUrls)?(
         <Carousel title={name} imageUrls={append(imageUrl,imageUrls)}/>
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
      </div>
    </div>
  </div>
};

export default Product;