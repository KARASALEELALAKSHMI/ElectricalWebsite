import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const products = [
  {
    name: 'Axisflying Argus Mini F7 STACK 40A ESC',
    sku: 'R160184',
    category: '(ESC) Drone Speed',
    price: '₹ 8,707.00',
    gst: 'Incl. GST',
    rating: 0,
    image: '/imgs/ESC.jpg',
  },
  {
    name: 'CUAV P8 Radio Sky unit',
    sku: 'R111242',
    category: 'Drone Transmitter and',
    price: '₹ 25,639.00',
    gst: 'Incl. GST',
    rating: 0,
    image: '/imgs/CUAV.jpg',
  },
  {
    name: 'CUAV P8 Radio Base unit',
    sku: 'R111243',
    category: 'Drone Transmitter and',
    price: '₹ 25,639.00',
    gst: 'Incl. GST',
    rating: 5,
    image: '/imgs/CUAVBase.jpg',
  },
  {
    name: 'XING2 2405 FPV Motor Unibell',
    sku: 'R182723',
    category: 'Drone Motor',
    price: '₹ 2,345.00',
    gst: 'Incl. GST',
    rating: 0,
    image: '/imgs/XING2.jpg',
  },
  {
    name: 'Axisflying High Resolution Thermal',
    sku: 'R160211',
    category: 'Thermal Cameras',
    price: '₹ 109,987.00',
    gst: 'Incl. GST',
    rating: 0,
    image: '/imgs/Axisflying.jpg',
  },
  {
    name: 'Walksnail Avatar nano HD Camera',
    sku: '1633865',
    category: 'Drone Parts on Sale, FPV',
    price: '₹ 4,182.00',
    gst: 'Incl. GST',
    rating: 5,
    image: '/imgs/Walksnail.jpg',
  },
];

const FeaturedProducts = () => {
  return (
    <div
      className="py-16 px-6 bg-cover bg-center"
      style={{ backgroundImage: `url('imgs/Feature.bg.avif')` }}
    >
      <h2 className="text-3xl font-bold text-black mb-8">Featured Products</h2>
      <div className="flex gap-6 overflow-x-auto pb-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 border rounded-lg p-4 shadow hover:shadow-lg transition bg-white/90"
          >
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-36 object-contain mb-3"
            />
            <h3 className="text-md font-semibold text-blue-700 hover:underline">{product.name}</h3>
            <p className="text-sm text-gray-600">SKU: {product.sku}</p>
            <div className="flex items-center gap-1 text-yellow-500 text-sm my-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < product.rating ? 'fill-current' : 'text-gray-300'} />
              ))}
              <span className="text-gray-500 text-xs">({product.rating})</span>
            </div>
            <p className="text-lg font-semibold text-gray-800">{product.price}</p>
            <p className="text-xs text-gray-500">{product.gst}</p>
            <button className="mt-3 bg-indigo-600 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-indigo-700">
              <FaShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
