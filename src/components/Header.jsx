import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div
      id="Header" // One instance of the id is enough
      className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
      
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-blue">
        <h2 className="text-5xl sm:text-6xl md:text-[60px] font-bold text-gray inline-block">
        Your One-Stop Shop for DIY Electronics & Engineering Projects
        </h2>
      </div>
    </div>
  );
};

export default Header;

