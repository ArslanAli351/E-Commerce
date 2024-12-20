import Navbare from "../components/Navbare";
import useProduct from "./hooks/useProducts";
import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function All_product() {
  const { products, loading, error } = useProduct("limit=4&&skip=140");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <Navbare />

      <div className="mt-[140px]   w-[90%] ml-[70px] qs:border-2 qs:ml-4">

        <div>
          <div className="w-[100px] h-10 ">
            <span className={`text-sm font_1 ${darkMode ? "text-white" : ""}`}>
              Wishlist (4)
            </span>
          </div>
          <h1
            className={`w-[211px h-12 font_3 text-[30px] font_3 ${
              darkMode ? "text-white" : ""
            }`}
          >
            Best Selling Products
          </h1>
          <div className="center font_1 ml-[860px]  rounded w-[134px] absolute hover:bg-primary  hover:text-white  h-[56px]">
            <Link
              to={"/Product-API"}
              className={` center font_1 text-xs border-2	 rounded w-[134px] h-[56px] qs:hidden  ${
                darkMode ? "text-white" : ""
              }`}
            >
              Move All To Bag
            </Link>
          </div>
        </div>
        <div className=" flex justify-evenly flex-wrap gap-10 items-center  ">
        {loading ? "loading...." : null}
        {error}
          {products?.map((item) => (
            <div key={item.id}>
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
          ))}
        </div>

        <Link
          to={"/Product-API"}
          className={` center font_1 lg:hidden ml-[100px] md:hidden	sm:hidden text-xs border-2	mt-8 rounded w-[134px] h-[56px]  bg-primary text-white ${
            darkMode ? "text-white" : ""
          }`}
        >
          Move All To Bag
        </Link>
      </div>
    </>
  );
}
