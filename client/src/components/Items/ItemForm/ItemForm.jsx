// import React, { useState } from 'react';
// import './ItemForm.css'
// import Header from '../../Header/Header';
// import Sidebar from '../../Sidebar/Sidebar';

// function ItemForm() {
//     const [formData, setFormData] = useState({
//         itemName: '',
//         customerSellingprice:'',
//         customerStatus: 'Active',
//     });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission logic here
//         console.log(formData);
//     };

//     return (
//         <>
//             <Header />

//             <div className="itemForm-cont">
//                 <Sidebar />
//                 <div className="itemForm-wrapper">
//                     <h1> Add new Item </h1>

//                     <form onSubmit={handleSubmit} className="add-customer-form">
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="itemName">Item Name</label>
//                                 <input
//                                     type="text"
//                                     id="itemName"
//                                     name="itemName"
//                                     value={formData.itemName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="form-group">
//                                 <label htmlFor="customerSellingPrice">Customer Selling Price</label>
//                                 <input
//                                     type="text"
//                                     id="customerSellingPrice"
//                                     name="customerSellingPrice"
//                                     value={formData.customerSellingPrice}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                         <div className="form-row">
//                             <div className="form-group">
//                                 <label htmlFor="customerStatus">Customer Status</label>
//                                 <select
//                                     id="customerStatus"
//                                     name="customerStatus"
//                                     value={formData.customerStatus}
//                                     onChange={handleChange}
//                                 >
//                                     <option value="Active">Active</option>
//                                     <option value="Inactive">Inactive</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="form-actions">
//                             <button type="button" className="cancel-btn">
//                                 Cancel
//                             </button>
//                             <button type="submit" className="create-btn">
//                                 Create
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default ItemForm;

import React, { useState } from "react";
import "./ItemForm.css";
import Header from "../../Header/Header";
import Sidebar from "../../Sidebar/Sidebar";
import axios from "axios";

function ItemForm() {
  const [formData, setFormData] = useState({
    itemName: "",
    customerSellingPrice: "",
    itemStatus: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/items", formData)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    console.log(formData);
  };

  return (
    <>
      <Header />

      <div className="itemForm-cont">
        <Sidebar />
        <div className="itemForm-wrapper">
          <h1> Add New Item </h1>

          <form onSubmit={handleSubmit} className="add-item-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="itemName">Item Name</label>
                <input
                  type="text"
                  id="itemName"
                  name="itemName"
                  value={formData.itemName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerSellingPrice">
                  Customer Selling Price
                </label>
                <input
                  type="text"
                  id="customerSellingPrice"
                  name="customerSellingPrice"
                  value={formData.customerSellingPrice}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="itemStatus">Item Status</label>
                <select
                  id="itemStatus"
                  name="itemStatus"
                  value={formData.itemStatus}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="cancel-btn">
                Cancel
              </button>
              <button type="submit" className="create-btn">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ItemForm;
