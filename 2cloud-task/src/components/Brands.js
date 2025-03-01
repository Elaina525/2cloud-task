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
  },
  {
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
  },
];

const Brands = () => {
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
    <div className="w-full mx-auto py-15 bg-gray-50">
      <div className="flex items-center justify-between w-full mb-4 px-4">
        <button
          onClick={handlePrev}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          <FaChevronLeft size={20} />
        </button>

        <h2 className="text-gray-600 text-lg font-semibold text-center">
          TRUSTED BY 3000+ BRANDS
        </h2>

        <button
          onClick={handleNext}
          className="text-gray-600 hover:text-gray-800 transition"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="pb-5">
        <Swiper
          ref={sliderRef1}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerGroup={2}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {brandData.map((brand, index) => (
            <SwiperSlide key={index} className="flex flex-col">
              <div className="rounded-xl overflow-hidden bg-white max-w-sm sm:max-w-xs md:max-w-md mx-auto">
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="p-2 sm:p-3 md:p-4 text-black flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-xl sm:text-lg md:text-2xl">
                      {brand.title}
                    </h3>
                    <p className="text-sm sm:text-md">{brand.subtitle}</p>
                  </div>
                  <img
                    src={brand.logo}
                    alt={`${brand.title} logo`}
                    className="h-12 sm:h-10 md:h-16"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <Swiper
          ref={sliderRef2}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerGroup={2}
          initialSlide={2}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {brandData.map((brand, index) => (
            <SwiperSlide key={index} className="flex flex-col">
              <div className="rounded-xl overflow-hidden bg-white max-w-sm sm:max-w-xs md:max-w-md mx-auto">
                <img
                  src={brand.image}
                  alt={brand.title}
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="p-2 sm:p-3 md:p-4 text-black flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-xl sm:text-lg md:text-2xl">
                      {brand.title}
                    </h3>
                    <p className="text-sm sm:text-md">{brand.subtitle}</p>
                  </div>
                  <img
                    src={brand.logo}
                    alt={`${brand.title} logo`}
                    className="h-12 sm:h-10 md:h-16"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
