// // import React, { useState, useEffect } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";
// // import Header from "../Header/Header";
// // import Sidebar from "../Sidebar/Sidebar";
// // import './CustomerDeatils.css'
// // import Itemselect from "../Items/ItemSelect/Itemselect";

// // const CustomerDetails = () => {
// //   const { id } = useParams();
// //   const [customer, setCustomer] = useState(null);
// //   useEffect(() => {
// //     axios
// //       .get(`http://localhost:8000/api/customers/${id}`)

// //       .then((res) => {
// //         setCustomer(res.data);
// //       })
// //       .catch((err) => console.log(err));
// //   }, [id]);

// //   const [showCustomerSelect, setShowCustomerSelect] = useState(false);

// //   const handleAddButtonClick = () => {
// //     setShowCustomerSelect(true);
// //   };

// //   const handleCloseCustomerSelect = () => {
// //     setShowCustomerSelect(false);
// //   };

// //   return (
// //     <>
// //       <div>
// //         <Header />
// //         <div className="Customer-home-cont-2">
// //           <Sidebar />
// //           <div className="customerdetails-wrapper">
// //           <h2> Billing </h2>
// //           <div className="customerDetails">
// //             <h2> Customer Details </h2>
// //             <div>
// //               {customer ? (
// //                 <div className="Customer-details-cont2">
// //                   <p>Name: {customer.name}</p>
// //                   <p>Status: {customer.status}</p>
// //                   <p>Status: {customer.panCard}</p>
// //                   <p>Status: {customer.gstNumber}</p>
// //                 </div>
// //               ) : (
// //                 <p>Loading...</p>
// //               )}
// //             </div>
// //           </div>
// //          <div className="customerDetails">
// //             <h2>Add items </h2>
// //          <div className="add-item-cont">
// //               <button className="add-button" onClick={handleAddButtonClick}>
// //               <span class="material-symbols-outlined">add_circle</span> Add
// //               </button>
              
// //               {showCustomerSelect && <Itemselect onClose={handleCloseCustomerSelect} />}
// //             </div>
// //          </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default CustomerDetails;
// // CustomerDetails.js
// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import Itemselect from "../Items/ItemSelect/Itemselect.jsx";
// import './CustomerDeatils.css'
// import { itemContext } from "../../Context.jsx";

