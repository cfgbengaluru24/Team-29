import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";

const Root = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Root;
