import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";

import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";

export default function Navbare() {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact ", link: "/contact" },
  ];
  const isLoggedIn = false;
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <>
      <div className=" border  center border-t-0	border-l-0	 border-r-0	">
        <div className=" h-[38px]	 mt-[88px]  ">
          <h1 className="w-[118px] h-6 font_2 qs:ml-[290px] qs:-mt-6 qs:absolute">
            Exclusive
          </h1>
          <div className="w-60 px-2 h-[36px] -mt-7 rounded center bg-[#F5F5F5]  ml-64  qs:hidden">
            <input
              type="search"
              className="outline-none w-full text-sm bg-transparent "
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-3xl" />
          </div>

          <div className=" h-6 bg-white w-96 -mt-7 ml-[580px] ">
            <ul className="hidden md:flex items-center	 gap-5">
              {links.map((items, i) => (
                <li
                  className="hover:underline  hover:text-primary font_1 "
                  key={i}
                >
                  <Link to={items.link}> {items.title}</Link>
                </li>
              ))}
              {isLoggedIn ? (
                <>
                  <Link to={"/signUp"} className="hover:underline  hover:text-primary font_1 ">
                    SignUp
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/login"} className="hover:underline  hover:text-primary font_1 ">
                    Login
                  </Link>
                  {/* <span className="bg-primary text-white rounded-full w-8 h-8 center">
                <FaRegUser className=" text-[15px]  " />
              </span> */}
                </>
              )}
            </ul>
            <button
              className="border-2 text-4xl md:hidden "
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            >
              {isHamburgerOpen ? <AiOutlineCloseSquare /> : <GiHamburgerMenu />}
            </button>
            {isHamburgerOpen && (
              <div className="border-2 border-red-900 -ml-[190px] h-56 rounded w-[85%] ">
                <ul className="border-2 border-green-900 h-[220px] flex flex-col gap-4 pl-4 rounded  w-[60%] bg-primary text-white absolute ">
                  {links.map((items, i) => (
                    <li className="hover:underline   font_1 " key={i}>
                      <Link to={items.link}> {items.title}</Link>
                    </li>
                  ))}
                  <div className="w-36 px-2 h-[36px]  rounded center bg-[#F5F5F5]    ">
                    <input
                      type="search"
                      className="outline-none w-full text-sm bg-transparent "
                      placeholder="What are you looking for?"
                    />
                    <CiSearch className="text-3xl text-black" />
                  </div>
                </ul>
              </div>
            )}
            {!isLoggedIn ? (
              <span className="bg-primary text-white rounded-full w-8 h-8 center ml-72 -mt-7 qs:ml-16 qs:-mt-10 ">
                <FaRegUser className=" text-[15px]  " />
              </span>
            ) : null}

            <div className="gap-4 center w-32 h-8 ml-[280px] -mt-7  text-2xl	">
              {isLoggedIn ? (
                <>
                  <IoMdHeartEmpty />
                  <IoCartOutline />
                  <img
                    src="https://avatars.githubusercontent.com/u/160047906?s=400&u=dba706816b08f104211ae1aaa03e58ea46b5ebdf&v=4"
                    className="rounded-full  truncate	w-8 h-8 "
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
