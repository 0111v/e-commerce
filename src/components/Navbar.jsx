import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  
  const {cart} = useCart()

  return (
    <div className='navbar'>
      <Link to={'/'}>Home</Link>
      <Link to={'/cart'}>Cart ({cart.length})</Link>
    </div>
  )
}

export default Navbar