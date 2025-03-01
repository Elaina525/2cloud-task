'use client';

import { useState } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Green Announcement Bar */}
      <div className="bg-header-green text-white text-sm flex justify-between items-center px-6 lg:px-20 py-2">
        <a href="#" className="flex font-semibold items-center hover:underline gap-2">
          <img src="/aus.svg" alt="Australian Flag" className="w-5 h-4" />
          Australian-Owned
        </a>

        <div className="hidden lg:flex flex-1 justify-center">
          <a href="#" className="font-semibold text-center hover:underline">
            Australia's greenest merch company 🌳🌳🌳 See our credentials here
          </a>
        </div>

        <a href="#" className="hidden lg:flex items-center">
          <img src="google-g.svg" className="max-h-5 pr-1" />
          {[...Array(5)].map((_, i) => (
            <img key={i} src="star-white.svg" className="max-h-5" />
          ))}
          <span className="pl-2 hover:underline">290+ Reviews</span>
        </a>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-6 lg:px-20 py-4 bg-white relative">
        {/* Logo */}
        <img src="logo.svg" className="max-h-8" />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10 text-blue-600 font-semibold">
          <a href="#" className="flex hover:underline items-center gap-1">
            Products <FaChevronDown className="text-sm" />
          </a>
          <a href="#" className="hover:underline">Portfolio</a>
          <a href="#" className="hover:underline">About</a>
        </nav>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex relative items-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Search 5350+ curated products"
            className="w-full px-6 py-3 text-blue-500 border border-blue-300 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
            <FaSearch size={18} />
          </button>
        </div>

        {/* Mobile & md Icons */}
        <div className="flex lg:hidden space-x-4">
          <button className="text-blue-600">
            <FaSearch size={22} />
          </button>
          <button className="text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBars size={26} />
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-header-blue text-white px-6 py-6 z-50 overflow-y-auto transition-transform transform animate-fade-in">
          {/* Top Row: Logo & Close Button */}
          <div className="flex justify-between items-center mb-6">
            <img src="logo.svg" className="max-h-8" />
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes size={26} />
            </button>
          </div>

          {/* Made to Order Merch Section */}
          <div className="bg-blue-400 p-6 rounded-lg mb-6 text-black">
            <h3 className="text-lg font-bold">Made to order merch</h3>
            <p className="text-sm mt-2">
              Completely custom made to your exact size, colour, and specifications. Choose Made to Order when volumes are higher and delivery date is &gt; 8 weeks for maximum impact.
            </p>
            <a href="#" className="block mt-4 font-bold hover:underline">BROWSE PORTFOLIO →</a>
          </div>

          {/* Product Categories */}
          <h3 className="text-lg font-bold mb-4">All Off The Shelf Products</h3>
          <div className="grid grid-cols-2 gap-y-3">
            {[
              "The good range",
              "Bags",
              "Caps & Hats",
              "Clothing & Apparel",
              "Confectionery",
              "Conferences & Events",
              "Drink Bottles",
              "Eco Friendly",
              "Giveaways",
              "Keyrings",
              "Mugs",
              "Outdoor",
              "Packaging",
              "Pens & Stationery",
              "Technology",
              "Umbrellas",
            ].map((category, index) => (
              <a key={index} href="#" className="hover:underline">
                {category}
              </a>
            ))}
          </div>

          {/* Bottom Links */}
          <div className="mt-6 border-t border-white pt-4">
            <a href="#" className="block font-bold hover:underline">About</a>
            <a href="#" className="block font-bold hover:underline">Portfolio</a>
          </div>
        </div>
      )}
    </header>
  );
}
