import { CiSearch } from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useState } from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

export default function Navbare() {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact ", link: "/contact" },
  ];
  const isLoggedIn = false;
  let darkMode = true;

  // const darkMode = useSelector((state) => state.darkMode.darkMode);
  // const [DarkMode,setDarkMode]=useState(false)
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  return (
    <>
      <div className="container-x " id="top">
        <div
          className={` border-2  center border-t-0	border-l-0	 border-r-0 ${
            darkMode ? "bg-dark" : ""
          }	`}
        >
          <div className=" h-[38px]	 mt-[88px]   w-[90%]">
            <div className=" flex items-center -mt-14">
              <img src={logo} alt="logo" className="h-20 ml-5" />
            </div>
            <div className="w-60 px-2 h-[36px] -mt-14 rounded center  bg-[#F5F5F5]  ml-64  qs:hidden">
              <input
                type="search"
                className="outline-none w-full text-sm bg-transparent "
                placeholder="What are you looking for?"
              />
              <CiSearch className="text-3xl" />
            </div>
            <div className=" h-6 bg-white w-96 ml-[570px] -mt-7 qs:w-[110%] qs:h-12 qs:items-center  qs:-ml-4 qs:-mt-20  qs:flex ">
              <ul
                className={`hidden md:flex items-center ${
                  darkMode ? "bg-dark text-white" : ""
                } gap-5 `}
              >
                {links.map((items, i) => (
                  <li
                    className={`hover:underline  hover:text-primary font_1 ${
                      darkMode ? " text-white" : ""
                    } `}
                    key={i}
                  >
                    <Link to={items.link}> {items.title}</Link>
                  </li>
                ))}
                {isLoggedIn ? (
                  <>
                    <Link
                      to={"/signUp"}
                      className={`hover:underline  hover:text-primary font_1 ${
                        darkMode ? " text-white" : ""
                      } `}
                    >
                      SignUp
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      to={"/login"}
                      className={`over:underline  hover:text-primary font_1 ${
                        darkMode ? " text-white" : ""
                      } `}
                      // onClick={handleClick}
                    >
                      Login
                    </Link>
                    {/* <span className="bg-primary text-white rounded-full w-8 h-8 center">
                <FaRegUser className=" text-[15px]  " />
              </span> */}
                  </>
                )}
              </ul>
              <button
                className="border-2 text-4xl md:hidden   qs:absolute qs:ml-[310px]"
                onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              >
                {isHamburgerOpen ? (
                  <AiOutlineCloseSquare />
                ) : (
                  <GiHamburgerMenu />
                )}
              </button>
              {isHamburgerOpen && (
                <div className=" -ml-[190px] h-56 rounded w-[85%] qs:ml-24 qs:mt-64">
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
              <div>
                <button
                  onClick={() => {darkMode = false; console.log("hello");
                  }}
                  className={`text-3xl ${darkMode ? "text-white" : ""}`}
                >
                  {darkMode ? <IoSunnyOutline /> : <IoMdMoon />}
                </button>
              </div>
              {!isLoggedIn ? (
                <span className="bg-primary text-white rounded-full w-8 h-8 center ml-[370px] -mt-7   qs:ml-[270px] qs:mt-0 qs:absolute ">
                  <FaRegUser className=" text-[15px]  " />
                </span>
              ) : null}

              <div className="gap-4 center w-32 h-8 ml-[280px] -mt-7  text-2xl	qs:ml-[180px] qs:absolute qs:-mt-0">
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
      </div>
    </>
  );
}
