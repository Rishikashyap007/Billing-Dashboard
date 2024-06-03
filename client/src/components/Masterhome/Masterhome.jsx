import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./Masterhome.css";
import { Link } from "react-router-dom";

function Masterhome() {
  return (
    <>
      <Header />
      <div className="home-cont">
        <Sidebar />

        <div className="master-cont">
          <h1> Master </h1>
          <div className="master-details-cont">
            <Link to={"/customerinfo"} className="link-style">
              <div className="customer-cont">
                <h2> Customer </h2>
                <p> Read or create customer data</p>
              </div>
            </Link>
            <Link to={"/iteminfo"} className="link-style">
              <div className="item-container">
                <h2> Items </h2>
                <p> Read or create items data</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Masterhome;
