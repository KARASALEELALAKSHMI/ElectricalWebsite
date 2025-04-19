import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Arduino Uno', price: 899 },
  { id: 2, name: 'Raspberry Pi 4', price: 4999 },
  { id: 3, name: 'ESP32 Dev Board', price: 350 }
];

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
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
    <div id="cart" className="p-8">
      <h1 className="text-3xl font-bold mb-4">Power Prox<span>⚡</span></h1>

      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="flex flex-wrap gap-6 mb-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-300 p-4 rounded-md shadow-sm w-[250px]"
          >
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="mb-2">Price: ₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-2 mb-4">
            {cart.map((item) => (
              <li key={item.id} className="text-lg">
                {item.name} × {item.qty} = ₹{item.qty * item.price}
              </li>
            ))}
          </ul>
          <h3 className="text-xl font-bold">Total: ₹{getTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
