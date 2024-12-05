// ========== Use SWR WEBSITE ==========
// ========== Use date-fns WEBSITE ==========

import { formatDistanceToNow, format } from "date-fns";
import img from "../assets/game.png";
import Keyboardimg from "../assets/Keyboard img.png";
import Ledimg from "../assets/Led img.png";
import Frameimg from "../assets/Frame 570.png";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import ReactStars from "react-stars";
import Not_Found from "./Not_Found";
import { SwiperSlide } from "swiper/react";
export default function ProductDetail() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
  const product = data?.data;
  const [selectImage, setSelectImage] = useState();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(product?.minimumOrderQuantity);
  }, [data]);

  if (error) {
    return <Not_Found />;
  }
  return (
    <>
      <div className=" flex justify-between mt-14 ">
        {isLoading ? "loading...." : null}
        {product?.images?.length > 1 && product?.images?.length <= 3 ? (
          <div className=" qs:-mt-7">
            {product?.images.map((image, i) => (
              <>
                <img
                  key={i}
                  src={image}
                  className="w-[150px] h-[138px] mt-[23px] rounded	border-4"
                  onMouseOver={() => setSelectImage(image)}
                  alt="image"
                />
              </>
            ))}
          </div>
        ) : null}
        <div className="h-[600px] w-[76%] flex justify-between  qs:justify-center qs:h-[300px]  qs:w-[100%] qs:mt-11">
          <div className="qs:h-[300px] qs:w-[100%] qs:ml-3">
            <img
              src={selectImage || product?.images[0]}
              className="w-[400px] h-[440px] qs:h-[300px] qs:w-[270px]  bg-slate-100 qs:center qs:bg-white "
            />
          </div>
          <div className=" h-[400px] w-[380px] qs:-ml-[320px]  qs:mt-[440px]   ">
            <h1 className="font_3 qs:text-2xl">{product?.title}</h1>
            <div className=" flex items-center w-[340px] h-5 mt-1  ">
              <ReactStars
                count={4}
                value={product?.rating}
                size={24}
                color2={"#ffd700"}
                edit={false}
                className=" qs:text-xl"
              />

              <span className="w-40 h-5 opacity-55 ml-4	">
                ({product?.rating})
              </span>
              <span className="w-28  h-5    -ml-10">
                {product?.stock >= 10 ? (
                  <p className="opacity-55	text-green-400 text-[17px]  ">
                    In Stock
                  </p>
                ) : (
                  <p className="  text-sm text-primary">Limited stock</p>
                )}
              </span>
            </div>
            <p className="mt-1">${product?.price * quantity || 0}</p>
            <p className="w-[373px] mt-5">{product?.description}</p>
            <p className="w-[373px] boder-2"></p>
            {/* <div className="flex gap-6 mt-6">
              <h1>Size:</h1>
              <p className="w-8 h-8 rounded	border center">XS</p>
              <p className="w-8 h-8 rounded	border center">S</p>
              <p className="w-8 h-8 rounded	border center">M</p>
              <p className="w-8 h-8 rounded	border center">L</p>
              <p className="w-8 h-8 rounded	border center">XL</p>
            </div> */}
            <div className="flex justify-between mt-6">
              <div className="border w-40 h-11 flex justify-evenly">
                <button
                  className="border text-xl w-10 h-11 center hover:bg-primary hover:text-white hover:text-3xl"
                  onClick={() => {
                    if (
                      quantity < 2 ||
                      quantity <= product?.minimumOrderQuantity
                    )
                      return;
                    setQuantity(quantity - 1);
                  }}
                >
                  -
                </button>
                <h1 className="border h-11 w-20 center">{quantity}</h1>
                <button
                  className="border text-xl w-10 h-11 center hover:bg-primary hover:text-white hover:text-2xl"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="flex">
                <button className="bg-primary w-[160px] h-11 text-white ">
                  {" "}
                  Buy Now
                </button>
                <h1 className="border-2  w-10 h-11 center">
                  <IoMdHeartEmpty />
                </h1>
              </div>
            </div>
            <div className=" w-[300px] mt-6 ">
              <div className="border  p-3">
                <h1 className="font_1">Free Delivery</h1>
                <p className="text-xs	">{product?.warrantyInformation} </p>
              </div>
              <div className="border   p-3">
                <h1 className="font_1">Return Delivery</h1>
                <p className="text-xs	">
                  {product?.returnPolicy || "7 days return policy"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-24  qs:mt-[540px] ">
        <h1 className="text-primary text-4xl font_1">Reviews</h1>
        {product?.reviews?.map((review) => (
          <div className=" border-[5px]  border-white p-6 bg-[#f1f5f9]">
            <h2> {review.reviewerName}</h2>
            {/* <p>{format(review.date,'MM / EEE-YYY')}</p> */}
            <p>{formatDistanceToNow(review.date, { addSuffix: true })}</p>

            <p> {review.comment}</p>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
