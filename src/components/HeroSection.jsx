import { FaGreaterThan } from "react-icons/fa6";
import Frame from "../assets/Frame 560.png";
export default function HeroSection() {
  return (
    <>
      <div>
        <div className=" mt-4 border-t-0	border-l-0	 border-b-0	ml-20 w-[217px] h-[344px] font_1 border-2 flex justify-evenly flex-col qs:mt-[380px] qs:w-[360px] qs:ml-0 qs:border-2 	qs:flex-row qs:absolute qs:h-32 qs:flex-wrap  qs:justify-between">
          
          <p className=" center hover:text-primary ">
            Woman’s Fashion <FaGreaterThan className="ml-14  qs:hidden" />
          </p>
          <p className="center hover:text-primary ">
            Men’s Fashion <FaGreaterThan className="ml-[86px]  qs:hidden" />
          </p>
          <p className="hover:text-primary qs:mt-4 qs:hidden ">Electronics</p>
          <p className="hover:text-primary qs:hidden">Home & Lifestyle</p>
          <p className="hover:text-primary qs:hidden">Medicine</p>
          <p className="hover:text-primary ">Sports & Outdoor</p>
          <p className="hover:text-primary">Baby’s & Toys</p>
          <p className="hover:text-primary " >Groceries & Pets</p>
          <p className="hover:text-primary">Health & Beauty</p>
        </div>
        <img src={Frame} className="w-[750px] h-[344px] center ml-[313px] -mt-[328px]  qs:ml-0 qs:w-[390px]  qs:mt-0" />
      </div>
    </>
  );
}
