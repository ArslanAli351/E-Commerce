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
import useProduct from "./hooks/useProducts";
import Product_Card from "./Product_Card";
import SetSlider from "./SetSlider";

export default function Slider() {
  const { products, loading, error } = useProduct("limit=10&&skip=94");

  const result = products?.filter((item) => item.rating >= 4);

  return (
    <>
      <div className="container bg-white mt-[80px] h-80  w-[90%] ml-[70px] ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          Paginatio
          autoplay={{ delay: 300 }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          {loading ? "loading...." : null}
          {error}
          {result?.map((item) => (
            <SwiperSlide>
              <div className="group border-2 flex   gap-4 relative bg-[#F5F5F5] w-[270px] h-[350px] ml-16 qs:m-0">
                <Product_Card
                  key={item.id}
                  image={item.thumbnail}
                  name={item.title}
                  price={item.price}
                  discount={item.discountPercentage}
                  rating={item.rating}
                  id={item.id}
                />
              </div>
            </SwiperSlide>
          ))}
         
          <SwiperSlide>
            <div className="flex justify-center	gap-10  ">
              <SetSlider />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
