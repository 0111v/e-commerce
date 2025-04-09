import { products } from "../data/products";
import ProductCard from "../components/ProductCard";


function Home() {
  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
