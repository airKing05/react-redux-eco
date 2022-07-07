import { PRODUCT_LIST, SET_PRODUCT_LIST } from "../constants/constants";

export const productData = (data=[], action) =>{
    switch (action.type) {
        // do not need to PRODUCT_LIST case, it is only use to call api in saga
        // case PRODUCT_LIST:
        //     console.log("product reducer", data)
        //     return [action.payload, ...data]
        case SET_PRODUCT_LIST:
           // console.log("set_product in productReducer", action)
            return [...action.payload]
        default:
          return data;
    }
}