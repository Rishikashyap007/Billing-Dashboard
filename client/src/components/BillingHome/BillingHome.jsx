import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import CustomerSelect from "./CustomerSelect.jsx";
import "./BillingHome.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Billinghome() {
  const [showCustomerSelect, setShowCustomerSelect] = useState(false);

  const handleAddButtonClick = () => {
    setShowCustomerSelect(true);
  };

  const handleCloseCustomerSelect = () => {
    setShowCustomerSelect(false);
  };
  return (
    <>
      <Header />
      <div className="Billing-home-cont">
        <Sidebar />

        <div className="Billing-cont">
          <h1> Billing </h1>
          <div className="Billing-details-cont">
            <p>Customer details</p>
            <div className="add-item-cont">
              <button className="add-button" onClick={handleAddButtonClick}>
              <span class="material-symbols-outlined">add_circle</span> Add
              </button>
              {showCustomerSelect && (
                <CustomerSelect onClose={handleCloseCustomerSelect} />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billinghome;

// import React, { useState } from 'react';
// import CustomerSelect from './CustomerSelect';
// import './BillingHome.css';

// const BillingHome = () => {
//   const [showCustomerSelect, setShowCustomerSelect] = useState(false);

//   const handleAddButtonClick = () => {
//     setShowCustomerSelect(true);
//   };

//   const handleCloseCustomerSelect = () => {
//     setShowCustomerSelect(false);
//   };

//   return (
//     <div className="billing-home">
//       <h2>Billing Home</h2>
//       <div className="billing-info">
//         <span>15</span>
//         <span>+</span>
//         <span>4</span>
//       </div>
//   <button className="add-button" onClick={handleAddButtonClick}>
//     Add
//   </button>
//   {showCustomerSelect && (
//     <CustomerSelect onClose={handleCloseCustomerSelect} />
//   )}
//     </div>
//   );
// };

// export default BillingHome;
