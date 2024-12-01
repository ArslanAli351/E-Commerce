import MoreProducts from "../components/MoreProducts";
import axios from "axios";
import { useEffect, useState } from "react";
import Product_Card from "../components/Product_Card";
import useProduct from "../components/hooks/useProducts";
export default function Product_API() {
  const { products, loading, error } = useProduct();

  const [searchTrem, setSearchTerm] = useState("");
  const [Trem, setTerm] = useState("");

  const searchProducts = () => {
    const result = products?.filter((item) => {
      // return item.price>=50
      // return item.rating>=4

      return item.title.toLowerCase().includes(searchTrem);
    });
    return result;
  };
  // let div=document.querySelectorAll(".aa")
  // function Rating() {
  //   div[0].innerHTML=Trem
  //   const ret = products?.filter((item) => {
  //     return item.rating >= 4;
  //   });

  //    ret?.map((item) => {
  //     <MoreProducts
  //           key={item.id}
  //           image={item.thumbnail}
  //           name={item.title}
  //           price={item.price}
  //           discount={item.discountPercentage}
  //           rating={item.rating}
  //         />
  //   console.log(item.title);

  //   });
  // }

  const searchResult = searchProducts();

  return (
    <div>
      {/* <button onClick={Rating}>Click hig rew</button> */}
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase());
        }}
        className="block w-full outline-none rounded-md border-[3px] py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Search your product"
      />

      {loading ? "Loading...." : null}
      {error}
      <div className="aa mt-[80px]   w-[90%] ml-[70px]  qs:ml-[19px] flex flex-wrap justify-evenly gap-10">
        {searchResult?.map((item) => (
          <MoreProducts
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discount={item.discountPercentage}
            rating={item.rating}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
}
