import React, { useState } from 'react';
import ReactSlider from 'react-slider';
import { FaShoppingCart } from 'react-icons/fa';

const categories = [
  {
    name: 'SimpliFly',
    image: '/images/simplifly.png',
    subcategories: [
      { name: 'SimpliFly Telemetry', count: 1 },
      { name: 'SimpliFly FPV Drone Kit', count: 4 },
      { name: 'SimpliFly ESCs', count: 3 },
    ],
  },
  {
    name: 'Best Prices',
    image: '/images/best-prices.png',
    subcategories: [],
  },
  {
    name: 'SmartElex',
    image: '/images/smartelex.png',
    subcategories: [
      { name: 'SmartElex HMI Display', count: 4 },
      { name: 'SmartElex TFT Display', count: 9 },
      { name: 'SmartElex Power Modules', count: 38 },
      { name: 'SmartElex Development Board', count: 8 },
      { name: 'SmartElex Audio Modules', count: 11 },
      { name: 'SmartElex RTC (Real time Clock)', count: 4 },
    ],
  },
  { name: 'Refurbished & Partial Working', image: '/images/refurbished.png', subcategories: [] },
  { name: 'Electronic Modules and Displays', image: '/images/electronic.png', subcategories: [] },
  { name: 'Clearance Sale', image: '/images/clearance.png', subcategories: [] },
];

const Component = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 5190340]);

  const allProducts = [
    {
      name: 'TP4056 1A Li-Ion Battery Charging',
      image: '/imgs/TP4056 1A Li-Ion Battery Charging.jpg',
      sku: '44232',
      rating: 4.5,
      price: 130000,
      reviews: 96,
    },
    {
      name: 'Online FDM 3D Printing Service',
      image: '/imgs/Online FDM 3D Printing Service.jpg',
      sku: '901845',
      rating: 4.8,
      price: 10000,
      reviews: 190,
    },
    {
      name: 'LM2596S DC-DC Buck Converter',
      image: '/imgs/LM2596S DC-DC Buck Converter.jpg',
      sku: '11548',
      rating: 4.6,
      price: 41000,
      reviews: 69,
    },
    {
      name: 'TP4056 1A Li-ion lithium Battery',
      image: '/imgs/TP4056 1A Li-ion lithium Battery.jpg',
      sku: '835842',
      rating: 4.5,
      price: 14000,
      reviews: 15,
    },
    {
      name: 'Infrared Obstacle Avoidance IR',
      image: '/imgs/Infrared Obstacle Avoidance IR.jpg',
      sku: '7748',
      rating: 4.4,
      price: 250000,
      reviews: 38,
    },
    {
        name: 'Infrared Obstacle Avoidance IR',
        image: '/imgs/servo.jpg',
        sku: '7748',
        rating: 4.4,
        price: 250000,
        reviews: 38,
      },
      {
        name: 'Infrare Avoidance IR',
        image: '/imgs/nodemcu.jpg',
        sku: '7748',
        rating: 4.4,
        price: 250000,
        reviews: 38,
      },
      {
        name: 'Avoidance IR',
        image:'/imgs/l298n.jpg',
        sku: '7748',
        rating: 4.4,
        price: 250000,
        reviews: 38,
      },
      
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleFilterClick = () => {
    const [min, max] = priceRange;
    const filtered = allProducts.filter(product => product.price >= min && product.price <= max);
    setFilteredProducts(filtered);
  };

  const toggleCategory = (categoryName) => {
    setExpandedCategory(expandedCategory === categoryName ? null : categoryName);
  };

  return (
    <section
      id="components"
      className="bg-cover bg-center min-h-screen py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url('imgs/All-Products-bg.avif')" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">

        {/* Sidebar with Filter */}
        <aside className="w-full lg:w-1/4">
          <div className="border rounded-lg shadow-sm p-4 bg-white/90">
            <h3 className="text-lg font-semibold mb-4">Browse Categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => {
                const isExpanded = expandedCategory === category.name;
                const totalCount = category.subcategories.reduce((sum, sub) => sum + sub.count, 0);
                return (
                  <li key={index} className="space-y-1">
                    <div
                      onClick={() => toggleCategory(category.name)}
                      className="flex items-center justify-between text-sm text-gray-700 hover:text-indigo-600 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        {category.subcategories.length > 0 && (
                          <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                          >
                            {isExpanded ? (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            ) : (
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            )}
                          </svg>
                        )}
                        <span>{category.name}</span>
                      </div>
                      {totalCount > 0 && <span className="text-xs text-gray-400">({totalCount})</span>}
                    </div>

                    {isExpanded && category.subcategories.length > 0 && (
                      <ul className="pl-5 text-sm text-gray-700 space-y-1">
                        {category.subcategories.map((subcategory, subIndex) => (
                          <li key={subIndex} className="flex justify-between">
                            <span>{subcategory.name}</span>
                            <span className="text-gray-400">({subcategory.count})</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Price Filter */}
            <div className="border-t pt-4 mt-4">
              <h3 className="text-lg font-semibold mb-2">Filter by price</h3>
              <ReactSlider
                className="w-full h-2 bg-gray-300 rounded"
                thumbClassName="h-5 w-5 rounded-full bg-purple-800 cursor-pointer border-2 border-white"
                trackClassName="h-2 bg-purple-500 rounded"
                min={0}
                max={5190340}
                value={priceRange}
                onChange={handlePriceChange}
                ariaLabel={['Lower thumb', 'Upper thumb']}
                pearling
                minDistance={10000}
              />
              <p className="text-sm text-gray-500 mt-2">
                Price: ₹ {priceRange[0].toLocaleString()} — ₹ {priceRange[1].toLocaleString()}
              </p>
              <button
                className="mt-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-1 px-4 rounded"
                onClick={handleFilterClick}
              >
                Filter
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Products</h1>
          <p className="text-gray-700 mb-6">
            Browse and buy electronics, modules, sensors, and DIY kits at the best prices.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-4 shadow hover:shadow-md transition cursor-pointer flex flex-col"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-28 object-contain mb-3"
                />
                <h3 className="text-sm font-medium text-gray-800">{product.name}</h3>
                <p className="text-xs text-gray-500 mt-1">SKU: {product.sku}</p>
                <div className="flex items-center text-sm mt-1">
                  <span className="text-purple-700 font-semibold">₹ {product.price.toFixed(2)}</span>
                  <span className="ml-1 text-xs text-gray-500">(Incl. GST)</span>
                </div>
                <div className="flex items-center text-sm mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">{product.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                </div>
                <button className="mt-auto bg-purple-600 text-white text-sm px-3 py-1 rounded-full hover:bg-purple-700 w-fit self-end">
                   <FaShoppingCart />
                </button>
              </div>
            ))}
          </div>
        </main>

      </div>
    </section>
  );
};

export default Component;
