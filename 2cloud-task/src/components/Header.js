import { FaSearch, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-header-green text-white text-sm flex justify-between items-center px-20 py-2">
        <a href="#" className="flex font-semibold items-center hover:underline gap-2">
            <img src="/aus.svg" alt="Australian Flag" className="w-5 h-4.5" />
            Australian-Owned
        </a>

        <div className="flex-1 flex justify-center">
            <a href="#" className="font-semibold text-center hover:underline">
            Australia's greenest merch company 🌳🌳🌳 See our credentials here
            </a>
        </div>

        <a href="#" className="flex items-center">
        <img src="google-g.svg" className="max-h-5 pr-1" />
        <img src="star-white.svg" className="max-h-5" />
        <img src="star-white.svg" className="max-h-5" />
        <img src="star-white.svg" className="max-h-5" />
        <img src="star-white.svg" className="max-h-5" />
        <img src="star-white.svg" className="max-h-5 pr-2" />
            <span className="hover:underline">290+ Reviews</span>
        </a>
        </div>

      <div className="flex items-center justify-between px-20 py-4 bg-white relative">
        <img src="logo.svg" className="max-h-8" />

        <nav className="flex items-center space-x-10 text-blue-600 font-semibold">
            <a href="#" className="flex hover:underline items-center gap-1">Products <span><FaChevronDown className="text-sm"/></span></a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">About</a>
        </nav>

        <div className="relative flex items-center w-full max-w-lg">
          <input
            type="text"
            placeholder="Search 5350+ curated products"
            className="w-full px-6 py-3 text-blue-500 border border-blue-300 rounded-full shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center">
            <FaSearch size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
