import MoreProducts from "../components/MoreProducts";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Product_API() {
  const API_key = "https://dummyjson.com/products";
  const [products, setProducts] = useState(null);
  const getProductData = async () => {
    const response = await axios(API_key);
    setProducts(response?.data?.products);
  };
  useEffect(() => {
    getProductData();
  }, []);
  const [searchTrem, setSearchTerm] = useState("");
  const searchProducts = () => {
    const result = products?.filter((item) => {
      // return item.price>=50
      // return item.rating>=4
      return item.title.toLowerCase().includes(searchTrem);
    });
    return result;
  };

  const searchResult = searchProducts();

  return (
    <div>
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase());
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Search your product"
      />
      {products === null ? "Loading...." : null}

      <div className="mt-[80px] border-2   w-[90%] ml-[70px]  qs:ml-[19px] flex flex-wrap justify-evenly gap-10">
        {searchResult?.map((item) => (
          <MoreProducts
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discount={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
