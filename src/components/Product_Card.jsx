import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Frameimg from "../assets/Frame 570.png";
import ReactStars from "react-stars";

export default function Product_Card({}) {
  const ProductsData = [
    {
      name: "HAVIT HV-G92 Gamepad",
      image: img,
      price: "$50",
      rating: "2",
    },
    {
      name: "AK-900 Wired Keyboard",
      image: Keyboardimg,
      price: "$120",
      rating: "4.2",
    },
    {
      name: "IPS LCD Gaming Monitor",
      image: Ledimg,
      price: "$150",
      rating: "2.7",
    },
    {
      name: "S-Series Comfort Chair ",
      image: Frameimg,
      price: "$180",
      rating: "3",
    },
  ];
  return (
    <>
      <div className=" mt-8  w-[90%] ml-[70px]  qs:ml-[19px]">
        <div className="0 flex justify-evenly flex-wrap gap-10 items-center">
          {ProductsData.map((item) => (
            <div className="flex flex-wrap	gap-10 ">
              <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px] ">
                <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
                  -40%
                </div>

                <div className="mt-9">
                  <img
                    src={item.image}
                    alt="product img"
                    className="m-auto group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                <h3 className="font-medium group-hover:text-primary transition-all duration-300">
                  {item.name}{" "}
                </h3>

                <p>
                  <span className="text-primary">${item.price}</span>{" "}
                  <span>$160</span>
                </p>

                <p>
                  {" "}
                  <ReactStars
                    count={5}
                    value={item.rating}
                    size={24}
                    color2={"#ffd700"}
                    edit={false}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
