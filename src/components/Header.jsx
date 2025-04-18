import React, { useState, useEffect } from 'react';
import { FaPhone, FaHeart, FaShoppingBag, FaSearch, FaChevronDown,FaListUl } from 'react-icons/fa';


const bannerImages = [
  "public/imgs/arduino.jpg",
  "public/imgs/raspberry.jpg",
  "public/imgs/gas-sensor.jpg", // Replace with your actual image URLs
];

const bannerContent = [
  {
    title: "Introducing Simplifly - Long Range Series",
    description: [
      "Reach speeds up to 150 KMPH in flight",
      "Enjoy up to 25 minutes of uninterrupted flying",
      "Explore up to 5+ kms with long-range transmission",
    ],
    buttonText: "SHOP NOW",
  },
  {
    title: "Raspberry Pi for Beginners",
    description: [
      "Easy-to-follow tutorials",
      "Build your first Raspberry Pi project",
      "Explore the world of computing",
    ],
    buttonText: "GET STARTED",
  },
  {
    title: "Explore Arduino Projects",
    description: [
      "Start building with Arduino components",
      "Learn through hands-on projects",
      "Expand your knowledge of electronics",
    ],
    buttonText: "LEARN MORE",
  },
];

const Header = () => {
  const [showCategories, setShowCategories] = useState(false);
const [showSmartElex, setShowSmartElex] = useState(false);
const [showPowerModules, setShowPowerModules] = useState(false);
const [showShop, setShowShop] = useState(false);
const [showBlog, setShowBlog] = useState(false);


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentBanner = bannerContent[currentIndex];

  return (
    <header className="w-full font-sans bg-white text-gray-700">
      {/* Top Info Bar */}
      <div className="bg-gray-100 text-sm py-2 px-4 flex justify-between items-center border-b">
        <div className="flex items-center gap-2">
          <FaPhone className="text-blue-600" />
          <span>1800 266 6123</span>
          <span className="mx-2">|</span>
          <a href="#" className="hover:underline">Customer Support</a>
        </div>
        <div className="flex gap-4 text-sm">
          <a href="#">My Orders</a>
          <a href="#">Track your order</a>
          <a href="#">My Account</a>
        </div>
      </div>

      {/* Logo + Search + Icons */}
      <div className="flex items-center justify-between px-6 py-4 border-b">
      <div className="text-3xl font-bold text-orange-600">
  <span className="text-purple-700">Power</span> Prox <span>⚡</span>
</div>

        <div className="flex-1 mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none"
            />
            <FaSearch className="absolute right-4 top-3 text-gray-500" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaHeart className="text-xl" />
          <div className="relative">
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 text-xs bg-purple-600 text-white px-1 rounded-full">0</span>
          </div>
          <span>₹ 0.00</span>
        </div>
      </div>

{/* Navbar Menu */}
<nav className="flex items-center justify-between px-6 py-3 bg-white shadow-sm relative z-50">
  {/* All Categories with dropdown icon */}
  {/* All Categories with dropdown icon */}

   {/* All Categories with dropdown icon */}
<div className="w-72 relative">
  <div
    className="bg-purple-800 text-white px-4 py-3 rounded-t-md font-semibold flex items-center gap-2 cursor-pointer"
    onClick={() => setShowCategories(!showCategories)}
  >
    <FaListUl />
    All Categories
  </div>

  {/* Sidebar Menu */}
  {showCategories && (
    <div className="bg-white shadow-lg border rounded-b-md absolute z-50 w-full">
      <ul className="text-sm text-gray-800">
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">Shop by Brands</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">New Arrivals</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">SimpliFly</li>

        {/* SmartElex with submenu */}
        <li className="relative border-b">
          <div
            className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => setShowSmartElex(!showSmartElex)}
          >
            SmartElex
            <FaChevronDown className="text-xs" />
          </div>

          {/* Submenu */}
          {showSmartElex && (
            <div className="w-full bg-white border-t shadow-inner">
              <ul className="text-sm text-gray-800">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">HMI Display</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">TFT Display</li>

                {/* Power Modules with nested submenu */}
                <li className="relative">
                  <div
                    className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setShowPowerModules(!showPowerModules)}
                  >
                    Power Modules
                    <FaChevronDown className="text-xs" />
                  </div>

                  {showPowerModules && (
                    <div className="w-full bg-gray-50 border-t">
                      <ul>
                        <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">DC-DC Converter</li>
                        <li className="px-6 py-2 hover:bg-gray-100 cursor-pointer">Battery Charger</li>
                      </ul>
                    </div>
                  )}
                </li>

                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">IOT & Wireless</li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Sensor Modules</li>
              </ul>
            </div>
          )}
        </li>

        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">Electronic Components</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">DIY & Maker Kits</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">Drone Parts</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">Electric Vehicle Parts</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">3D Printers and Parts</li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">Motors, Drivers, Actuators</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Development Board</li>
      </ul>
    </div>
  )}
</div>


  {/* Nav links */}
  <ul className="flex items-center gap-6 text-sm font-semibold">
    <li>
      <a href="#" className="hover:text-purple-700">Home</a>
    </li>
   {/* Shop Dropdown */}
<li className="relative">
  <div
    className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => setShowShop(!showShop)}
  >
    Shop
    <FaChevronDown className="text-xs ml-1" />
  </div>
  {showShop && (
    <div className="absolute mt-1 bg-white shadow-lg border rounded-b-md w-48 z-50">
      <ul className="text-sm text-gray-800">
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
          Arduino
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
          Raspberry Pi
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
          Power Modules
        </li>
      </ul>
    </div>
  )}
</li>
<li><a href="#" className="hover:text-purple-700">Bulk Enquiry</a></li>
<li><a href="#services" className="hover:text-purple-700">Services</a></li>
<li><a href="#" className="hover:text-purple-700">New Arrivals</a></li>
<li><a href="#" className="hover:text-purple-700">ATL Kits Enquiry</a></li>
{/* Blogs Dropdown */}
<li className="relative">
  <div
    className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 cursor-pointer"
    onClick={() => setShowBlog(!showBlog)}
  >
    Blogs
    <FaChevronDown className="text-xs ml-1" />
  </div>
  {showBlog && (
    <div className="absolute mt-1 bg-white shadow-lg border rounded-b-md w-48 z-50">
      <ul className="text-sm text-gray-800">
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
          Tutorials
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
          Project Ideas
        </li>
        <li className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
          News
        </li>
      </ul>
    </div>
  )}
</li>

    <li><a href="#" className="hover:text-purple-700">BOM Tool</a></li>
  </ul>

  {/* Right buttons */}
  <div className="flex gap-2">
    <button className="bg-purple-800 text-white px-4 py-2 rounded">Careers</button>
    <button className="bg-purple-800 text-white px-4 py-2 rounded">Sell on Power Prox</button>
  </div>
</nav>


      {/* Slideshow Banner */}
      <div className="relative bg-gray-100 overflow-hidden">
        <img
          src={bannerImages[currentIndex]}
          alt="Slideshow Banner"
          className="w-full object-cover h-[500px] transition-all duration-1000 ease-in-out"
        />
        <div className="absolute bottom-10 left-10 max-w-md bg-black bg-opacity-60 p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-white">{currentBanner.title}</h2>
          <ul className="mt-4 text-lg text-white list-disc list-inside">
            {currentBanner.description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className="mt-6 bg-purple-800 text-white px-6 py-2 rounded font-semibold shadow hover:bg-purple-700">
            {currentBanner.buttonText}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