// const CustomerDetails = () => {
//   const Productarray = useContext(itemContext)
//   const { id } = useParams();
//   let tp=0
//   const [customer, setCustomer] = useState(null);
//   const [showCustomerSelect, setShowCustomerSelect] = useState(false);
//   const [invoiceId, setInvoiceId] = useState(null);
//    console.log(Productarray.items);
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8000/api/customers/${id}`)
//       .then((res) => {
//         setCustomer(res.data);
//       })
//       .catch((err) => console.log(err));
//   }, [id]);

//   const handleAddButtonClick = () => {
//     setShowCustomerSelect(true);
//   };

//   const handleCloseCustomerSelect = () => {
//     setShowCustomerSelect(false);
//   };

//   Productarray.items.map(product => tp += product.price)

//   const genreateInvoice =()=>{
//     axios.post('http://localhost:8000/api/invoice',{
//       name:customer.name,
//       address:customer.address,
//       pan:customer.panCard,
//       gst:customer.gstNumber,
//       Iname:Productarray.items,
//       Iprice:tp,
//     }
//   ) .then(res => {
//     setInvoiceId(res.data.invoiceId);
//     console.log(invoiceId);
//   })
//   .catch(err=>console.log(err))
//   }
//   return (
//     <>
//       <div>
//         <Header />
//         <div className="Customer-home-cont-2">
//           <Sidebar />
//           <div className="customerdetails-wrapper">
//             <h2> Billing </h2>
//             <div className="customerDetails">
//               <div className=" flex justify-between items-center border-b-2">
//               <h2> Customer Details </h2>
//               {invoiceId?<p className="text-xl font-semibold"> Invoice :{invoiceId} </p>: ''}
//               </div>
//               <div>
//                 {customer ? (
//                   <div className="Customer-details-cont2">
//                     <p>Name: {customer.name}</p>
//                     <p>address: {customer.address}</p>
//                     <p>Pan Card: {customer.panCard}</p>
//                     <p>Gst number: {customer.gstNumber}</p>
//                   </div>
//                 ) : (
//                   <p>Loading...</p>
//                 )}
//               </div>
//             </div>
//             <div className="customerDetails"
//              >
//               <h2>Add items </h2>
//               {
//                   Productarray.items?  Productarray.items.map(product =>
//                   <div className="Customer-details-cont2">
//                     <p>Name: {product.name}</p>
//                     <p>price: {product.price}</p>
//                   </div>
//                   )
//                      :""
//                     }
//                {tp===0?"":<div>
//                <p>Total Price: {tp}</p>
//                 {
//                   invoiceId? " ": <button className="py-2 px-4 bg-black text-white"
//                   onClick={genreateInvoice}> create invoice </button>  
//                 }
//                 </div>}  
               
//               <div className="add-item-cont" id='itemsDetails'>
//                 <button className="add-button" onClick={handleAddButtonClick}>
//                   <span className="material-symbols-outlined">add_circle</span> Add
//                 </button>
//                 {showCustomerSelect && <Itemselect onClose={handleCloseCustomerSelect} />}                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default CustomerDetails;


import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Itemselect from "../Items/ItemSelect/Itemselect.jsx";
import './CustomerDeatils.css';
import { itemContext } from "../../Context.jsx";

const CustomerDetails = () => {
  const Productarray = useContext(itemContext);
  const { id } = useParams();
  let tp = 0;
  const [customer, setCustomer] = useState(null);
  const [showCustomerSelect, setShowCustomerSelect] = useState(false);
  const [invoiceId, setInvoiceId] = useState(null);
  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/customers/${id}`)
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddButtonClick = () => {
    setShowCustomerSelect(true);
  };

  const handleCloseCustomerSelect = () => {
    setShowCustomerSelect(false);
  };

  Productarray.items.map(product => tp += product.price);

  const generateInvoice = () => {
    axios.post('http://localhost:8000/api/invoice', {
      name: customer.name,
      address: customer.address,
      pan: customer.panCard,
      gst: customer.gstNumber,
      Iname: Productarray.items,
      Iprice: tp,
    })
    .then(res => {
      setInvoiceId(res.data.invoiceId);
      console.log(invoiceId);
    })
    .catch(err => console.log(err));
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4">Billing</h2>
            <div className="bg-white p-6 rounded shadow-sm mb-6">
              <div className="flex justify-between items-center border-b-2 pb-2 mb-4">
                <h2 className="text-xl font-semibold">Customer Details</h2>
                {invoiceId && <p className="text-lg font-semibold">Invoice: {invoiceId}</p>}
              </div>
              <div>
                {customer ? (
                  <div className="space-y-2">
                    <p><span className="font-semibold">Name:</span> {customer.name}</p>
                    <p><span className="font-semibold">Address:</span> {customer.address}</p>
                    <p><span className="font-semibold">Pan Card:</span> {customer.panCard}</p>
                    <p><span className="font-semibold">GST Number:</span> {customer.gstNumber}</p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Add Items</h2>
              {Productarray.items && Productarray.items.length > 0 && (
                <div className="space-y-2 mb-4">
                  {Productarray.items.map((product, index) => (
                    <div key={index} className="flex justify-between">
                      <p>{product.name}</p>
                      <p>{product.price}</p>
                    </div>
                  ))}
                  <div className="font-semibold">
                    <p>Total Price: {tp}</p>
                  </div>
                  {!invoiceId && (
                    <button 
                      className="mt-4 py-2 px-4 bg-black text-white rounded" 
                      onClick={generateInvoice}
                    >
                      Create Invoice
                    </button>
                  )}
                </div>
              )}
              <div className="mt-4">
                {
                  invoiceId?"":
                  <button 
                  className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 flex items-center" 
                  onClick={handleAddButtonClick}
                >
                  <span className="material-symbols-outlined ">add_circle</span> Add
                </button>
                }
                {showCustomerSelect && <Itemselect onClose={handleCloseCustomerSelect} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
