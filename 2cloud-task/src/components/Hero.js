"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero1 = () => (
    <section className="flex min-h-[500px] w-full">
      {/* Left Background Image */}
      <div
        className="w-1/4 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.jpg')", backgroundPosition: 'right' }}
      />
  
      {/* Center Solid Color */}
      <div className="w-1/2 bg-hero-blue flex items-center justify-center text-center py-4">
            <div className="text-black">
            <p className="text-3xl lg:text-4xl font-bold">
                I'm looking for branded 
                <br/>
                <span className="text-header-blue">bags</span>
                <br />
                required within
                <br/>
                <span className="text-header-blue">2 weeks</span>
            </p>
            <button className="bg-header-blue text-white px-6 py-3 mt-6 rounded-lg font-semibold">
                FIND PRODUCTS
            </button>
            </div>
      </div>
  
      {/* Right Background Image */}
      <div
        className="w-1/4 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero1.jpg')", backgroundPosition: 'left' }}
      />
    </section>
  );
    
const Hero2 = () => (
    <section
    className="flex items-center justify-left bg-cover bg-center min-h-[500px] w-full text-center"
    style={{ backgroundImage: "url('/hero2.jpg')" }}
  >
    <div className="container mx-auto px-6 lg:px-4 flex flex-col lg:flex-row items-center">
        <div className="text-white max-w-sm text-left">
            <h1 className="text-4xl lg:text-6xl font-bold">Punchy Promotional Products 🥊</h1>
            <p className="mt-4 text-lg">
            Trusted by Aussie and Global brands with their most valuable asset - their brand.
            </p>
            <button className="bg-header-blue hover:bg-blue-700 text-white px-6 py-3 mt-6 rounded-lg font-semibold">
            VIEW BAG RANGE
            </button>
        </div>
    </div>
  </section>
);

const Hero3 = () => (
    <section
    className="flex items-center justify-center bg-cover bg-center min-h-[500px] w-full text-center"
    style={{ backgroundImage: "url('/hero3.jpg')" }}
  >
    <div className="container mx-auto px-6 lg:px-60 flex flex-col lg:flex-row items-center">
      <div className="text-black max-w-sm text-left lg:ml-10">
        <h1 className="text-4xl lg:text-6xl font-bold">It&apos;s <span className="text-header-green">Good </span>
            <br/>
            to be green</h1>
        <p className="mt-4 text-lg">
          We&apos;re a member of <span className="text-header-blue">1% for the Planet</span> for our{" "}
          <span className="text-header-blue">Good Range</span> of products, donating 1% of sales to environmental partners.
        </p>
        <button className="bg-header-green hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-lg font-semibold">
          Browse the Good Range
        </button>
      </div>
    </div>
  </section>
);

export default function Hero() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full"
    >
      <SwiperSlide>
        <Hero1 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
      <SwiperSlide>
        <Hero3 />
      </SwiperSlide>
    </Swiper>
  );
}
