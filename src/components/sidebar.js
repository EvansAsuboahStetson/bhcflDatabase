import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ children, to }) => {
  return (
    <li>
      <Link to={to} className="text-black hover:text-blue-600 text-sm lg:text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
        {children}
      </Link>
    </li>
  );
};

const MenuSection = ({ title, children }) => {
  return (
    <div className="mt-4">
      <h6 className="text-blue-600 text-xs lg:text-sm font-bold px-4">
        {title}
      </h6>
      <ul className="mt-2">{children}</ul>
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
  <button onClick={toggleSidebar} className="fixed top-2 left-2 z-30 text-xl">
    ☰
  </button>
  {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={toggleSidebar}></div>}
  <nav
        className={`bg-white shadow-lg fixed top-0 transition-transform duration-300 ease-in-out ${isOpen ? "left-0" : "-left-full"} z-20 min-w-[60px] lg:min-w-[240px] py-4 lg:py-6 px-2 lg:px-4 font-[sans-serif] overflow-auto h-screen`}
      >
        <ul>
          <MenuItem to="/discovery">Dashboard</MenuItem>
        </ul>
        <MenuSection title="Members">
          <MenuItem to="/discovery">Member Profiles</MenuItem>
        </MenuSection>
        <MenuSection title="Community Information">
          <MenuItem to="/generateInformation">Generate Graph</MenuItem>
          <MenuItem to="/classes">Classes</MenuItem>
          <MenuItem to="/donations">Manage Donations</MenuItem>
          
        </MenuSection>
        <MenuSection title="Actions">
          <MenuItem to="/logout">Logout</MenuItem>
        </MenuSection>
      </nav>
    </div>
  );
};

export default Sidebar;
