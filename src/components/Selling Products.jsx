import { Link } from "react-router-dom";
import Footer from "./Footer";
import useProduct from "./hooks/useProducts";
import ReactStars from "react-stars";
import Product_Card from "./Product_Card";
import { useSelector } from "react-redux";

export default function SellingProduct() {
  const { products, loading, error } = useProduct("limit=4&&skip=120");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
     

      <div className="mt-[140px]   w-[90%] ml-[70px] qs:ml-4 ">
        <div>
          <div className="w-[100px] h-10 center gap-4  ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary ">Just For You</span>
          </div>
          <h1 className={`w-[211px h-12 font_3 text-[30px] font_3 ${darkMode?"text-white":""}`}>
            Best Selling Products
          </h1>
          <div className={`center font_1 ml-[860px] rounded w-[104px]  -mt-16 absolute hover:bg-primary h-[56px]  hover:text-white ${darkMode?"text-white":""}`}>
            <Link
              to={"/Product-API"}
              className=" center font_1 text-xs rounded w-[104px] h-[56px] border-2 qs:hidden"
            >
              See All
            </Link>
          </div>
        </div>
        <div className=" flex justify-evenly flex-wrap gap-10 items-center qs:mt-16  border-2 border-green-900 mt-20">
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
        </div>{" "}
        <div className="center font_1 ">
          <Link
            to={"/Product-API"}
            className=" center font_1 lg:hidden md:hidden	sm:hidden text-xs border-2	mt-8 rounded w-[134px] h-[56px]  bg-primary text-white"
          >
            See All
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
