import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { FaRobot } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { FaQuestionCircle } from "react-icons/fa";
import "./Sidebar.css";

const sidebarData = [
  { title: "Dashboard", icon: <AiFillHome />, key: "dashboard" },
  { title: "AI Assistance", icon: <FaRobot />, key: "aiAssistance" },
  { title: "Trainee", icon: <IoMdPeople />, key: "trainee" },
  { title: "FAQs", icon: <FaQuestionCircle />, key: "faqs" },
];

const Sidebar = ({ onSelect }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiOutlineClose />
            </Link>
          </li>
          {sidebarData.map((item, index) => (
            <li
              key={index}
              className="nav-text"
              onClick={() => onSelect(item.key)}
            >
              {item.icon}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default Sidebar;
