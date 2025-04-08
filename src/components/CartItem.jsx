import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border p-2 mb-2 rounded">
      <div>
        <h2 className="font-medium">{item.name}</h2>
        <p>${item.price}</p>
      </div>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded"
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;
