import { useSelector } from "react-redux";
import img from "../assets/not Found.png";
import img1 from "../assets/found.png";
export default function Not_Found() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <>
      <img
        src={img}
        alt="Not Found img"
        className={`text-center ${darkMode ? "hidden" : ""}`}
      />
      <img
        src={img1}
        alt="Not Found img"
        className={`text-center ${darkMode ? "" : "hidden"}`}
      />
    </>
  );
}
