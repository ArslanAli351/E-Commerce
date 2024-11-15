import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Frameimg from "../assets/Frame 570.png";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";
import Footer from "../components/Footer";

export default function Product_open() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="flex">
        <h2>Account/</h2>
        <h2>Gaming/</h2>
        <h2>Havic HV G-92 Gamepad</h2>
      </div>
      <div className=" flex justify-between  ">
        <div>
          {" "}
          <img
            src={img}
            className="w-[150px] h-[138px] mt-[23px] rounded	qs:hidden"
          />
          <img
            src={Keyboardimg}
            className="w-[150px] h-[138px] mt-[23px] rounded	qs:hidden"
          />
          <img
            src={Ledimg}
            className="w-[150px] h-[138px] mt-[23px] rounded	qs:hidden"
          />
          <img
            src={Frameimg}
            className="w-[150px] h-[138px] mt-[23px] rounded	qs:hidden"
          />
        </div>
        <div className="h-[600px] w-[76%] flex justify-between  qs:h-[300px] qs:w-[100%] qs:mt-11">
          <img src={img} className="w-[400px] h-[440px] qs:h-60 bg-slate-100 qs:bg-white" />
          <div className=" h-[400px] w-[380px] qs:-ml-[340px]  qs:mt-96">
            <h1 className="font_3">Havic HV G-92 Gamepad</h1>
            <div className=" center w-[229px] h-5 mt-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

              <span className="w-40 h-5 opacity-55 	">(150 Reviews)</span>
              <span className="w-24 h-5 opacity-55	text-green-400 ">
                In Stock
              </span>
            </div>
            <p className="mt-1">$192.00</p>
            <p className="w-[373px] mt-5">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
            <p className="w-[373px] boder-2"></p>
            <div className="flex gap-6 mt-6">
              <h1>Size:</h1>
              <p className="w-8 h-8 rounded	border center">XS</p>
              <p className="w-8 h-8 rounded	border center">S</p>
              <p className="w-8 h-8 rounded	border center">M</p>
              <p className="w-8 h-8 rounded	border center">L</p>
              <p className="w-8 h-8 rounded	border center">XL</p>
            </div>
            <div className="flex justify-between mt-6">
              <div className="border w-40 h-11 flex justify-evenly">
                <button
                  className="border w-10 h-11 center"
                  onClick={() => {
                    if (count !== 0) {
                      setCount(count - 1);
                    }
                  }}
                >
                  -
                </button>
                <h1 className="border h-11 w-20 center">{count}</h1>
                <button
                  className="border w-10 h-11 center"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex">
                <button className="bg-primary w-[160px] h-11 text-white ">
                  {" "}
                  Buy Now
                </button>
                <h1 className="border-2  w-10 h-11 center">
                  <IoMdHeartEmpty />
                </h1>
              </div>
            </div>
            <div className=" w-[300px] mt-6 ">
              <div className="border  p-3">
                <h1 className="font_1">Free Delivery</h1>
                <p className="text-xs	">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
              <div className="border   p-3">
                <h1 className="font_1">Return Delivery</h1>
                <p className="text-xs	">
                  Free 30 Days Delivery Returns. Details{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100px] h-10 center gap-4 qs:mt-[590px]">
        <p className="border bg-primary w-5 h-10"></p>
        <span className="text-sm text-primary">Related Item</span>
      </div>
      <div className="center flex-wrap	gap-10">
        <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px] ">
          <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            -40%
          </div>

          <div className="mt-9">
            <img
              src={img}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300"
            />
          </div>

          <h3 className="font-medium group-hover:text-primary transition-all duration-300">
            HAVIT HV-G92 Gamepad
          </h3>

          <p>
            <span className="text-primary">$120</span> <span>$160</span>
          </p>

          <p>stars</p>
        </div>

        <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px]">
          <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            -40%
          </div>

          <div className="mt-11">
            <img
              src={Keyboardimg}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="w-[250px] h-10 center bg-black text-white">
            <p> Add to cart</p>
          </div>
          <h3 className="font-medium group-hover:text-primary transition-all duration-300">
            HAVIT HV-G92 Gamepad
          </h3>

          <p>
            <span className="text-primary">$960</span> <span>$1160</span>
          </p>

          <p>stars</p>
        </div>
        <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px]">
          <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
            -40%
          </div>

          <div className="mt-11">
            <img
              src={Ledimg}
              alt="product img"
              className="m-auto group-hover:scale-110 transition-all duration-300"
            />
          </div>

          <h3 className="font-medium group-hover:text-primary transition-all duration-300">
            HAVIT HV-G92 Gamepad
          </h3>

          <p>
            <span className="text-primary">$320</span> <span>$660</span>
          </p>

          <p>stars</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
