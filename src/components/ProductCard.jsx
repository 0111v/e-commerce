import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        className="mt-2 px-3 py-1 bg-green-500 text-white rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
