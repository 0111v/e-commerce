import React, { useEffect, useState } from 'react'
// import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

const Home = () => {
  const [ products, setProducts] = useState([])

  useEffect(() => {
    fetch(("https://fakestoreapi.com/products"))
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <div className='container'>
      <h1>Products</h1>
      <div className='product-grid'>
      {products.map((product) => <ProductCard key={product.id} product={product}/>)}
      </div>
    </div>
  )
}

export default Home