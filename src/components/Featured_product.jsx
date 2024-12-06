import Baner from "../assets/Baner 2.png";
import img1 from "../assets/Services.png";
import img2 from "../assets/Services (2).png";
import img3 from "../assets/Services (1).png";
// src\assets\ps5.png
import img4 from "../assets/ps5.png";
import img5 from "../assets/baji.png";
import img6 from "../assets/speaker.png";
import img7 from "../assets/perfume.png";
import { useSelector } from "react-redux";
export default function Featured_Product() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className="mt-[80px]   w-[90%] ml-[70px] qs:hidden ">
        <div className="w-[100px] h-10 center gap-4 ">
          <p className="border bg-primary w-5 h-10"></p>
          <span className="text-sm text-primary">Featured</span>
        </div>
        <h1 className={`w-[211px h-12 font_3 text-[30px] ${darkMode?"text-white":""}`}>New Arrival</h1>
        {/* <img className="h-[500px]" src={Baner} /> */}

        <div className="main grid grid-cols-4 gap-8 grid-rows-2">
          <div className="bg-[#0D0D0D] group relative text-gray-200 rounded col-span-2 row-span-2">
            <img
              className="object-contain w-full h-full "
              src={img4}
              alt="product image"
            />

            <div className="absolute gap-3 flex-col flex bottom-0 p-6">
              <h3
                className="  S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl
"
              >
                Women's Collections
              </h3>
              <p className="w-3/5 line-clamp-3">
                Featured woman collections that give you another vibe.
              </p>
              <a className="underline" href="#">
                Shop Now
              </a>
            </div>
          </div>
          <div className="relative bg-[#0D0D0D]  group text-gray-200 rounded col-span-2">
            <img
              className="object-contain  h-full w-full"
              src={img5}
              alt="product image"
            />

            <div className="absolute gap-3 flex-col flex bottom-0 p-6">
              <h3
                className="      S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl
"
              >
                Women's Collections
              </h3>
              <p className="w-3/5 line-clamp-3">
                Featured woman collections that give you another vibe.
              </p>
              <a className="underline" href="#">
                Shop Now
              </a>
            </div>
          </div>
          <div className="bg-[#0D0D0D] relative group text-gray-200 rounded">
            <img
              className="object-contain group-hover:scale-110 transition duration-300 h-full w-full"
              src={img6}
              alt="product image"
            />
            <div className="absolute gap-2 flex-col flex bottom-0 p-6">
              <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
                Speakers
              </h3>
              <p className="line-clamp-3">Amazon wireless speakers</p>
              <a className="underline" href="#">
                Shop Now
              </a>
            </div>{" "}
          </div>

          <div className="bg-black">
            <div
              style={{
                backdropFilter: "blur(300px)",
                backgroundColor: "rgba(217, 217, 217, 0.2)",
              }}
              className="bg-[#0D0D0D] h-full relative group text-gray-200 rounded"
            >
              <img
                className="object-contain ml-2 h-full w-[95%] group-hover:scale-110 transition duration-300"
                src={img7}
                alt="product image"
              />

              <div className="absolute gap-2 flex-col flex bottom-0 p-6">
                <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
                  Perfume
                </h3>
                <p className="line-clamp-3">GUCCI INTENSE OUD EDP </p>
                <a className="underline" href="#">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <img className="h-[500px]" src={Baner} /> */}
        <div className="w-[100%] center">
          <div className="w-[70%] flex  justify-around	 gap-20 mt-[80px]">
            <img src={img1} alt="car img" />
            <img src={img2} alt="car img" />
            <img src={img3} alt="car img" />
          </div>
        </div>

        <div className="w-[70%] text-xs gap-20	font_1  flex  justify-around mt-[0px] ml-[150px]">
          <div>
            {" "}
            <h3 className={`font-semibold	${darkMode?"text-white":""}`}>FREE AND FAST DELIVERY</h3>
            <p className={`text-[10px] 	${darkMode?"text-white":""}`}>
              Free delivery for all orders over $140
            </p>{" "}
          </div>
          <div>
            <h3 className={`font-semibold		${darkMode?"text-white":""}`}>MONEY BACK GUARANTEE</h3>
            <p className={`text-[10px] 	${darkMode?"text-white":""}`}>We reurn money within 30 days</p>
          </div>
          <div>
            {" "}
            <h3 className={`font-semibold		${darkMode?"text-white":""}`}>24/7 CUSTOMER SERVICE</h3>
            <p className={`text-[10px] 	${darkMode?"text-white":""}`}>Friendly 24/7 customer support</p>
          </div>
        </div>
      </div>
    </>
  );
}
