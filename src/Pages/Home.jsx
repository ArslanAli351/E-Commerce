import Navbare from "./components/Navbare";
import HeroSection from "../components/HeroSection";
import Product_Card from "../components/Product_Card";
import Product_Category from "../components/Product_Category";
import Best_Product from "../components/Best_Product";
import Explore_Product from "../components/Explore_product";
import Featured_Product from "../components/Featured_product";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <HeroSection />
      <Product_Card />
      <Product_Category />
      <Best_Product />
      <Explore_Product />
      <Featured_Product />
      <Footer />
    </>
  );
}
