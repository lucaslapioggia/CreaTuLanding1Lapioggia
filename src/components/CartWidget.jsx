import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/CartWidget.css';

const CartWidget = () => {
  const cartCount = 3;
  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      <span className="cart-count">{cartCount}</span>
    </div>
  );
};

export default CartWidget;