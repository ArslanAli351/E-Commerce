import img from "../assets/game.png";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
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
import ReactStars from "react-stars";
import useProduct from "./hooks/useProducts";

export default function Slider() {
  const { products, loading, error } = useProduct("limit=10&&skip=87");

  const result = products?.filter((item) => item.rating >= 4);

  return (
    <>
      <div className="container bg-white mt-[80px]   w-[90%] ml-[70px]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          // Paginatio
          autoplay={{ delay: 100 }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {loading ? "loading...." : null}
          {error}
          {result?.map((item) => (
            <SwiperSlide>
              <div className="flex justify-center	gap-10  ">
                <div className="group border-2 flex   gap-4 flex-col relative bg-[#F5F5F5] w-[270px] h-[350px] ">
                  <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
                    {item.discountPercentage}%
                  </div>

                  <div className="mt-9">
                    <img
                      src={item.thumbnail}
                      alt="product img"
                      className="m-auto group-hover:scale-110 transition-all duration-300 w-48 h-[190px]"
                    />
                  </div>

                  <h3 className="font-medium group-hover:text-primary transition-all duration-300">
                    {item.title}{" "}
                  </h3>

                  <p>
                    <span className="text-primary">${item.price}</span>{" "}
                  </p>

                  <p>
                    {" "}
                    <ReactStars
                      count={5}
                      value={item.rating}
                      size={24}
                      color2={"#ffd700"}
                      edit={false}
                      className="-mt-4"
                    />
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-[80px] border-2 border-b-0  w-[90%] ml-[70px]  qs:ml-[19px]">
        <div className="qs:center ">
          <div className="w-[100px] h-10 center gap-4  ">
            <p className="border bg-primary w-5 h-10 flex"></p>
            <span className="text-sm text-primary">Today’s</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px]">Flash Sales</h1>
          <div className=" flex justify-end  ml-[950px] absolute	-mt-20 gap-2		qs:hidden">
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowLeft />
            </span>
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// import img from "../assets/game.png";
// import { FaArrowLeft } from "react-icons/fa6";
// import { FaArrowRight } from "react-icons/fa6";
// function Product() {
//   return (
//     <>
//       {" "}
//       <div className="center flex-wrap	gap-10 ">
//         <div className=" group  rounded-lg  border-2 flex  gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[345px]   qs:h-[210px] ">
//           <div className="qs:hidden discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
//             -40%
//           </div>

//           <div className="mt-9 ">
//             <img
//               src={img}
//               alt="product img"
//               className="m-auto group-hover:scale-110 transition-all duration-300  qs:h-[110px]"
//             />
//           </div>

//           <h3 className="font-medium group-hover:text-primary qs:hidden transition-all duration-300">
//             HAVIT HV-G92 Gamepad
//           </h3>

//           <p className="qs:hidden">
//             <span className="text-primary ">$120</span> <span>$160</span>
//           </p>

//           <p className="qs:hidden">stars</p>
//         </div>
//       </div>
//     </>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import {
//   EffectCoverflow,
//   Pagination,
//   Navigation,
//   Autoplay,
// } from "swiper/modules";

// export default function Slider() {
//   return (
//     <>
//       <div className="container bg-white mt-[80px]   w-[90%] ml-[70px]">
//       {/* <div className="w-[100px] h-10 center gap-4 ">
//             <p className="border bg-primary w-5 h-10 "></p>
//             <span className="text-sm text-primary">Today’s</span>
//           </div>
//           <h1 className="w-[211px h-12 font_3 text-[30px]">Flash Sales</h1>
//           <div className=" flex justify-end  ml-[950px] absolute	-mt-20 gap-2		">
//             <span className="rounded-full bg-[#F5F5F5] ">
//             </span>
//             <span className="rounded-full bg-[#F5F5F5] ">
//             </span>
//           </div> */}

//         <Swiper
//           effect={"coverflow"}
//           grabCursor={true}
//           centeredSlides={true}
//           loop={true}
//           slidesPerView={"auto"}
//           coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
//           // Paginatio
//           autoplay={{ delay: 3000 }}
//           modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
//         >

//           <SwiperSlide>{Product()}</SwiperSlide>
//           <SwiperSlide>{Product()}</SwiperSlide>
//           <SwiperSlide>{Product()}</SwiperSlide>
//           <SwiperSlide>{Product()}</SwiperSlide>
//         </Swiper>
//       </div>

//       <div className="mt-[80px] border-2 border-b-0  w-[90%] ml-[70px]  qs:ml-[19px]">
//         <div className="qs:center ">
//           <div className="w-[100px] h-10 center gap-4  ">
//             <p className="border bg-primary w-5 h-10 flex"></p>
//             <span className="text-sm text-primary">Today’s</span>
//           </div>
//           <h1 className="w-[211px h-12 font_3 text-[30px]">Flash Sales</h1>
//           <div className=" flex justify-end  ml-[950px] absolute	-mt-20 gap-2		qs:hidden">
//             <span className="rounded-full bg-[#F5F5F5] ">
//               <FaArrowLeft />
//             </span>
//             <span className="rounded-full bg-[#F5F5F5] ">
//               <FaArrowRight />
//             </span>
//           </div>
//         </div></div>
//     </>
//   );
// }
