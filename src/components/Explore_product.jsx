import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";
import useProduct from "./hooks/useProducts";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";

export default function Explore_Product() {
  const { products, loading, error } = useProduct("limit=4&&skip=91");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className="mt-[80px]   w-[90%] ml-[70px] qs:border qs:ml-4">
        <div>
          <div className="w-[130px] h-10 center gap-4 ">
            <p className="border bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary ">Our Products</span>
          </div>
          <h1 className={`w-[211px h-12 font_3 text-[30px] ${darkMode?"text-white":""}`}>
            Explore Our Products
          </h1>
          <div className=" flex justify-end  ml-[950px] absolute	-mt-20 gap-2	qs:hidden	">
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowLeft />
            </span>
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowRight />
            </span>
          </div>
        </div>
        <div className=" flex justify-evenly flex-wrap gap-10 items-center  ">
        {loading ? "loading...." : null}
        {error}
        {products?.map((item) => (
        <>
            <Product_Card
              key={item.id}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
              discount={item.discountPercentage}
              rating={item.rating}
              id={item.id}
            />
        </>
      ))}
                </div>
        <div className="center font_1">
          <Link
            to={"/Product-API"}
            className=" center font_1 text-xs	mt-8 rounded bg-primary text-white w-[234px] h-[56px]"
          >
            {" "}
            view all products
          </Link>
          
        </div>
      </div>
      
    </>
  );
}
