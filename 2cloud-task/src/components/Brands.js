"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const brandData = [
    {
        image: "/product.jpg",
        title: "Brand1",
        subtitle: "Product1",
        logo: "/logo1.png",
      },
      {
        image: "/product.jpg",
        title: "Brand2",
        subtitle: "Product2",
        logo: "/logo2.png",
      },
      {
        image: "/product.jpg",
        title: "Brand3",
        subtitle: "Product3",
        logo: "/logo3.png",
      },
      {
        image: "/product.jpg",
        title: "Brand4",
        subtitle: "Product4",
        logo: "/logo4.png",
      },  {
        image: "/product.jpg",
        title: "Brand5",
        subtitle: "Product5",
        logo: "/logo5.png",
      },
      {
        image: "/product.jpg",
        title: "Brand1",
        subtitle: "Product1",
        logo: "/logo1.png",
      },
      {
        image: "/product.jpg",
        title: "Brand2",
        subtitle: "Product2",
        logo: "/logo2.png",
      },
      {
        image: "/product.jpg",
        title: "Brand3",
        subtitle: "Product3",
        logo: "/logo3.png",
      }
];


const Brands=() => {

    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
  
    const handlePrev = useCallback(() => {
      if (sliderRef1.current) sliderRef1.current.swiper.slidePrev();
      if (sliderRef2.current) sliderRef2.current.swiper.slidePrev();
    }, []);
  
    const handleNext = useCallback(() => {
      if (sliderRef1.current) sliderRef1.current.swiper.slideNext();
      if (sliderRef2.current) sliderRef2.current.swiper.slideNext();
    }, []);

  return (
    <div className="w-full mx-auto px-4 py-15 bg-gray-50">
    <div className="flex items-center justify-between w-full mb-4">
      <button onClick={handlePrev} className="text-gray-600 hover:text-gray-800 transition">
        <FaChevronLeft size={20} />
      </button>

      <h2 className="text-gray-600 text-lg font-semibold text-center">
        TRUSTED BY 3000+ BRANDS
      </h2>

      <button onClick={handleNext} className="text-gray-600 hover:text-gray-800 transition">
        <FaChevronRight size={20} />
      </button>
    </div>
    <Swiper
        ref={sliderRef1}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerGroup={4}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-6"
      >
        {brandData.map((brand, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={brand.image}
                alt={brand.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-black">
                <h3 className="font-semibold text-2xl">{brand.title}</h3>
                <p className="text-md">{brand.subtitle}</p>
                <div className="mt-2 flex justify-end">
                  <img src={brand.logo} alt={`${brand.title} logo`} className="h-6" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        ref={sliderRef2}
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerGroup={4}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-6"
      >
        {brandData.map((brand, index) => (
          <SwiperSlide key={index} className="flex flex-col">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <img
                src={brand.image}
                alt={brand.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-black">
                <h3 className="font-semibold text-2xl">{brand.title}</h3>
                <p className="text-md">{brand.subtitle}</p>
                <div className="mt-2 flex justify-end">
                  <img src={brand.logo} alt={`${brand.title} logo`} className="h-6" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Brands;