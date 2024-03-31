import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products') // Assuming the React app is served from the same origin as the Flask server
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;