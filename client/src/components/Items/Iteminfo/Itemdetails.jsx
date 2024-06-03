import React from 'react'

function Itemdetails(props) {
  return (
    <div className="item-info-cont">
    <h2> {props.name} </h2>
    <div className="active-btn">
        <button> Active </button>
    </div>
  </div>
  )
}
export default Itemdetails;