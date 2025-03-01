import { FaSearch, FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Green Announcement Bar */}
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

        <a href="#" className="flex items-center gap-2">
            <span className="font-semibold text-3xl">G</span>
            <span className="hover:underline">★★★★★ 290+ Reviews</span>
        </a>
        </div>


      {/* Navigation Bar */}
      <div className="flex items-center justify-between px-20 py-4 bg-white relative">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-blue-600">good things</h1>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-10 text-blue-600 font-semibold">
            <a href="#" className="flex hover:underline items-center gap-1">Products <span><FaChevronDown className="text-sm"/></span></a>
            <a href="#" className="hover:underline">Portfolio</a>
            <a href="#" className="hover:underline">About</a>
        </nav>

        {/* Search Bar */}
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
