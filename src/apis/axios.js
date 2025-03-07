import axios from "axios";
import {keysToCamelCase} from "neetocist"

const transformKeys=(response)=>{
    if(response.data)response.data=keysToCamelCase(response.data);
};
const setHttpHeaders=()=>{
    axios.defaults.headers={
        Accept:"application/json",
        "Content-Type":"application/json",
    };
};

const responseInterceptors = () => {
  axios.interceptors.response.use(response => {
    transformKeys(response);
    return response.data
  }
  );
};

export default function initializeAxios(){
   axios.defaults.baseURL="https://smile-cart-backend-staging.neetodeployapp.com/";
   setHttpHeaders();
   responseInterceptors();
}