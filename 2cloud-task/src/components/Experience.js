export default function Experience() {
    const stats = [
      {
        icon: "goals.svg",
        number: "33,596",
        text: "On-time deliveries since inception",
      },
      {
        icon: "goals.svg",
        number: "800+",
        text: "5-star reviews across Google, TrustPilot & Facebook",
      },
      {
        icon: "goals.svg",
        number: "97%",
        text: "Repeat customers after more than one order",
      },
    ];
  
    return (
      <div className="bg-gray-100 px-10 md:px-40 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <div className="w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <span className="text-yellow-400 text-xl">★★★★★</span>
              <span className="text-gray-600">
                reviews on <span className="text-green-500 font-bold">Trustpilot</span>
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight lg:max-w-120">
              Australia's most trusted merch company
            </h2>
            <p className="text-gray-500 mt-4 text-lg">
              Over 12+ years of proven excellence
            </p>
          </div>
  
          <div className="w-full flex flex-col gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="grid grid-cols-[80px_1fr] gap-4 items-center">
                <div className="bg-blue-600 flex items-center justify-center w-20 h-20 rounded-lg">
                  <img src={stat.icon} alt="Icon" className="w-12 h-12" />
                </div>
  
                <div className="bg-white p-6 rounded-xl shadow-md flex items-center w-full">
                  <h3 className="text-3xl font-bold text-blue-600 mr-4">{stat.number}</h3>
                  <p className="text-gray-600">{stat.text}</p>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </div>
    );
  }
  