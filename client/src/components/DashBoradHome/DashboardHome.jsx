
// import React, { useEffect, useState } from "react";
// import "./DashboardHome.css";
// import Header from "../Header/Header";
// import Sidebar from "../Sidebar/Sidebar";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const DashboardHome = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/dashboard")
//       .then((res) => {
//         console.log(res);
//         setUsers(res.data); // Set users to the response data array
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(users);

//   return (
//     <>
//       <div>
//         <Header />
//         <div className="flex gap-2">
//           <Sidebar />
//            <div className="flex flex-col gap-4 px-4 py-4">

//              <h1 className="text-2xl "> DashBoard </h1>
//               <div className="flex border-2 md:w-56 ">
//               <input type="text"
//                placeholder="Enter InvoiceId..."
//                className="py-2 px-4 "
//              />  
//              <button className="py-2 px-4 bg-black text-white"> Search </button>
//               </div>
//                 <div className=" flex flex-col gap-4 py-2">
//                 {users.length > 0
//             ? users.map((user) => (
//                 <div key={user.id} className="flex justify-between gap-4 w-[60vw] border-2 py-2 px-4">
//                   <p> invoiceID : {user.invoiceId}</p>
//                   <p> {user.Cname} </p>
//                   <ul>
//           {user.Iname.map((item, index) => (
//             <li key={index}>
//               {item.name}: {item.price}
//             </li>
//           ))}
//         </ul>
//          <Link to={`/dashboard/${user._id}`}>
//          <button className="py-1 px-4 bg-blue-500 text-white"> View </button>
//          </Link>
//                 </div>
//               ))
//             : "No data"}
//                 </div>
//            </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DashboardHome;


import React, { useEffect, useState } from "react";
import "./DashboardHome.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import axios from "axios";

const DashboardHome = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/dashboard")
      .then((res) => {
        console.log(res);
        setUsers(res.data); // Set users to the response data array
        setFilteredUsers(res.data); // Initially, filteredUsers is the same as users
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = () => {
    const filtered = users.filter((user) =>
      user.invoiceId.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <>
      <div>
        <Header />
        <div className="flex gap-2">
          <Sidebar />
          <div className="flex flex-col gap-4 px-4 py-4 w-full">
            <h1 className="text-2xl">Dashboard</h1>
            <div className="flex border-2 md:w-56">
              <input
                type="text"
                placeholder="Enter InvoiceId..."
                className="py-2 px-4"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="py-2 px-4 bg-black text-white"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
            <div className="flex flex-col gap-4 py-2">
              {filteredUsers.length > 0
                ? filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      className="flex flex-col md:flex-row justify-between gap-4 w-full md:w-[60vw] border-2 py-2 px-4"
                    >
                      <p>Invoice ID: {user.invoiceId}</p>
                      <p>{user.Cname}</p>
                      <ul>
                        {user.Iname.map((item, index) => (
                          <li key={index}>
                            {item.name}: {item.price}
                          </li>
                        ))}
                      </ul>
                      <Link to={`/dashboard/${user._id}`}>
                        <button className="py-1 px-4 bg-blue-500 text-white">
                          View
                        </button>
                      </Link>
                    </div>
                  ))
                : "No data"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
