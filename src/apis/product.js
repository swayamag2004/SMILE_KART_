import axios from "axios";
const show=()=>axios.get("ttps://smile-cart-backend-staging.neetodeployapp.com/products/infinix-inbook-2");
const productsApi={ show };
export default productsApi;
