'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../Slider/constants/constant";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[400px] lg:h-[600px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
          <div className="flex flex-col gap-6 mb-20 group relative shadow-lg rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
            <Image
              className="absolute inset-0 bg-cover bg-center"
              src={item.backgroundImage} alt={item.title}
            />
            <a href={`/equipamiento/${item.page}`} target="_blank" className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30" />
            <div className="relative flex flex-col gap-3">
              <h4 className="text-sm lg:text-2xl w-3/4 mr-0 absolute text-right -bottom-48 text-white font-semibold lg:-bottom-[345px] right-0">{item.title} </h4>
            </div>
            <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-[#002d4e] group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
