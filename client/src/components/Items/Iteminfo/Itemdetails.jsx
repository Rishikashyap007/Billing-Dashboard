import React from 'react'
// import './itemD.css'

function Itemdetails(props) {
  return (
    <div className="item-info-cont">
    <h2> {props.name} </h2>
    <div className="">
         <button className={props.status === "Active" ? "active-button" : "inactive-button"}>
           {props.status}
         </button>
     </div>
  </div>
  )
}
export default Itemdetails;