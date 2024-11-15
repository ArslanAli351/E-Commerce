import { RiArrowDropDownLine } from "react-icons/ri";

export default function Banner() {
  return (
    <>
      <div className=" bg-black	center	 border-black	border-2 h-12">
        <p className="text-white text-sm  w-[70%]  has-[18px]  gap-[31px] font_1">
          Summer Sale For All Swim Suits<span className="qs:hidden"> And Free Express  Delivery - OFF
          50%!ShopNow</span>
          <span className="ml-3 underline underline-offset-1	font-semibold	qs:hidden">
            ShopNow
          </span>
        </p>
        <span className=" text-white ">English </span>
        <span className="w-10   flex text-5xl	  text-white">
          <RiArrowDropDownLine />
        </span>
      </div>
    </>
  );
}
