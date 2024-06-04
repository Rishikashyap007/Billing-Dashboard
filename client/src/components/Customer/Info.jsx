import React from 'react'
import './info.css'
function Info(props) {
  return (
    <div className="customer-info-cont">
    <h2> {props.name} </h2>
    <div className="">
         <button className={props.status === "Active" ? "active-button" : "inactive-button"}>
           {props.status}
         </button>
     </div>
  </div>
  )
}

export default Info

// function Info(props) {
//   return (
//     <div className="customer-info-cont">
//       <h2> {props.name} </h2>
//       <div className="customer-active-btn">
//         <button className={props.status === "inactive" ? "inactive-button" : "active-button"}>
//           {props.status}
//         </button>
//       </div>
//     </div>
//   );
// }
