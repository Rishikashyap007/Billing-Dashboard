
// import React from 'react'

// function Billingitem() {
//   return (
//     <div>Billingitem</div>
//   )
// }

// export default Billingitem


import React, { useState } from 'react';
import './Billingitem.css';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';

const BillingPage = () => {
  const [items, setItems] = useState([{ name: 'Laptop', quantity: 1, price: 85000 }]);
  const [total, setTotal] = useState(85000);

  const handleQuantityChange = (itemName, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.name === itemName) {
        const newTotal = newQuantity * item.price;
        setTotal((prevTotal) => prevTotal - item.price * item.quantity + newTotal);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <>
      <Header/>
    <div className="billing-page">
        
     <Sidebar />
        <div className='Containerofcustomer'>
        <div className="customer-details">
        <h2>Customer Details</h2>
        <p>Name: Gupta Enterprize Pvt. Ltd.</p>
        <p>Address: Gurgaon, Haryana</p>
        <p>Pan Card: BCNSG1234H</p>
        <p>GST Num: 06BCNSG1234H1Z5</p>
      </div>

      <div className="items-list">
        <h2>Items</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>
                  <div className="quantity-control">
                    <button onClick={() => handleQuantityChange(item.name, item.quantity - 1)} disabled={item.quantity === 1}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.name, item.quantity + 1)}>+</button>
                  </div>
                </td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="actions">
        <button className="cancel-btn">Cancel</button>
        <Link to={'/billinginvoice'}>
        <button className="create-btn">Create</button>
        </Link>
      </div>
        </div>
    </div>
    </>
  );
};

export default BillingPage;