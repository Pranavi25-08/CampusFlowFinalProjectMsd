import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import logo from "../assets/logo.png";

function Sidebar() {
  const location = useLocation();

  const links = [
    { path: "/", name: "Dashboard" },
    { path: "/events", name: "Events" },
    { path: "/placements", name: "Placements" },
    { path: "/forum", name: "Forum" },
    { path: "/profile", name: "Profile" },
    { path: "/about", name: "About" },
  ];

  return (
    <div className="sidebar">
      <img src={logo} alt="CampusFlow Logo" />
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={location.pathname === link.path ? "active-link" : ""}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
