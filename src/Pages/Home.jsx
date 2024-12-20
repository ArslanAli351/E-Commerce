import HeroSection from "../components/HeroSection";
import Product_Card from "../components/Product_Card";
import Product_Category from "../components/Product_Category";
import Best_Product from "../components/Best_Product";
import Explore_Product from "../components/Explore_product";
import Featured_Product from "../components/Featured_product";
import Footer from "../components/Footer";
import All_product from "../components/All_products";
import Quantity from "../components/Quantity";
import Slider from "../components/Slider.jsx";
import SellingProduct from "../components/Selling Products.jsx";
import ProductDetail from "../components/ProductDetail.jsx";
import Flash_Sales from "../components/hooks/Flash Sales.jsx";
// import MoreProducts from "../components/MoreProducts.jsx";
export default function Home() {
  return (
    <>
      <div className="container-x">
        <HeroSection />
        <Slider />
        {/* <MoreProducts />  */}
        {/* <Product_Card /> */}
        <Flash_Sales />
        <Product_Category />
        <Best_Product />
        <Explore_Product />
        <Featured_Product />
        <Footer />
        <All_product />
        <SellingProduct/>
        <Quantity />
       
      </div>
    </>
  );
}
