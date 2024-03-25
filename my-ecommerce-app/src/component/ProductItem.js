import React, { useState } from 'react';

function ProductItem({product, addToCart}) {
  const [showDescription, setShowDescription] = useState(false);

  function handleAddToCart() {
    addToCart(product);
  }

  return (
    <div className="product-item" onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>
      <img src={product.image} alt={product.name} style={{ width: '300px'}} />
      <p>{product.name}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {showDescription && <p>{product.description}</p>}
    </div>
  );
}

export default ProductItem;
