import React from 'react';
import {useSelector} from 'react-redux'

export default function Header() {
    const result = useSelector((state)=> state.cartData)
    console.log("from redux in header", result)
  return (
    <div className='header'>
        <div className='cart-div'>
              <img src='https://bit.ly/3agxpVh' alt='cart-img'/>
              <span>{result.length}</span>
        </div>
    </div>
  )
}
