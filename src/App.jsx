// https://www.figma.com/design/tFKYEH6oPfC1LVGhqisYgg/E-commerce?node-id=0-1&node-type=canvas&t=ddarVHE5rq0EQgcE-0
// https://www.youtube.com/watch?v=vo-qY8VHihM
import Banner from "./components/banner";
import Navbare from "./components/Navbare";

import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Not_Found from "./components/Not_Found.jsx";
import Product_API from "./Pages/Product_API.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import { useSelector } from "react-redux";
import AddNewProduct from "./Pages/AddNewProduct.jsx";
function App() {
  const isLoggedIn = true;
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    < >
    <div className={` ${darkMode?"bg-dark":""}`}>
      <Banner />
      <Navbare />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/not-found" element={<Not_Found />} />
        <Route path="/Product-API" element={<Product_API/>} />
        <Route path="/Product/:id" element={<ProductDetail/>} />
        <Route path="/Product/add" element={<AddNewProduct/>} />



        {isLoggedIn ? (
          <>
            <Route path="/signUp" index element={<SignUp />} />

            {/* <Route path="/Product_open" index element={<Product_open />} /> */}

            <Route path="/contact" index element={<Contact />} />
            <Route path="/about" index element={<About />} />
            <Route
              path="/login"
              index
              element={<Navigate to="/" replace={true} />}
            />
            <Route
              path="*"
              index
              element={<Navigate to="/not-found" replace={true} />}
            />
          </>
        ) : (
          <>
            {" "}
            <Route path="/login" index element={<Login />} />
            <Route
              path="*"
              index
              element={<Navigate to="/login" replace={true} />}
            />
          </>
        )}
      
      </Routes>
      </div>
    </>
  );
}

export default App;


