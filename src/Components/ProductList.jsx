import { Typography ,Spinner} from "neetoui";
import productsApi from "apis/product";
import { useEffect, useState } from "react";
import { Header, PageNotFound, PageLoader } from "./commons";
import { Input } from "neetoui";
import { Search } from "neetoicons";
import useDebounce from "hooks/useDebounce";
import ProductListItem from "./ProductListItem";
import { without } from "ramda";

const ProductList = () => {
  const [products,setProducts]=useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce(searchKey);
  const toggleIsInCart = slug =>
    setCartItems(prevCartItems =>
      prevCartItems.includes(slug)
        ? without([slug], cartItems)
        : [slug, ...cartItems]
    );
  const fetchProducts=async ()=>{
    try{
      const{ products }= await productsApi.fetch({ searchTerm: debouncedSearchKey });
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
  useEffect(()=>{
    fetchProducts();
  },[debouncedSearchKey]);
   if(isLoading){
    return  <PageLoader/>
   }
  return <div className="flex flex-col">
    <Header 
       cartItemsCount={cartItems.length}
            title="Smile-Kart" 
          shouldShowBackButton={false}    
           actionBlock={
          <Input
            placeholder="Search products"
            prefix={<Search />}
            type="search"
            value={searchKey}
            onChange={event => setSearchKey(event.target.value)}
          />
        }
        />
    <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductListItem key={product.slug} {...product}
          isInCart={cartItems.includes(product.slug)}
          toggleIsInCart={() => toggleIsInCart(product.slug)}
           />
        ))}
      </div>
  </div>
};

export default ProductList;