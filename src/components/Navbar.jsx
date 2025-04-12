import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {cart} = useCart()
  return (
    <div className='navbar'>
      <Link to={'/'}>Home</Link>
      <div className='nav-right'>
      <Link to={'/cart'}>Cart ({cart.length})</Link>
      <Link to={'/'}>Contact</Link>
      <Link to={'/'}>About</Link>
      </div>
      
    </div>
  )
}

export default Navbar