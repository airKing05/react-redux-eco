import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from '../constants/constants';

// add product to cart
export const addToCart = (data) => {
    console.log("action called", data)
    return {
        type: ADD_TO_CART,
        payload: data
        // data hi paylaod hota hai
    }
};
// remove product form cart
export const removeToCart = (data) =>{
    console.log("remove cart");
    return{
        type: REMOVE_TO_CART,
        payload: data
    }
}
// remove all product form cart
export const emptyCart = () => {
    console.log("empty cart");
    return{
        type: EMPTY_CART,
    }
}
