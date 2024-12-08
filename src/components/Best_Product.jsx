import Product_Card from "./Product_Card";
import useProduct from "./hooks/useProducts";
import { useSelector } from "react-redux";

export default function Best_Product() {
  const { products, loading, error } = useProduct("limit=4&&skip=45");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <div className="mt-[80px]   w-[90%] ml-[70px]  qs:h-[600px] qs:ml-5">
        <div className="w-[100px] h-10 center gap-4 ">
          <p className=" bg-primary w-5 h-10 "></p>
          <span className="text-sm text-primary">This Month</span>
        </div>
        <h1
          className={` h-12 font_3 text-[30px]  font_3  ${
            darkMode ? "text-white" : ""
          }`}
        >
          Best Selling Products
        </h1>
      </div>
      <div className=" gap-9 flex flex-wrap justify-evenly items-center mt-8  w-[90%] ml-[70px]  qs:ml-[19px] qs:-mt-[490px] ">
        {loading ? "loading...." : null}
        {error}
        {products?.map((item) => (
          <div key={item.id}>
            <Product_Card
              key={item.id}
              image={item.thumbnail}
              name={item.title}
              price={item.price}
              discount={item.discountPercentage}
              rating={item.rating}
              id={item.id}
            />
          </div>
        ))}
      </div>
    </>
  );
}
