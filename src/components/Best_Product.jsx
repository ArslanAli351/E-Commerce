
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Benar from "../assets/baner.png"



export default function Best_Product(){
    return(<>
    <div className="mt-[140px]   w-[90%] ml-[70px]  qs:ml-5">
        <div >
          <div className="w-[100px] h-10 center gap-4 ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary">This Month</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px] font_3">Best Selling Products</h1>
          <div className="center font_1 ml-[860px] -mt-28 absolute">
          <button className="text-xs	mt-8 rounded bg-primary text-white w-[134px] h-[56px]">
            view all products
          </button>
        </div>
        </div>
        <div className="center flex-wrap	gap-10 ">
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
       
      </div>



      <div className="mt-[140px]   w-[90%] ml-[70px] qs:ml-5 qs:mt-8 qs:h-28">
        <img src={Benar}  />
      </div>
    </>)
}