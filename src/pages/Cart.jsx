import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart } = useCart();

  return (
    <div className="cart-page container">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
}

export default Cart;
