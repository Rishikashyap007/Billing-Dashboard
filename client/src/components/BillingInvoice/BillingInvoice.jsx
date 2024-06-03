// import React from 'react';
// import './BillingInvoice.css';

// const BillingInvoice = ({ customer, items }) => {
//   const totalAmount = items.reduce((total, item) => total + item.amount, 0);

//   return (
//     <div className="billing-invoice ">
//       <div className="customer-details-invoice ">
//         <h2>Customer Details</h2>
//         <p>Name: {customer.name}</p>
//         <p>Address: {customer.address}</p>
//         <p>Pan Card: {customer.panCard}</p>
//         <p>GST Num: {customer.gstNum}</p>
//         <p>Invoice ID: INVC224830</p>
//       </div>

//       <div className="items-list-invoice ">
//         <h2>Items</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Amount</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.quantity}</td>
//                 <td>{item.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//           <tfoot>
//             <tr>
//               <td colSpan="2">Total</td>
//               <td>{totalAmount}</td>
//             </tr>
//           </tfoot>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BillingInvoice;

import React from 'react';
import './BillingInvoice.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';

const BillingInvoice = () => {
  const customer = {
    name: 'Gupta Enterprize Pvt. Ltd.',
    address: 'Gurgaon, Haryana',
    panCard: 'BCNSG1234H',
    gstNum: '06BCNSG1234H1Z5',
  };

  const items = [
    { name: 'Laptop', quantity: 1, amount: 85000 },
    { name: 'LED Monitor', quantity: 2, amount: 20000 },
  ];

  const totalAmount = items.reduce((total, item) => total + item.amount * item.quantity, 0);

  return (
    <>
    <Header />
       <div className="billing-invoice"> 
        <Sidebar />
      <div className="containerofitems">
      <div className="customer-details-invoice">
        <h2>Customer Details</h2>
        <p>Name: {customer.name}</p>
        <p>Address: {customer.address}</p>
        <p>Pan Card: {customer.panCard}</p>
        <p>GST Num: {customer.gstNum}</p>
        <p>Invoice ID: INVC224830</p>
      </div>

      <div className="items-list-invoice">
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
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.amount * item.quantity}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="2">Total</td>
              <td>{totalAmount}</td>
            </tr>
          </tfoot>
        </table>
      </div>
      </div>
    </div>
     </>
  );
};

export default BillingInvoice;