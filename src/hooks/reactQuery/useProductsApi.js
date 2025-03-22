import { QUERY_KEYS } from "constants/query";
import { useQuery } from "react-query";
import productsApi from "apis/product";
import { useQueries } from "react-query";
import { useTranslation } from "react-i18next";
import useCartItemsStore from "stores/useCartItemsStore";
import { Toastr } from "neetoui";
import { prop } from "ramda";
import { existsBy } from "neetocist";



export const useShowProduct = slug =>

  useQuery({
    queryKey: [QUERY_KEYS.PRODUCTS, slug],
    queryFn: () => productsApi.show(slug),
  });
  export const useFetchProducts = params =>
    useQuery({
      queryKey: [QUERY_KEYS.PRODUCTS, params],
      queryFn: () => productsApi.fetch(params),
      keepPreviousData: true,
    });

    export const useFetchCartProducts = slugs => {
        const { t } = useTranslation();
        const { cartItems, setSelectedQuantity } = useCartItemsStore();
       const responses= useQueries(
          slugs.map(slug => ({
            queryKey: [QUERY_KEYS.PRODUCTS, slug],
            queryFn: () => productsApi.show(slug),
            onSuccess: ({ availableQuantity, name }) => {
                if (availableQuantity >= cartItems[slug]) return;
        
                setSelectedQuantity(slug, availableQuantity);
                if (availableQuantity === 0) {
                  Toastr.error(t("product.error.removedFromCart", { name }), {
                    autoClose: 2000,
                  });
                }
              },
          }))
        );
        const data = responses.map(prop("data")).filter(Boolean);
        const isLoading = existsBy({ isLoading: true }, responses);

        return { data, isLoading };
      };