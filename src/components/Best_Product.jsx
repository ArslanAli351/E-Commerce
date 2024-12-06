import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Benar from "../assets/baner.png";
import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";
import useProduct from "./hooks/useProducts";
import ReactStars from "react-stars";
import { useSelector } from "react-redux";

export default function Best_Product() {
  const { products, loading, error } = useProduct("limit=4&&skip=45");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
        <div className="mt-[80px]   w-[90%] ml-[70px]  qs:h-[600px] qs:ml-5">
          <div className="w-[100px] h-10 center gap-4 ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary">This Month</span>
          </div>
          <h1 className={` h-12 font_3 text-[30px]  font_3  ${darkMode?"text-white":""}`}>
            Best Selling Products
          </h1>
          </div>
          <div className=" gap-9 flex flex-wrap justify-evenly items-center mt-8  w-[90%] ml-[70px]  qs:ml-[19px] qs:-mt-[490px] ">
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
      {/* {products?.map((item)=>
      <Link to={`/product/${item.id}`} className="mt-[140px]   w-[90%] ml-[70px]  qs:ml-5 qs:border-2 qs:relative">
        <div>
          <div className="w-[100px] h-10 center gap-4 ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary">This Month</span>
          </div>
          <h1 className=" h-12 font_3 text-[30px]  font_3">
            Best Selling Products
          </h1>
          <div className="center font_1 ml-[860px] -mt-28 absolute qs:hidden	">
            <Link
              to={"/Product-API"}
              className="center  text-xs	mt-8 rounded bg-primary text-white w-[134px] h-[56px] qs:bg-slate-500 "
            >
              view all products
            </Link>
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
        <div className="center font_1 lg:hidden md:hidden	sm:hidden">
          <Link
            to={"/Product-API"}
            className="center font_1 text-xs	mt-8 rounded bg-primary text-white w-[134px] h-[56px] qs:bg-primary "
          >
            view all products
          </Link>
        </div>
        <div className="mt-[140px]   w-[90%] ml-[70px] qs:ml-5 qs:mt-8 qs:h-28">
          <img src={Benar} />
        </div>
      </Link>)} */}
      </div>
    </>
  );
}
