import { PRODUCT_LIST } from '../constants/constants'

export const  productData = () =>{
    // const data = fetch('http://localhost:3001/products');
    // data.then((res)=> res.json())
    //     .then((result) => console.log("product action", result))
    //     .catch(err=> console.log("error:", err))
 return {
    type : PRODUCT_LIST,
    // payload: "apple"
 }
}