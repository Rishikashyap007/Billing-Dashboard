import React from 'react'

function Info(props) {
  return (
    <div className="customer-info-cont">
    <h2> {props.name} </h2>
    <div className="customer-active-btn">
        <button> {props.status} </button>
    </div>
  </div>
  )
}

export default Info