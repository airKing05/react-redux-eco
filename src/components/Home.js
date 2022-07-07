import React, { useEffect } from 'react';
import { addToCart, emptyCart, removeToCart } from '../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/actions/productAction';


export default function Home() {
    const dispatch = useDispatch();
    const result = useSelector((state)=> state.productData)
    // console.log("state data in home from saga", result)
    
    // const product = {
    //     name: 'i phone 13',
    //     type: 'mobile',
    //     color: 'gray',
    //     price: '$700'
    // }

    // api data on onload
    useEffect(()=>{
      dispatch(productList())
    }, [])
  return (
    <div>
        
      <h1>E-commerce Product Page And Cart Page </h1> <br /> <br />
      {/* <button onClick={() => dispatch(addToCart(product))}> Add to cart</button> <br/><br/> */}
      {/* <button onClick={() => dispatch(removeToCart(product.name))}>Remove to cart</button> <br /><br /> */}
      <button onClick={() => dispatch(emptyCart())}>Empty cart</button> <br /><br />
      {/* <button onClick={() => dispatch(productData())}>get product</button> <br /><br /> */}

     <div className='product-container'>
       
      { 
        result && result.map((item)=>
          <div className='product-item' key={item.id}>
            <img src={item.photo} alt="item"/>
            <div>Name: {item.name}</div>
            <div>Brand: {item.brand}</div>
            <div>Color: {item.color}</div>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
            <div><button onClick={() => dispatch(addToCart(item))}>Add to cart</button></div> 
            <div><button onClick={() => dispatch(removeToCart(item.id))}>Remove to cart</button></div>
          </div>
        )
      }
     </div>
    </div>
  )
}
