// Cart.js
import React from 'react';
import CartItem from './CartItem';

// check that item is same as product. and that .quantity works

function Cart({cart, removeFromCart}) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
      ))}
      <h3>Total (in cart): ${cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2)}</h3>
    </div>
  );
}

export default Cart;
