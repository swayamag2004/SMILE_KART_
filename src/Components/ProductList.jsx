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
import { useHistory } from "react-router-dom";
import { buildUrl } from "utils/url";
import useQueryParams from "hooks/useQueryParams";
import route from "routes";
import { mergeLeft } from "ramda";
import { filterNonNull } from "neetocist";
import useFuncDebounce from "hooks/useFuncDebounce";
const ProductList = () => {
 
  
  const history = useHistory();
  const queryParams = useQueryParams();
  const { page, pageSize ,searchTerm = ""} = queryParams;
  const [searchKey, setSearchKey] = useState(searchTerm);
  
  const productsParams = {
    searchTerm,
    page: Number(page) || DEFAULT_PAGE_INDEX,
    pageSize: Number(pageSize) || DEFAULT_PAGE_SIZE,
  };
  const handlePageNavigation = page =>
    history.replace(
      buildUrl(
        route.products.index,
        mergeLeft({ page, pageSize: DEFAULT_PAGE_SIZE }, queryParams)
      )
    );
  const { data: { products = [], totalProductsCount } = {}, isLoading } =
    useFetchProducts(productsParams);
    const updateQueryParams = useFuncDebounce(value => {
      const params = {
        page: DEFAULT_PAGE_INDEX,
        pageSize: DEFAULT_PAGE_SIZE,
        searchTerm: value || null,
      };
  
      history.replace(buildUrl(route.products.index, filterNonNull(params)));
    });
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
            onChange={({ target: { value } }) => {
              updateQueryParams(value);
              setSearchKey(value);
            }}
            
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
        navigate={handlePageNavigation}
        count={totalProductsCount}
        pageNo={Number(page) || DEFAULT_PAGE_INDEX}
        pageSize={Number(pageSize) || DEFAULT_PAGE_SIZE}
      />
    </div>
  </div>);
};

export default ProductList;