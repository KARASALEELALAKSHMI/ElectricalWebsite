import React, { useState } from 'react';

const products = [
  { id: 1, name: "Arduino Uno", price: 899 },
  { id: 2, name: "Raspberry Pi 4", price: 4999 },
  { id: 3, name: "ESP32 Dev Board", price: 350 }
];

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.qty, 0);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Robu Store</h1>
      <h2>Products</h2>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} × {item.qty} = ₹{item.qty * item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;