import React from 'react';
import { FaShoppingBag, FaUser, FaHeart, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl">FASHION</div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-black">New</a>
            <a href="#" className="text-gray-700 hover:text-black">Women</a>
            <a href="#" className="text-gray-700 hover:text-black">Men</a>
            <a href="#" className="text-gray-700 hover:text-black">Beauty</a>
            <a href="#" className="text-gray-700 hover:text-black">Sale</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaSearch className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaUser className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <FaHeart className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <FaShoppingBag className="w-5 h-5" />
              <span className="absolute top-0 right-0 bg-black text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;