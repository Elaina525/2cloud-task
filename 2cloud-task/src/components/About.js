export default function About() {
    return (
      <div className="bg-gray-100 px-4 sm:px-10 lg:px-20 py-15">
        <div className="grid grid-cols-4 gap-8 text-left text-black">
          
          <div className="bg-about-green flex flex-col p-10 text-lg font-bold rounded-lg col-span-2 row-span-2">
            <h3 className="text-3xl pt-10 pb-8">Why choose Good Things?</h3>
            <p className="pb-6">
              Good Things is reinventing the way brandable promotional products are sourced and ordered.
            </p>
            <p className="pb-8 font-semibold max-w-100">
              We make our clients feel good, while making their brand look awesome.
            </p>
            <button className="bg-black text-white px-6 py-3 mt-auto rounded-4xl font-semibold max-w-35">
              About Us
            </button>
          </div>
  
          <div className="bg-about-purple flex flex-col p-8 text-lg font-bold rounded-lg text-left">
            <div className="flex pb-8 gap-1 w-12 h-12">
              <img src="star-yellow.svg" />
              <img src="star-yellow.svg" />
              <img src="star-yellow.svg" />
              <img src="star-yellow.svg" />
              <img src="star-yellow.svg" />
            </div>
            <p className="text-xl pb-10">
              "Good Things delivered on point to meet our fast deadline."
            </p>
            <div className="flex">
              <img src="avatar.png" className="w-12 h-12" />
              <div className="flex flex-col pl-3">
                <p>Marketing Manager</p>
                <p>Vegemite</p>
              </div>
            </div>
          </div>
  
          <div className="bg-about-blue flex flex-col justify-between h-full p-8 text-lg font-bold rounded-lg text-left">
            <p className="text-gray-500">TRUSTED BY</p>
            <div>
              <p className="text-header-blue text-6xl">9,100+</p>
              <p className="text-semi-bold">Happy customers</p>
            </div>
          </div>
  
          <div className="bg-about-pink flex items-center justify-center p-1 text-lg font-bold rounded-lg col-span-2">
            <img src="about-pink.jpg" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    );
  }
  