// import React, { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import "./CustomerSelect.css";
// import axios from "axios";
// import ItemData from '../ItemData'

// const Itemselect = ({ onClose }) => {
//   const [Data, setData] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/getitems")
//       .then((res) => setData(res))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="customer-select-modal">
//       <div className="modal-content">
//         <h3>Select items</h3>

//         {/* <div className="Customer-details-cont">
//           {Data.data
//             ? Data.data.items.map((e) => <ItemData name={e.itemName} />)
//             : " Nodata"}
//         </div> */}

//         <div className="customer-select-modal">
//           <div className="modal-content">
//             <h3>Select items</h3>
//             <div className="Customer-details-cont">
//               {Data.data && Data.data.items
//                 ? Data.data.items.map((e, index) => (
//                     <ItemData key={index} name={e.itemName} />
//                   ))
//                 : "No data"}
//             </div>
//             <button onClick={onClose}>Close</button>
//           </div>
//         </div>

//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default Itemselect;

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ItemData from "../ItemData";
import { itemContext } from "../../../Context";
const Itemselect = ({ onClose }) => {
  const [Data, setData] = useState({});
  const productdetails = useContext(itemContext)



  const handleclick = ()=>{ 
     console.log(productdetails);
     document.getElementById('itemsDetails').style.display="none";
     onClose()
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/getitems")
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="customer-select-modal">
      <div className="modal-content">
        <h3>Select items</h3>
        <div className="Customer-details-cont">
          {Data.data && Data.data.items ? (
            Data.data.items.map((e, index) => (
              <ItemData key={index} name={e.itemName} price={e.customerSellingPrice} />
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
        <div className="select-btns">
          <button className="btn1" onClick={onClose}>
            Close
          </button>

          <button 
          onClick={handleclick}
          className="btn2"> Additem </button>
        </div>
      </div>
    </div>
  );
};

export default Itemselect;
