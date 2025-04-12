import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/CartItem'

const Cart = () => {
  const {cart} = useCart()

  return (
    <div className='cart-page container'>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>No itens yet</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item}/>)
      )}
    </div>
  )
}

export default Cart