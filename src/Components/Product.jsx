
import "./product.css";
import Carousel from "./Carousel";
import { Header, PageNotFound, PageLoader } from "./commons";
import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom";
import { isNotNil,append } from "ramda";
import productsApi from "apis/product";
import AddtoCart from "./commons/AddToCart";


const Product = () => {
  const { slug } =useParams();
  const history=useHistory();
  const [isLoading,setIsLoading]=useState(true);
  const [product,setProduct]=useState({});
  const [isError,setIsError]=useState(false);
  const fetchData=async ()=>{
  try{
    const response=await productsApi.show(slug);
    setProduct(response);
  } catch(error){
    setIsError(true);
    console.log("Error occured ",error);
  } finally{
    setIsLoading(false);
  }
};
useEffect(()=>{
  fetchData();
},[]);
if(isError)return <PageNotFound/>
const { name, description, mrp, offerPrice, imageUrls, imageUrl}=product;
const discount=mrp-offerPrice;
const discountPercentage=((discount/mrp)*100).toFixed(1);
if(isLoading) {return <PageLoader/>}
  return <div className="px-6 pb-6">
   <Header title={name}/>
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
        <AddtoCart {...{slug}}/>
      </div>
      
    </div>
  </div>
};

export default Product;