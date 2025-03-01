export default function Categories() {
    return (
      <div className="bg-white px-4 sm:px-10 lg:px-20 pb-20">
        {/* Header Text */}
        <div className="text-xl sm:text-2xl md:text-4xl font-semibold text-center pt-6 sm:pt-10 text-black">
          Promotional Product Categories
        </div>
  
        {/* Categories Grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-3">
          
          {/* Featured Category */}
          <div className="relative w-full h-auto rounded-xl overflow-hidden bg-blue-300">
            <img
                src="/categories.png"
                alt="The good range"
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-header-blue text-white p-2 text-sm font-bold">
                The good range
            </div>
        </div>
  
          {/* Category Items */}
          {[
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
            <div key={index} className="relative w-full h-auto rounded-xl overflow-hidden bg-gray-100">
            <img
                src="/categories.png"
                alt={category}
                className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gray-100 text-black p-2 text-sm font-bold">
                {category}
            </div>
        </div>
          ))}
  
          {/* Custom Merch */}
          <div className="relative col-span-2 w-full h-auto rounded-xl overflow-hidden bg-blue-300 max-h-[150px]">
          <img
            src="/categories.png"
            alt="Custom Merch"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full bg-blue-300 text-white p-2 text-sm font-bold">
            Custom Merch
          </div>
        </div>
        </div>
      </div>
    );
  }
  