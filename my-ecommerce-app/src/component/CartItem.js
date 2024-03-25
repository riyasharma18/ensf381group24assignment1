// CartItem.js
import React from 'react';

// may have error with .quantity bc not defined
function CartItem({item, removeFromCart}) {
  function handleRemove() {
    removeFromCart(item);
  }

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} style={{width: '250px'}}/>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ${item.quantity * item.price}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
