import React from 'react'
import { useCart } from '../context/CartContext'

const CartItem = ({item}) => {
  const {removeFromCart, increaseQty, decreaseQty} = useCart()
  return (
    <div className='product-card'>
      <img className='cart-img' src={item.image} alt={item.title} />
      <h2>{item.title}</h2>
      <p>{item.quantity}</p>
      <p>{item.price}</p>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
      <button onClick={() => increaseQty(item.id)}>+</button>
      <button onClick={() => decreaseQty(item.id)} disabled={item.quantity === 1}>-</button>
    </div>
  )
}

export default CartItem