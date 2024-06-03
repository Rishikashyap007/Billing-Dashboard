import React from "react";
import "./Iteminfo.css";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
// import ItemData from "../ItemData";
import Itemdetails from './Itemdetails'
import { useState, useEffect } from "react";
import axios from "axios";

function ItemInfo() {
  const [Data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getitems")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <div className="item-home-cont">
        <Sidebar />

        <div className="item-cont">
          <div className="item-header">
            <h1> Items </h1>
            <Link to={"/itemform"} className="link-style">
              <button> + Add </button>
            </Link>
          </div>
          <div className="item-details-cont">
            {Data.data ? Data.data.items.map((e) => <Itemdetails name={e.itemName} />) : " Nodata"}
            
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemInfo;
