import img from "../assets/game.png";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Product_Card({
  image,
  name,
  price,
  discount,
  rating,
  id,
}) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <Link to={`/product/${id}`}>
        <div
          className={`group border-2 flex ${
            darkMode ? "bg-dark" : ""
          }  gap-4 flex-col relative bg-[#F5F5F5] w-[270px] h-[350px] `}
        >
          <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            {discount}%
          </div>

          <div>
            <img
              src={image || img}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300 w-48 h-[190px]"
            />
          </div>

          <h3
            className={` font-medium group-hover:text-primary ${
              darkMode ? "text-white" : ""
            } transition-all duration-300`}
          >
            {name}{" "}
          </h3>

          <p>
            <span className={`text-primary ${darkMode ? "text-white" : ""} `}>
              ${price}
            </span>{" "}
          </p>

          <div className="flex items-center gap-3">
            {" "}
            <ReactStars
              count={5}
              value={rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
            <span className={`${darkMode ? "text-white" : ""}`}>
              ({rating})
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
