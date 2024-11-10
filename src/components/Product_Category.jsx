import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { CiHeadphones } from "react-icons/ci";
import { CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { TbDeviceWatchStats } from "react-icons/tb";
import { CiCamera } from "react-icons/ci";

export default function Product_Category() {
  return (
    <>
          <div className=" mt-[80px]   w-[90%] ml-[70px] border"></div>

      <div className=" mt-[80px]   w-[90%] ml-[70px]">
        <div className="w-full h-[313px] ">
          <div className="flex gap-4 ">
            <p className=" bg-primary w-5 h-10 "></p>
            <span className="text-sm text-primary mt-3 font_3">Categories</span>
          </div>
          <h1 className="w-[211px h-12 font_3 text-[30px]">
            Browse By Category
          </h1>
          <div className=" flex justify-end   absolute ml-[950px] 	-mt-[35px] gap-2		">
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowLeft />
            </span>
            <span className="rounded-full bg-[#F5F5F5] ">
              <FaArrowRight />
            </span>
          </div>
          <div className=" h-[145px] flex gap-7 mt-10">
            <div className="w-[170px] h-[145px] border-2 center flex-col">
              <CiMobile4 className="w-14 h-14" />
              <p>phones</p>
            </div>
            <div className="w-[170px] h-[145px] border-2 center flex-col">
              <HiOutlineComputerDesktop className="w-14 h-14" />
              <p>Computers</p>
            </div>
            <div className="w-[170px] h-[145px] border-2 center flex-col">
              <TbDeviceWatchStats className="w-14 h-14" />

              <p>SmartWatch</p>
            </div>
            <div className="w-[170px] h-[145px] border-2 center flex-col">
              <CiCamera className="w-14 h-14" />
              <p>Camera</p>
            </div>{" "}
            <div className="w-[170px] h-[145px] border-2 center flex-col">
              <CiHeadphones className="w-14 h-14" />
              <p>HeadPhones</p>
            </div>{" "}
            <div className="w-[170px] h-[145px] border-2 center flex-col">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_4413)">
                  <path
                    d="M46.6665 14H9.33317C6.75584 14 4.6665 16.0893 4.6665 18.6667V37.3333C4.6665 39.9107 6.75584 42 9.33317 42H46.6665C49.2438 42 51.3332 39.9107 51.3332 37.3333V18.6667C51.3332 16.0893 49.2438 14 46.6665 14Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 28H23.3333M18.6667 23.3334V32.6667"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35 25.6666V25.6908"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M42 30.3333V30.3574"
                    stroke="black"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_4413">
                    <rect width="56" height="56" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
