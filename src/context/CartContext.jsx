import { createContext, useContext, useState } from "react";

const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

const addToCart = (product) => {
  setCart((prev) => {
    const existingItem = prev.find((item) => item.id === product.id)
    if (existingItem) {
      return prev.map((item) => 
        item.id === product.id ? 
        {...item, quantity: item.quantity + 1} :
        item
      ) 
    }  else return [...prev, {...product, quantity: 1}]
  })
}

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const increaceQty = (id) => {
    setCart((prev) => 
      prev.map((item) => 
        item.id === id ? 
        {...item, quantity: item.quantity + 1} :
        item
      )
    )
  }

  const decreaseQty = (id) => {
    setCart((prev) => 
      prev.map((item) => 
        item.id === id && item.quantity > 1 ?
        {...item, quantity: item.quantity - 1} :
        item
      )
    )
  }

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, increaceQty, decreaseQty}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)