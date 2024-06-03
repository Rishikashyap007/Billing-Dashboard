import React, { useState } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import "./CustomerForm.css";
import axios from "axios";

function CustomerForm() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerAddress: "",
    customerPanCardNumber: "",
    customerGstNumber: "",
    customerStatus: "Active",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/customer',formData)
    .then(response=>console.log(response))
    .catch(err=>console.log(err))
     };

  return (
    <>
      <Header />

      <div className="customerForm-cont">
        <Sidebar />
        <div className="customerForm-wrapper">
          <h1> Add new Customer </h1>

          <form onSubmit={handleSubmit} className="add-customer-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customerName">Customer Name</label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerAddress">Customer Address</label>
                <input
                  type="text"
                  id="customerAddress"
                  name="customerAddress"
                  value={formData.customerAddress}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customerPanCardNumber">
                  Customer Pan Card Number
                </label>
                <input
                  type="text"
                  id="customerPanCardNumber"
                  name="customerPanCardNumber"
                  value={formData.customerPanCardNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerGstNumber">Customer GST Number</label>
                <input
                  type="text"
                  id="customerGstNumber"
                  name="customerGstNumber"
                  value={formData.customerGstNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="customerStatus">Customer Status</label>
                <select
                  id="customerStatus"
                  name="customerStatus"
                  value={formData.customerStatus}
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

export default CustomerForm;
