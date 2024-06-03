import React from "react";
import "./CustomerInfo.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import Info from "./Info.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
function CustomerInfo() {
  const [Data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getcustomers")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="Customer-home-cont">
        <Sidebar />

        <div className="Customer-cont">
          <div className="customer-header">
            <h1> Customers </h1>
            <Link to={"/customerform"} className="link-style">
              <button> + Add </button>
            </Link>
          </div>
          <div className="Customer-details-cont">
            {Data.data
              ? Data.data.data.map((customer) => (
                  <Info name={customer.name} status={customer.status} />
                ))
              : "no data"}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerInfo;
