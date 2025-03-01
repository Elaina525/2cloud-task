"use client";

import { useState } from "react";
import { FaSearch, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const [menuTimeout, setMenuTimeout] = useState(null);

  const productCategories = {
    "The good range": ["Custom Bags", "Custom Drinkware", "Custom Tech"],
    Bags: ["Backpacks", "Tote Bags", "Drawstring Bags"],
    "Caps & Hats": ["Snapbacks", "Dad Hats", "Beanies"],
  };

  const handleMouseEnter = () => {
    if (menuTimeout) clearTimeout(menuTimeout);
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsOpen(false);
    }, 300);
    setMenuTimeout(timeout);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-header-green text-white text-sm flex justify-between items-center px-6 lg:px-20 py-2">
        <a
          href="#"
          className="flex font-semibold items-center hover:underline gap-2"
        >
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

      <div className="flex items-center justify-between px-6 lg:px-20 py-4 bg-white relative">
        <img src="logo.svg" className="max-h-8" />

        <nav className="hidden lg:flex items-center space-x-10 text-blue-600 font-semibold">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 hover:underline">
              Products <FaChevronDown className="text-sm" />
            </button>

            <div
              className={`fixed left-1/2 top-29 h-full transform -translate-x-1/2 bg-gray-100 shadow-lg w-[80vw] max-w-6xl flex justify-center z-50 transition-all duration-300 ease-in-out
                            ${isProductsOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"}
                        `}
            >
              <div className="w-full max-w-6xl flex">
                <div className="w-1/3 pl-6 bg-white">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">
                    Product Categories
                  </h3>
                  {Object.keys(productCategories).map((category) => (
                    <a
                      key={category}
                      href="#"
                      className={`block py-2 px-3 rounded transition-colors ${
                        activeCategory === category
                          ? "bg-gray-100 text-blue-600"
                          : "hover:bg-gray-50 text-gray-700"
                      }`}
                      onMouseEnter={() => setActiveCategory(category)}
                    >
                      {category}
                    </a>
                  ))}
                </div>

                <div className="w-1/3 px-6 bg-gray-100">
                  {activeCategory && (
                    <>
                      <h4 className="font-semibold mb-3 text-gray-900">
                        {activeCategory}
                      </h4>
                      {productCategories[activeCategory]?.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block py-2 hover:underline text-gray-700"
                        >
                          {item}
                        </a>
                      ))}
                    </>
                  )}
                </div>

                <div className="w-1/3 pl-6 bg-gray-100 p-4 rounded-lg">
                  <div className="bg-blue-400 text-black p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-3">
                      Made to order merch
                    </h3>
                    <p className="text-sm mb-4">
                      Completely custom made to your exact size, colour and
                      specifications. Choose Made to Order when volumes are
                      higher and delivery date is &gt; 8 weeks for maximum
                      impact.
                    </p>
                    <a
                      href="#"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      BROWSE PORTFOLIO →
                    </a>
                  </div>
                  <div className="mt-6 pt-4">
                    <h4 className="text-sm font-semibold mb-3 text-gray-700">
                      TRUSTED BY
                    </h4>
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <img
                          src="/netflix.png"
                          className="h-6 w-auto opacity-90"
                          alt="Netflix"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="hover:underline">
            Portfolio
          </a>
          <a href="#" className="hover:underline">
            About
          </a>
        </nav>

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

        <div className="flex lg:hidden space-x-4">
          <button className="text-blue-600">
            <FaSearch size={22} />
          </button>
          <button
            className="text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={26} />
          </button>
        </div>
      </div>
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
          <div className="bg-blue-400 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-bold">Made to order merch</h3>
            <p className="text-sm mt-2">
              Completely custom made to your exact size, colour, and
              specifications. Choose Made to Order when volumes are higher and
              delivery date is &gt; 8 weeks for maximum impact.
            </p>
            <a href="#" className="block mt-4 font-bold hover:underline">
              BROWSE PORTFOLIO →
            </a>
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
            <a href="#" className="block font-bold hover:underline">
              About
            </a>
            <a href="#" className="block font-bold hover:underline">
              Portfolio
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
