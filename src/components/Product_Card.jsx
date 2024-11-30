import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Frameimg from "../assets/Frame 570.png";
import ReactStars from "react-stars";
import useProduct from "./hooks/useProducts";
import { Link } from "react-router-dom";

export default function Product_Card({
  image,
  name,
  price,
  discount,
  rating,
  id,
}) {
  // const { products, loading, error } = useProduct("limit=4&&skip=83");
  // console.log(products.id);

  // console.log(name);
  {
    /* {loading ? "loading...." : null}
   {error} */
  }
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="group border-2 flex   gap-4 flex-col relative bg-[#F5F5F5] w-[270px] h-[380px] ">
          <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            {discount}%
          </div>

          <div className="mt-9">
            <img
              src={image}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300 w-48 h-[190px]"
            />
          </div>

          <h3 className="font-medium group-hover:text-primary transition-all duration-300">
            {name}{" "}
          </h3>

          <p>
            <span className="text-primary">${price}</span>{" "}
          </p>

          <p className="flex items-center gap-3">
            {" "}
            <ReactStars
              count={5}
              value={rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
            <span>({rating})</span>
          </p>
        </div>
      </Link>
      {/* {products?.map((item)=> */}
      {/* <Link to={`/product/${item.id}`} className=" mt-8  w-[90%] ml-[70px]  qs:ml-[19px] ">
 <div className=" flex justify-evenly flex-wrap gap-10 items-center  ">
   {loading ? "loading...." : null}
   {error}
 
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
 </div>
</Link> */}

      {/* )
} */}
    </>
  );
}
