import React from 'react';
import './Cart.css';

const CartItem = ({ item, onQuantityChange }) => {
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    onQuantityChange(item.id, newQuantity);
  };

  return (
    <li className="cart-item">
      <div className="item-details">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-price">{item.price} грн</p>
      </div>
      <div className="item-quantity">
        <label htmlFor={`quantity-${item.id}`}>Кількість:</label>
        <input
          type="number"
          id={`quantity-${item.id}`}
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </div>
    </li>
  );
};

export default CartItem;
