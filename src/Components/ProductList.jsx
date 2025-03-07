import { Typography ,Spinner} from "neetoui";
import productsApi from "apis/product";
import { useEffect, useState } from "react";
import { Header, PageNotFound, PageLoader } from "./commons";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const fetchProducts=async ()=>{
    try{
      const { products } =await productsApi.fetch();
      setProducts(products);
    } catch(error){
      console.log("some error occured",error);
    }finally{
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    fetchProducts();
  },[]);
   if(isLoading){
    return  <PageLoader/>
   }
  return <div className="flex flex-col">
    <Header title="Smile-Kart" shouldShowBackButton={false}/>
    <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductListItem key={product.slug} {...product} />
        ))}
      </div>
  </div>
};

export default ProductList;