import img from "../assets/game.png";

function Product() {
  return (
    <>
      {" "}
      <div className="center flex-wrap	gap-10 ">
        <div className=" group  rounded-lg  border-2 flex  gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[345px]   qs:h-[210px] ">
          <div className="qs:hidden discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            -40%
          </div>

          <div className="mt-9 ">
            <img
              src={img}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300  qs:h-[110px]"
            />
          </div>

          <h3 className="font-medium group-hover:text-primary qs:hidden transition-all duration-300">
            HAVIT HV-G92 Gamepad
          </h3>

          <p className="qs:hidden">
            <span className="text-primary ">$120</span> <span>$160</span>
          </p>

          <p className="qs:hidden">stars</p>
        </div>
      </div>
    </>
  );
}

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="container bg-white mt-[80px]   w-[90%] ml-[70px]">
      {/* <div className="w-[100px] h-10 center gap-4 ">
            <p className="border bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary">Today’s</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px]">Flash Sales</h1>
          <div className=" flex justify-end  ml-[950px] absolute	-mt-20 gap-2		">
            <span className="rounded-full bg-[#F5F5F5] ">
            </span>
            <span className="rounded-full bg-[#F5F5F5] ">
            </span>
          </div> */}
        
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          // Paginatio
          autoplay={{ delay: 3000 }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          
          <SwiperSlide>{Product()}</SwiperSlide>
          <SwiperSlide>{Product()}</SwiperSlide>
          <SwiperSlide>{Product()}</SwiperSlide>
          <SwiperSlide>{Product()}</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
