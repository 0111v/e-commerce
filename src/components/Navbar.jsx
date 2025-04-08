import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-blue-500 text-white px-4 py-2 flex justify-between">
      <Link to="/" className="font-bold text-lg">My Shop</Link>
      <Link to="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}

export default Navbar;
