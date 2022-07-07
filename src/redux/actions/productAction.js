import { PRODUCT_LIST, SEARCH_PRODUCT } from '../constants/constants'

export const  productList = () =>{
    // const data = fetch('http://localhost:3001/products');
    // data.then((res)=> res.json())
    //     .then((result) => console.log("product action", result))
    //     .catch(err=> console.log("error:", err))
 return {
    type : PRODUCT_LIST,
    // payload: "apple"
 }
};

export const searchProduct = (query) =>{
   return{
      type: SEARCH_PRODUCT,
     payload: query 
   }
}