import "./App.css";

interface ProductCardProps {
  product: {
    product_name: string;
    brands: string;
    image_url: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="cat-face">
      <img src={product.image_url} alt={product.product_name} />
      <h2>{product.product_name}</h2>
      <p>Brand: {product.brands}</p>
    </div>
  );
};

export default ProductCard;
