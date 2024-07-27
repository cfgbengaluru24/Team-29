import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import FaqList from "./components/Faq/Faq";
import "./components/Faq/faq.css";
import Footer from "./components/Footer";
import Register from "../components/Register/Register";
import AdminDashboard from "../components/Admin/AdminDashboard";
import Hero from "./components/Hero/Hero";
import Root from "./Root";
import Sign from "../components/Sign/Sign";
import Sidebar from "./components/Side/Sidebar";
import Trainer from "../components/Trainer/Trainer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/home",
        element: <Hero />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/admin_dashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/login",
        element: <Sign />,
      },

      {
        path: "/side",
        element: <Trainer />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
