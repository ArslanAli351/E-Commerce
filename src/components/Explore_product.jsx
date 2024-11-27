import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";
import useProduct from "./hooks/useProducts";
import ReactStars from "react-stars";

export default function Explore_Product() {
  const { products, loading, error } = useProduct("limit=4&&skip=91");

  return (
    <>
      <div className="mt-[80px]   w-[90%] ml-[70px] qs:border qs:ml-4">
        <div>
          <div className="w-[130px] h-10 center gap-4 ">
            <p className="border bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary ">Our Products</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px]">
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
            <div className="flex flex-wrap	gap-10  ">
              <div className="group border-2 flex   gap-4 flex-col relative bg-[#F5F5F5] w-[270px] h-[380px] ">
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

                <p className="flex items-center gap-3">
                  {" "}
                  <ReactStars
                    count={5}
                    value={item.rating}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                  />
                  <span>({item.rating})</span>
                </p>
              </div>
            </div>
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
