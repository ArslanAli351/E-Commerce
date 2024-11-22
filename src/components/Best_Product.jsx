
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Benar from "../assets/baner.png"
import Product_Card from "./Product_Card";
import { Link } from "react-router-dom";



export default function Best_Product(){
    return(<>
    <div className="mt-[140px]   w-[90%] ml-[70px]  qs:ml-5 qs:border-2 qs:relative">
        <div >
          
          <div className="w-[100px] h-10 center gap-4 ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary">This Month</span>
          </div>
          <h1 className=" h-12 font_3 text-[30px]  font_3">Best Selling Products</h1>
          <div className="center font_1 ml-[860px] -mt-28 absolute qs:hidden	">
          
          <Link
            to={"/Product-API"}
            className="center  text-xs	mt-8 rounded bg-primary text-white w-[134px] h-[56px] qs:bg-slate-500 "
          >
            {" "}
            view all products
          </Link>
        </div>
        </div>
       
<Product_Card />
      <div className="center font_1 lg:hidden md:hidden	sm:hidden">
          <button className="text-xs	mt-8 rounded bg-primary text-white w-[134px] h-[56px] qs:bg-slate-500 ">
            view all products
          </button>
        </div>
      <div className="mt-[140px]   w-[90%] ml-[70px] qs:ml-5 qs:mt-8 qs:h-28">
        <img src={Benar}  />
      </div></div>
    </>)
}