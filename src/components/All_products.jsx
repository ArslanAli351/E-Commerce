import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Footer from "../components/Footer";
import Navbare from "../components/Navbare";
import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";

// import Navbare from "./components/Navbare";

export default function All_product() {
  return (
    <>
      <Navbare />

      <div className="mt-[140px]   w-[90%] ml-[70px] qs:border-2 qs:ml-4">
        <div>
          <div className="w-[100px] h-10 ">
            <span className="text-sm font_1">Wishlist (4)</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px] font_3">
            Best Selling Products
          </h1>
          <div className="center font_1 ml-[860px]  -mt-[150px] rounded absolute hover:bg-primary  hover:text-white  h-[56px]">
            <Link
              to={"/Product-API"}
              className=" center font_1 text-xs border-2	 rounded w-[134px] h-[56px] qs:hidden "
            >
              Move All To Bag
            </Link>
          </div>
        </div>
        <Product_Card />

        <Link
          to={"/Product-API"}
          className=" center font_1 lg:hidden md:hidden	sm:hidden text-xs border-2	mt-8 rounded w-[134px] h-[56px]  bg-primary text-white"
        >
          Move All To Bag
        </Link>
      </div>

      <div className="mt-[140px]   w-[90%] ml-[70px] qs:ml-4">
        <div>
          <div className="w-[100px] h-10 center gap-4  ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary ">Just For You</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px] font_3">
            Best Selling Products
          </h1>
          <div className="center font_1 ml-[860px] rounded  -mt-28 absolute hover:bg-primary h-[56px]  hover:text-white">
            <Link
              to={"/Product-API"}
              className=" center font_1 text-xs rounded w-[104px] h-[56px] border-2 qs:hidden"
            >
              See All
            </Link>
          </div>
        </div>
        <Product_Card />
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
