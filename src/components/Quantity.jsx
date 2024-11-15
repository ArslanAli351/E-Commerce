import Banner from "../components/banner";
import Navbare from "../components/Navbare";
import Ledimg from "../assets/Led img.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Footer from "../components/Footer";

export default function Quantity() {
  return (
    <>
      <div>
        <Banner />

        <Navbare />
        <div className="flex">
          <h2>Home /</h2>
          <h2>Cart</h2>
        </div>

        <table className="w-[100%] mt-11 ">
        <thead>

          <tr className="h-[72px] rounded	">
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          </thead>

          <tr className="h-[102px] rounded">
            <td className="flex gap-3">
              <img src={Ledimg} className="w-14 h-14" />
              <p className="center qs:hidden "> Led TV</p>
            </td>
            <td>$450</td>
            <td>
              <input type="number" className="border-2 w-[72px] h-11" />
            </td>
            <td>$450</td>
          </tr>
          <tfoot>

          <tr>
            <td className="flex gap-3">
              <img src={Keyboardimg} className="w-14 h-14" />
              <p className="center qs:hidden"> KeyBoard </p>
            </td>
            <td>$250</td>
            <td>
              <input type="number" className="border-2 w-[72px] h-11" />
            </td>
            <td>$250</td>
          </tr>
          </tfoot>


        </table>
        <div className="gap-[757px] flex  qs:gap-12">
          <button className="border-2 w-64 h-14 rounded	qs:w-32">Return To Shop</button>
          <button className="border-2 w-64 h-14 rounded	qs:w-32">Update Cart</button>
        </div>
        <div className="h-[324px] flex gap-[173px] mt-11 qs:h-[100px]">
          <div className="flex  qs:w-[100%] qs:flex-col qs:ml-5 qs:gap-4">
            {" "}
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[300px] h-14 border-2 border-gray-300 mr-6 p-2"
            />
            <button className="bg-primary w-[211px] h-14 text-white qs:w-32">
              Apply Coupon
            </button>
          </div>

          <div className="w-[470px] h-[324px] border-2 border-black text-center qs:absolute p-4 qs:ml-5 qs:w-[290px]  qs:mt-32">
            <table className="w-[100px] border-t-0 border-black   ">
              <tr className="h-[72px] 	 border border-t-0	border-l-0	 border-r-0">
                <td>Subtotal:</td>
                <td>$1750</td>
              </tr>
              <tr className="h-[72px]  border border-t-0	border-l-0	 border-r-0	">
                <td>Shipping:</td>
                <td>Free</td>
              </tr>
              <tr className="h-[72px] 	">
                <td>Total:</td>
                <td>$1750</td>
              </tr>
              <button className="bg-primary w-[260px] h-14 text-white ml-12 qs:w-32">
                Apply Coupon
              </button>
            </table>{" "}
          </div>
        </div>
      </div>
      <div className="qs:mt-96"><Footer />
</div>
      
    </>
  );
}
