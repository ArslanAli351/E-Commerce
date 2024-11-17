// https://www.figma.com/design/tFKYEH6oPfC1LVGhqisYgg/E-commerce?node-id=0-1&node-type=canvas&t=ddarVHE5rq0EQgcE-0

import Banner from "./components/banner";
import Navbare from "./components/Navbare";

import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Not_Found from "./components/Not_Found.jsx";
function App() {
  const isLoggedIn = true;
  return (
    <>
      <Banner />
      <Navbare />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/not-found" element={<Not_Found />} />

        {isLoggedIn ? (
          <>
            <Route path="/signUp" index element={<SignUp />} />

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
        {/* <Route path="/about" index element={<About />} />
        <Route path="/contact" index element={<Contact />} /> */}
        {/* <Route path="/login" index element={<Login />} /> */}
      </Routes>
      
    </>
  );
}

export default App;
