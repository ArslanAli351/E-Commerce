import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function MoreProducts({
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
      <Link to={`/product/${id}`} className="center flex-wrap	gap-10 ">
        <div
          className={`group border-2 flex  gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[390px] ${
            darkMode ? "bg-dark" : ""
          }`}
        >
          <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            -{discount}%
          </div>

          <div className="mt-9">
            <img
              src={image}
              alt="product img"
              className="m-auto  group-hover:scale-110 transition-all duration-300 h-44 "
            />
          </div>

          <h3
            className={`font-medium group-hover:text-primary transition-all duration-300 ${
              darkMode ? "text-white" : ""
            }`}
          >
            {name}{" "}
          </h3>

          <p>
            <span className="text-primary">${price}</span>
          </p>

          <p className="flex items-center gap-1">
            <ReactStars
              count={5}
              value={rating}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
            <span className={`text-[#000000] ${darkMode ? "text-white" : ""}`}>
              ({rating})
            </span>
          </p>
        </div>
      </Link>
    </>
  );
}
