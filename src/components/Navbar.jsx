// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* If using image */}
          <img src="public\imgs\logo2.png" alt="Robotics Store" className="w-10 h-10 object-contain" />

          {/* If using text instead */}
           <span className="text-2xl font-bold text-black">Electronics Store</span> 
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <a
              href="#Header"
              className="font-bold text-black hover:text-gray-400 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#Header"
              className="font-bold text-black hover:text-gray-400 cursor-pointer"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#Header"
              className="font-bold text-black hover:text-gray-400 cursor-pointer"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#About"
              className="font-bold text-black hover:text-gray-400 cursor-pointer"
            >
              Projects
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <a
          href="#Register"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-600"
        >
          Login/Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;