import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart, increaceQty, decreaseQty } = useCart();

  return (
    <div className="product-card">
      <div>
        <h2 className="font-medium">{item.name}</h2>
        <p>{item.quantity}</p>
        <p>${item.price}</p>
      </div>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
      <button onClick={() => increaceQty(item.id)}>+</button>
      <button onClick={() => decreaseQty(item.id)} disabled={item.quantity === 1}>-</button>
    </div>
  );
}

export default CartItem;
