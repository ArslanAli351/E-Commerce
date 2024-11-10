// https://www.figma.com/design/tFKYEH6oPfC1LVGhqisYgg/E-commerce?node-id=0-1&node-type=canvas&t=ddarVHE5rq0EQgcE-0

import Banner from "./components/banner";
import Navbare from "./components/Navbare";
// import HeroSection from "./components/HeroSection";
// import Product_Card from "./components/Product_Card";
// import Product_Category from "./components/Product_Category";
// import Best_Product from "./components/Best_Product";
// import Explore_Product from "./components/Explore_product";
// import Featured_Product from "./components/Featured_product";
// import Footer from "./components/Footer";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <>
      <Banner />
      <Navbare />

      <Routes>
        <Route path="/" index element={<Home />} />
      </Routes>



      
      {/* <HeroSection/>
      <Product_Card />
      <Product_Category />
      <Best_Product />
      <Explore_Product/>
      <Featured_Product />
      <Footer /> */}
    </>
  );
}

export default App;
