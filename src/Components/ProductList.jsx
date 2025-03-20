import { Typography ,Spinner} from "neetoui";
import productsApi from "apis/product";
import { useEffect, useState } from "react";
import { Header, PageNotFound, PageLoader } from "./commons";
import { Input } from "neetoui";
import { Search } from "neetoicons";
import useDebounce from "hooks/useDebounce";
import ProductListItem from "./ProductListItem";
import { useFetchProducts } from "hooks/reactQuery/useProductsApi";
const ProductList = () => {
  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce(searchKey);

  const { data: { products = [] } = {}, isLoading } = useFetchProducts({
    searchTerm: debouncedSearchKey,
  });
  return <div className="flex flex-col">
    <Header 
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
           />
           
        ))}
      </div>
  </div>
};

export default ProductList;