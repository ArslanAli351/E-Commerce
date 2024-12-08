import Frame from "../assets/Frame 721.png";
import img from "../assets/icon-send.png";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className=" flex justify-end mt-[80px]">
    <a href="#top"><div className="w-12 border-2 rounded-full bg-[#F5F5F5] h-12 center text-2xl	"><FaArrowUp />
    </div></a></div>
      <div className=" border-2 h-[440px] bg-black text-white flex gap-[87px] p-7 qs:flex-col qs:h[600px]">
        <div className="w-[217px]  h-[188px] gap-4 flex flex-col mt-[120px]     qs:w-[300px] qs:mt-0 ">
          <h1 className="font-bold	font_3">Exclusive</h1>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className=" flex align-center gap-3 border-2 p-2 rounded-md	">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none  bg-transparent  "
            />
            <button className="-ml-4  w-8 qs:ml-12  ">
              <img src={img} alt="sand icon" />
            </button>
          </div>
        </div>{" "}
        <div className="w-[175px] h-44 gap-4 flex flex-col mt-[120px]  qs:w-[300px] qs:-mt-8 ">
          <h1 className="font-bold	font_1">Support</h1>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
        <div className="w-[123px]  h-60 gap-4 flex flex-col mt-[120px]">
          <h1 className="font-bold	font_1">Account</h1>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="w-[123px]  h-60 gap-4 flex flex-col mt-[120px]">
          <h1 className="font-bold	font_1">Quick Link</h1>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="w-[198px]  h-[210px] gap-4 flex flex-col mt-[120px] qs:hidden">
          <img src={Frame} alt="" />
        </div>
      </div>
    </>
  );
}
