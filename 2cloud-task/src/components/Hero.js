"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Subcomponent 1: Floating Products
const Hero1 = () => (
  <section className="flex items-center justify-center bg-[#A8D8EE] min-h-[500px] w-full text-center">
    <div className="text-black">
      <p className="text-3xl lg:text-5xl font-bold">
        I&apos;m looking for branded <span className="text-blue-600">bags ⌄</span>
        <br />
        required within <span className="text-blue-600">2 weeks ⌄</span>
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-6 rounded-lg font-semibold">
        FIND PRODUCTS
      </button>
    </div>
  </section>
);

// Subcomponent 2: Left Text - Right Image
const Hero2 = () => (
  <section className="flex items-center justify-center bg-[#A8D8EE] min-h-[500px] w-full">
    <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
      <div className="text-black max-w-lg text-left">
        <h1 className="text-4xl lg:text-6xl font-bold">Punchy Promotional Products 🥊</h1>
        <p className="mt-4 text-lg">
          Trusted by Aussie and Global brands with their most valuable asset - their brand.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-6 rounded-lg font-semibold">
          VIEW BAG RANGE
        </button>
      </div>
      <img src="/bag-promo.png" alt="Promotional Bags" className="max-w-lg w-full lg:w-1/2" />
    </div>
  </section>
);

// Subcomponent 3: Right Text - Left Image
const Hero3 = () => (
  <section className="flex items-center justify-center bg-[#93D798] min-h-[500px] w-full">
    <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
      <img src="/eco-friendly.png" alt="Eco-Friendly" className="max-w-lg w-full lg:w-1/2" />
      <div className="text-black max-w-lg text-left lg:ml-10">
        <h1 className="text-4xl lg:text-6xl font-bold">It&apos;s Good to be green</h1>
        <p className="mt-4 text-lg">
          We&apos;re a member of <span className="text-blue-600">1% for the Planet</span> for our{" "}
          <span className="text-blue-600">Good Range</span> of products, donating 1% of sales to environmental partners.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6 rounded-lg font-semibold">
          Browse the Good Range
        </button>
      </div>
    </div>
  </section>
);

// Main Hero Component (Swiper with subcomponents)
export default function Hero() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
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
