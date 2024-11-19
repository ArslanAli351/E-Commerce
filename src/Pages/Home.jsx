import HeroSection from "../components/HeroSection";
import Product_Card from "../components/Product_Card";
import Product_Category from "../components/Product_Category";
import Best_Product from "../components/Best_Product";
import Explore_Product from "../components/Explore_product";
import Featured_Product from "../components/Featured_product";
import Footer from "../components/Footer";
import All_product from "../components/All_products";
import Quantity from "../components/Quantity";
import Product_open from "../components/Product_open";
import Slider from "../components/Slider.jsx";
export default function Home() {
  return (
    <>
      <div className="container-x">
        <HeroSection />
        <Slider />
        <Product_Card />
        <Product_Category />
        <Best_Product />
        <Explore_Product />
        <Featured_Product />
        <Footer />
        <All_product />
        <Quantity />
        <Product_open />
      </div>
    </>
  );
}
