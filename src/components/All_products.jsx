
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Footer from "../components/Footer";
import Navbare from "../components/Navbare";



// import Navbare from "./components/Navbare";

export default function All_product(){
    return(<>
      <Navbare />

  <div className="mt-[140px]   w-[90%] ml-[70px] qs:border-2 qs:ml-4">
        <div >
          <div className="w-[100px] h-10 ">
            <span className="text-sm font_1">Wishlist (4)</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px] font_3">Best Selling Products</h1>
          <div className="center font_1 ml-[860px] -mt-[150px] absolute">
          <button className="text-xs border-2	mt-8 rounded w-[134px] h-[56px] qs:hidden">
          Move All To Bag          </button>
        </div>
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
          <button className="lg:hidden md:hidden	sm:hidden text-xs border-2	mt-8 rounded w-[134px] h-[56px]  bg-primary text-white">
            Move All To Bag      
                </button>
        </div>
       
      </div>


      <div className="mt-[140px]   w-[90%] ml-[70px] qs:ml-4">
        <div >
          <div className="w-[100px] h-10 center gap-4  ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary ">Just For You</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px] font_3">Best Selling Products</h1>
          <div className="center font_1 ml-[860px] -mt-28 absolute">
          <button className="text-xs	mt-8 rounded w-[104px] h-[56px] border-2 qs:hidden">
          See All          </button>
        </div>
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
          <div className="center font_1 ">
          <button className="lg:hidden md:hidden	sm:hidden text-xs border-2	mt-8 rounded w-[134px] h-[56px]  bg-primary text-white">
          See All          </button>
        </div>
        </div>
       
      </div>

      <Footer />

    
    </>)
}