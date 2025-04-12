import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const {addToCart} = useCart()
  

  return (
    <div className='product-card'>
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.name} className='product-image'/>
      </Link>
      <h2>{product.title}</h2>
      <p>${(product.price).toFixed(2)}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  )
}

export default ProductCard