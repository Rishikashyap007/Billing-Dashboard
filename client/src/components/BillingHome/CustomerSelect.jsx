// import React from "react";
// import { Link } from "react-router-dom";
// import "./CustomerSelect.css";

// const CustomerSelect = ({ onClose }) => {
//   const handleCustomerSelect = (customer) => {
//     console.log(`Selected customer: ${customer}`);
//     onClose();
//   };

//   return (
//     <div className="customer-select-modal">
//       <div className="modal-content">
//         <h3>Select Customer</h3>
//         <ul className="select-customer-cont">
//           <li
//             onClick={() => handleCustomerSelect("Gupta Enterprise Pvt. Ltd.")}
//           >
//             <div className="customer-info-container">
//               Gupta Enterprise Pvt. Ltd.
//               <div className="select-active-btn">
//                 <button> Active </button>
//               </div>
//             </div>
//           </li>
//           <li
//             onClick={() => handleCustomerSelect("Mahesh Industries Pvt. Ltd.")}
//           >
//             <span className="customer-info-container">
//               Mahesh Industries Pvt. Ltd.
//               <div className="select-active-btn">
//                 <button> Active </button>
//               </div>
//             </span>
//           </li>
//           <li
//             onClick={() => handleCustomerSelect("Omkar and Brothers Pvt. Ltd.")}
//           >
//             <span className="customer-info-container">
//               Bhuwan Infotech.
//               <div className="select-active-btn">
//                 <button> Active </button>
//               </div>
//             </span>
//           </li>
//           <li
//             onClick={() => handleCustomerSelect("Omkar and Brothers Pvt. Ltd.")}
//           >
//             <span className="customer-info-container">
//               Swastik Software Pvt. Ltd.
//               <div className="select-active-btn">
//                 <button> Active </button>
//               </div>
//             </span>
//           </li>
//           <li
//             onClick={() => handleCustomerSelect("Omkar and Brothers Pvt. Ltd.")}
//           >
//             <span className="customer-info-container">
//               Omkar and Brothers Pvt. Ltd.
//               <div className="select-active-btn">
//                 <button> Active </button>
//               </div>
//             </span>
//           </li>
//         </ul>

//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default CustomerSelect;

import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./CustomerSelect.css";
import axios from 'axios'

import Info from '../Customer/Info'
const CustomerSelect = ({ onClose }) => {
  const [Data, setData] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getcustomers")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  // const handleCustomerSelect = (index) => {
  //   console.log(`Selected customer: ${customers[index].name}`);
  //   onClose();
  // };


  return (
    <div className="customer-select-modal">
      <div className="modal-content">
        <h3>Select Customer</h3>
        
        <div className="Customer-details-cont">
          
           {Data.data
              ? Data.data.data.map((customer) => (
                  <Link to={`/customerdetails/${customer._id}`} className="link-style">
                     <Info name={customer.name} status={customer.status} />
                  </Link>
                ))
              : "no data"}
           
          </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CustomerSelect;
