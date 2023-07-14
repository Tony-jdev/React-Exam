import React from 'react';
import './Products.css';

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product">
      <img className="product-image" src={product.image} alt={product.title} />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price} грн</p>
        <div className="product-rating">
          <div className="rating-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
          <p className="rating-value">{product.rating.rate} ({product.rating.count} відгуків)</p>
        </div>
        <button className="buy-button" onClick={handleAddToCart}>Купити</button>
      </div>
    </div>
  );
};

export default Product;
