import Baner from "../assets/Baner 2.png";
import img1 from "../assets/Services.png";
import img2 from "../assets/Services (2).png";
import img3 from "../assets/Services (1).png";
export default function Featured_Product() {
  return (
    <>
      <div className="mt-[80px]   w-[90%] ml-[70px] qs:hidden ">
        <div className="w-[100px] h-10 center gap-4 ">
          <p className="border bg-primary w-5 h-10"></p>
          <span className="text-sm text-primary">Featured</span>
        </div>
        <h1 className="w-[211px h-12 font_3 text-[30px]">New Arrival</h1>

        <img className="h-[500px]" src={Baner} />
        <div className="w-[100%] center">
          <div className="w-[70%] flex  justify-around	 gap-20 mt-[80px]">
            <img src={img1} alt="car img" />
            <img src={img2} alt="car img" />
            <img src={img3} alt="car img" />
          </div>
        </div>

        <div className="w-[70%] text-xs gap-20	font_1  flex  justify-around mt-[0px] ml-[150px]">
          <div>
            {" "}
            <h3 className="font-semibold	">FREE AND FAST DELIVERY</h3>
            <p className="text-[10px]">
              Free delivery for all orders over $140
            </p>{" "}
          </div>
          <div>
            <h3 className="font-semibold	">MONEY BACK GUARANTEE</h3>
            <p className="text-[10px]">We reurn money within 30 days</p>
          </div>
          <div>
            {" "}
            <h3 className="font-semibold	">24/7 CUSTOMER SERVICE</h3>
            <p className="text-[10px]">Friendly 24/7 customer support</p> 
          </div>
        </div>
      </div>
    </>
  );
}
