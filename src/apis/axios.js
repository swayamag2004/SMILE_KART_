import axios from "axios";
import {keysToCamelCase} from "neetocist";
import { serializeKeysToSnakeCase } from "neetocist";
import { evolve } from "ramda";

const requestInterceptors = () => {
  axios.interceptors.request.use(request =>
    evolve(
      { data: serializeKeysToSnakeCase, params: serializeKeysToSnakeCase },
      request
    )
  );
};

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
   requestInterceptors();
}