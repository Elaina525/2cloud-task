export default function Goals() {
    const items = Array.from({ length: 7 }, (_, index) => ({
        id: index,
        image: "goals.svg",
        text: "Sustainable focus",
    }));

    return (
        <div className="bg-about-blue px-4 sm:px-10 lg:px-20 py-10 text-black">
            {/* Large screens: 1 row, Small screens: 2 columns */}
            <div className="grid grid-cols-2 md:flex md:justify-between gap-3 md:gap-6">
                {items.map((item, index) => (
                    <div key={index} className="flex md:flex-col items-center md:text-center gap-4">
                        {/* Image (size reduces on small screens) */}
                        <img 
                            src={item.image} 
                            alt="icon" 
                            className="w-12 h-12 md:w-16 md:h-16"
                        />
                        {/* Text (size reduces on small screens) */}
                        <p className="md:text-lg text-base font-medium">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
