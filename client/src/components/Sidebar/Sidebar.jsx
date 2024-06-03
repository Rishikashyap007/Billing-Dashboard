import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-cont">
        <Link to={"/dashboard"} className="link-style">
          <div className="sidebar-menus Active">
            <span class="material-symbols-outlined">team_dashboard</span>
            <p> Dashboard</p>
          </div>
        </Link>
        <Link to={"/"} className="link-style">
          <div className="sidebar-menus Active ">
            <span class="material-symbols-outlined">receipt_long</span>
            <p> Master </p>
          </div>
        </Link>
        <Link to={"/billing"} className="link-style">
          <div className="sidebar-menus Active">
            <span class="material-symbols-outlined">team_dashboard</span>
            <p> Billing </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
