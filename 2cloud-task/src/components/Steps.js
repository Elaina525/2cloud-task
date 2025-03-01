export default function Steps() {
    const steps = [
      {
        number: "1",
        title: "Explore the range",
        description: "Browse our selection of off-the-shelf products or start from scratch",
        image: "/Explore-the-range.svg",
      },
      {
        number: "2",
        title: "Design your merch",
        description: "Tell your brand story through custom designs",
        image: "/Design-your-merch.svg",
      },
      {
        number: "3",
        title: "Let us deliver delight",
        description: "We'll handle the rest, from production to delivery.",
        image: "/Let-us-deliver-delight.svg",
      },
    ];
  
    return (
      <div className="bg-white px-6 sm:px-16 lg:px-20 py-12">
        {/* Header */}
        <h2 className="text-3xl sm:text-5xl font-bold text-black text-left">
          Let us deliver & delight
        </h2>
        <p className="text-gray-600 text-lg mt-4 text-left">
          From concept to creation, we're here to make the act of ordering Good Things easier and more rewarding.
        </p>
  
        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-start mx-auto"
            >
              {/* Image */}
              <img src={step.image} alt={step.title} className="w-full max-w-[200px] rounded-lg" />
  
              {/* Numbered Title */}
              <div className="flex items-center gap-2 mt-6">
                <span className="bg-blue-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-lg font-bold">
                  {step.number}
                </span>
                <h3 className="text-blue-600 font-bold text-lg">{step.title}</h3>
              </div>
  
              {/* Description */}
              <p className="text-gray-600 mt-2 max-w-[280px]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  