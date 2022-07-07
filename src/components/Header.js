import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { searchProduct } from "../redux/actions/productAction";

export default function Header() {
  // for cart icon count number
  const result = useSelector((state) => state.cartData)
  console.log("from redux in header", result)

  // for search item search_product
  const dispatch = useDispatch();
  
  // get search query
  // function getSearch(event){
  //    dispatch(searchProduct(event.target.value))
  // }

  return (
    <div className='header'>
      <Link to="/">
        <h3 className='logo'>E-Com-Cart-Page</h3>
      </Link>
      <div className='search-input-box'>
        <input type="text" placeholder='Search...' onChange={(e)=>dispatch(searchProduct(e.target.value))}/>
      </div>
      <Link to="/cart">
        <div className='cart-div'>
          <img src='https://bit.ly/3agxpVh' alt='cart-img' />
          <span>{result.length}</span>
        </div>
      </Link>
    </div>
  )
}
