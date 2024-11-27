import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";
import img from "../assets/Category-Gamepad.png";
import { Link } from "react-router-dom";


export default function Product_Category() {




  return (
    <>
      <div className="center ">
        <Link
          to={"/Product-API"}
          className=" center font_1 text-xs	mt-8 rounded bg-primary text-white w-[234px] h-[56px]"
        >
          {" "}
          view all products
        </Link>
      </div>
      <div className=" mt-[80px]   w-[90%] ml-[70px] border qs:ml-6"></div>

      <div className=" mt-[80px]   w-[90%] ml-[70px]  qs:h-[600px] qs:ml-5">
        <div className="w-full h-[313px]  qs:h-[600px] qs:flex qs:flex-col ">
          <div className="flex gap-4 ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary mt-3 font_3">Categories</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px]">
            Browse By Category
          </h1>
          <div className=" flex justify-end   absolute ml-[950px] 	-mt-[35px] gap-2 qs:mt-0	qs:ml  -0	qs:hidden">
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowLeft />
            </span>
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowRight />
            </span>
          </div>

          <div className=" h-[145px] flex gap-7 qs:flex-wrap qs:justify-center mt-10 qs:h-[600px]  ">
            <div className="w-[170px] h-[145px] border-2 center flex-col qs:h-28 qs:w-32">
              <CiMobile4 className="w-14 h-14" />
              <p>phones</p>
            </div>
            <div className="w-[170px] h-[145px] border-2 center flex-col qs:h-28 qs:w-32">
              <HiOutlineComputerDesktop className="w-14 h-14" />
              <p>Computers</p>
            </div>
            <div className="w-[170px] h-[145px] border-2 center flex-col qs:h-28 qs:w-32">
              <TbDeviceWatchStats className="w-14 h-14" />

              <p>SmartWatch</p>
            </div>
            <div className="w-[170px] h-[145px] border-2 center flex-col qs:h-28 qs:w-32">
              <CiCamera className="w-14 h-14" />
              <p>Camera</p>
            </div>{" "}
            <div className="w-[170px] h-[145px] border-2 center flex-col qs:h-28 qs:w-32">
              <CiHeadphones className="w-14 h-14" />
              <p>HeadPhones</p>
            </div>{" "}
            <div className="w-[170px] h-[145px] border-2 center flex-col qs:h-28 qs:w-32">
              <img src={img} alt="Gamepad" />

              <p>Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
