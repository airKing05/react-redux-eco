import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartData = useSelector((state) => state.cartData);

  // extracting price form selected product of cart
  let amount = cartData.length && cartData.map((item)=>item.price).reduce((previousValue, currentValue)=> previousValue+currentValue)
  console.log("total amount", amount)
  console.log("cartData in cart page", cartData)
  return (

    <div className='cart-container'>
      <Link to="/">
        <span>go to product list</span>
      </Link>
      <h2> Cart Page</h2>
      <div className='cart-container-details'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Color</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              cartData && cartData.map((item) =>
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.color}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                </tr>
              )
            }
          </tbody>
        </table>
        <div className='price-details'>
          <div className='adjust-price'>
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className='adjust-price'>
            <span>Discount</span>
            <span>{amount/10}</span>
          </div>
          <div className='adjust-price'>
            <span>Tax</span>
            <span>{amount*8/100}</span>
          </div>
          <div className='adjust-price'>
            <span>Total Amount</span>
            <span>{parseInt(amount + (amount * 18 / 100) -(amount/10))}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
