import { createContext, useState } from "react";

export const itemContext = createContext(null);

export const ItemProvider = (props) => {
  const [items, setitems] = useState([]);
  return (
    <itemContext.Provider value={{ items, setitems }}>
      {props.children}
    </itemContext.Provider>
  );
};
