// cart ke liye ek hi reducer banega kyoki add, remove product ek hi card me hi handle honge
import { ADD_TO_CART, REMOVE_TO_CART, EMPTY_CART } from '../constants/constants';

export const cartData = (data=[], action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            console.log("reducer addToCart called", action.payload)
            return [action.payload, ...data] // reload me purana data delete ho jata hai state se to usko destructor krna pdega
        case REMOVE_TO_CART: 
            console.log("reducer removeToCart called", action.payload)
            let remainingItem = data.filter((item)=> item.id !== action.payload)
            console.warn("remainingItem", remainingItem)
           // data.length = data.length? data.length -1 : [] // ydi eke bhi item nahi ho dta me to stop krdo
            return [...remainingItem];  // bas array ko destruct krke likh dene se hi remove hota jayega
        case EMPTY_CART:
            console.log("reducer removeToCart called")
            data =[]
            return [...data]
        default:
            return data; // 
    }
}   