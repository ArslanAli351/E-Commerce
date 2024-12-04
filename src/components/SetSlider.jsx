import useProduct from "./hooks/useProducts";
import Product_Card from "./Product_Card";

export default function SetSlider() {
  const { products, loading, error } = useProduct("limit=1&&skip=45");
  return (
    <>
      {loading ? "loading...." : null}
      {error}
      {products?.map((item) => (
        <>
          <Product_Card
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discount={item.discountPercentage}
            rating={item.rating}
            id={item.id}
          />
        </>
      ))}
    </>
  );
}
