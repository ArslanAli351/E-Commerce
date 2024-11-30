import ReactStars from "react-stars";
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Footer from "../components/Footer";
import Navbare from "../components/Navbare";
import useProduct from "./hooks/useProducts";
import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";

// import Navbare from "./components/Navbare";

export default function All_product() {
  const { products, loading, error } = useProduct("limit=4&&skip=140");

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
        <div className=" flex justify-evenly flex-wrap gap-10 items-center  ">
          
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
        
        <Link
          to={"/Product-API"}
          className=" center font_1 lg:hidden md:hidden	sm:hidden text-xs border-2	mt-8 rounded w-[134px] h-[56px]  bg-primary text-white"
        >
          Move All To Bag
        </Link>
      </div>


   
    </>
  );
}
