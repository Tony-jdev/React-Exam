import React, { useContext, useState, useEffect } from 'react';
import Product from './Product';
import ProductsContext from '../../contexts/ProductsContext';
import './Products.css';

const Products = ({ selectedCategory }) => {
  const products = useContext(ProductsContext);
  const filteredProducts = selectedCategory ? products.filter((product) => product.category === selectedCategory) : products;
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };

  console.log(cartItems);

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default Products;
