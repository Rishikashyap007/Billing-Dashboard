// import axios from 'axios';
// import React, { useEffect,useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Header from '../Header/Header';
// import Sidebar from '../Sidebar/Sidebar';

// function DashboardInvoice() {
//   const {id} = useParams()
//   const [bill,setBill] = useState(null)
//   console.log(id);

//   useEffect(()=>{
//     axios.get(`https://billing-dashboard.onrender.com/api/dashboard/${id}`)
//     .then(res=> {
//       console.log(res.data)
//       setBill(res)})
//     .catch(err=>console.log(err))
//   },[id])
//   console.log(bill.data);
//   return (
//     <>
//        <Header/>
//        <div>
//          <Sidebar/>
//           <div>
//               {
//                 bill.data?
//                  (bill.data).map(x=>(<div>
//                     <h1> Customer Deatils </h1>
//                     <p> {x.Cname}</p>
//                  </div>))
//                 :"no data"
//               }
//           </div>
//        </div>
//     </>
//   )
// }

// export default DashboardInvoice

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function DashboardInvoice() {
  const { id } = useParams();
  const [bill, setBill] = useState(null);

  useEffect(() => {
    axios
      .get(`https://billing-dashboard.onrender.com/api/dashboard/${id}`)
      .then((res) => {
        console.log(res.data);
        setBill(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Header />
      <div className="flex gap-2">
        <Sidebar />
        <div className="flex flex-col gap-3 py-4 px-4">
          <h1 className="text-2xl font-bold "> Invoice Details </h1>
          {bill ? (
            <>
              <div className="flex text-xl flex-col gap-4 border-2 p-4">
                <div className="flex w-[60vw] justify-between border-b-2">
                  <h1 className="text-2xl font-medium ">Customer Details</h1>
                  <p className="text-xl font-medium">
                    {" "}
                    Invoice ID : {bill.invoiceId}
                  </p>
                </div>
                <p>Name: {bill.Cname}</p>
                <p>address: {bill.address}</p>
                <p>Pan Card: {bill.pan}</p>
                <p>Gst number: {bill.gst}</p>
              </div>
              <div className="border-2 p-4">
                <h1 className="text-2xl font-semibold"> Items </h1>

                <div className=" flex flex-col gap-3 text-xl">
                  <ul>
                    {bill.Iname.map((item, index) => (
                      <li key={index}>
                        {item.name} : {item.price}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xl font-medium"> Total : { bill.IPrice}</p>
              </div>
            </>
          ) : (
            <p>No data</p>
          )}
        </div>
      </div>
    </>
  );
}

export default DashboardInvoice;
