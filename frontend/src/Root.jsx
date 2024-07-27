import { Outlet } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Hero from "./components/Hero/Hero";
import Modules from "./components/Modules";
import BankingSolutions from "./components/BankingSolutions/BankingSolutions";

const Root = () => {
  return (
    <div>
      <Navbar />
      <BankingSolutions></BankingSolutions>
      <Outlet />  
    </div>
  );
};

export default Root;
