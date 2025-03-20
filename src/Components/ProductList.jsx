import { Typography ,Spinner} from "neetoui";
import productsApi from "apis/product";
import { useEffect, useState } from "react";
import { Header, PageNotFound, PageLoader } from "./commons";
import { Input } from "neetoui";
import { Search } from "neetoicons";
import useDebounce from "hooks/useDebounce";
import ProductListItem from "./ProductListItem";
import { useFetchProducts } from "hooks/reactQuery/useProductsApi";
import { DEFAULT_PAGE_INDEX,DEFAULT_PAGE_SIZE } from "./hooks/ProductListConstants";
import { Pagination } from "neetoui";
const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE_INDEX);
  const [searchKey, setSearchKey] = useState("");
  const debouncedSearchKey = useDebounce(searchKey);
  const productsParams = {
    searchTerm: debouncedSearchKey,
    page: currentPage,
    pageSize: DEFAULT_PAGE_SIZE,
  };

  const { data: { products = [], totalProductsCount } = {}, isLoading } =
    useFetchProducts(productsParams);
  return (<div className="flex flex-col">
    <Header 
            title="Smile-Kart" 
          shouldShowBackButton={false}    
           actionBlock={
          <Input
            placeholder="Search products"
            prefix={<Search />}
            type="search"
            value={searchKey}
            onChange={event =>{ setSearchKey(event.target.value);
              setCurrentPage(DEFAULT_PAGE_INDEX);}
            }
          />
        }
        />
    <div className="grid grid-cols-2 justify-items-center gap-y-8 p-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map(product => (
          <ProductListItem key={product.slug} {...product}
           />
           
        ))}
      </div>
      <div className="mb-5 self-end">
      <Pagination
        navigate={page => setCurrentPage(page)}
        count={totalProductsCount}
        pageNo={currentPage || DEFAULT_PAGE_INDEX}
        pageSize={DEFAULT_PAGE_SIZE}
      />
    </div>
  </div>);
};

export default ProductList;