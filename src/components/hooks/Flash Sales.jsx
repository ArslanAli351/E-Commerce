
import { useSelector } from "react-redux";
import Product_Card from "../Product_Card.jsx";
import useProduct from "./useProducts.js";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export default function Flash_Sales() {
    const { products, loading, error } = useProduct("limit=4&&skip=39");
    const darkMode = useSelector((state) => state.darkMode.darkMode);

    return (
      <>
           <div className="mt-[80px]   w-[90%] ml-[70px]  qs:ml-[19px]">
        <div className="qs:center ">
          <div className="w-[100px] h-10 center gap-4  ">
            <p className="border bg-primary w-5 h-10 flex"></p>
            <span className="text-sm text-primary">Today’s</span>
          </div>
          <h1 className={`w-[211px h-12 font_3 text-[30px] ${darkMode?"text-white":""}`}>Flash Sales</h1>
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
            <div className=" gap-9 flex flex-wrap justify-evenly items-center mt-8  w-[90%] ml-[70px]  qs:ml-[19px] ">
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
      </>
    );
  }
  