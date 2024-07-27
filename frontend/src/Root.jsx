import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Modules from "./components/Modules";

const Root = () => {
  return (
    <div>
      {/* <Modules></Modules> */}
      <Outlet />
    </div>
  );
};

export default Root;
