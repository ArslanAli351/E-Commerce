import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function Navbare() {
  const links = ["Home", "Contact", "About"];
  const isLoggedIn = true;

  return (
    <>
      <div className=" border  center border-t-0	border-l-0	 border-r-0	">
        <div className=" h-[38px]	 mt-[88px]  ">
          <h1 className="w-[118px] h-6 font_2">Exclusive</h1>
          <div className="w-60 px-2 h-[36px] -mt-7 rounded center bg-[#F5F5F5]  ml-64 ">
            <input
              type="search"
              className="outline-none w-full text-sm bg-transparent"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-3xl" />
          </div>

          <div className=" h-6 bg-white w-96 -mt-7 ml-[580px] ">
            <ul className="flex items-center	 gap-5">
              {links.map((items, i) => (
                <li
                  className="hover:underline  hover:text-primary font_1 "
                  key={i}
                >
                  {items}
                </li>
              ))}
              {isLoggedIn ? (
                <>
                  <li className="hover:underline  hover:text-primary font_1 ">
                    SignUp
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:underline  hover:text-primary font_1 ">
                    Login
                  </li>
                </>
              )}
            </ul>
            <div className="gap-4 center w-32 h-8 ml-[280px] -mt-7  text-2xl	">
              {isLoggedIn ? (
                <>
                  <IoMdHeartEmpty />
                  <IoCartOutline />
                </>
              ) : null}

              <span className="bg-primary text-white rounded-full w-8 h-8 center">
                <FaRegUser className=" text-[15px]  " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
