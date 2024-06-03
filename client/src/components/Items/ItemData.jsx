

// // export default Item

// import './ItemData.css'
// import {useDispatch,useSelector} from 'react-redux'

// import { incCount ,decCount } from '../../Features/counterSlice';

// function Item(props) {
//   // const [count, setCount] = useState(0);
//   const dispatch = useDispatch()
//   const count = useSelector(state => state.counter.count);

//   return (
//     <div className="item-info-cont2">
//       <h2>{props.name}</h2>
//       <div className="item-add-btn">
//         <button onClick={()=>dispatch(decCount())}>-</button>
//         <span>{count}</span>
//         <button onClick={()=>dispatch(incCount())}>+</button>
//       </div>
//     </div>
//   );
// }

// export default Item;


import React, { useContext, useState } from 'react';
import './ItemData.css'
import { itemContext } from '../../Context.jsx';

function Item(props) {
  const [count, setCount] = useState(0);
  const product= useContext(itemContext)
  console.log(product);
  const handleAddClick = () => {
    setCount(count + 1);
    product.setitems([...product.items,props])
    
  };
  console.log(product.items);
  const handleSubtractClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="item-info-cont2">
      <h2>{props.name}</h2>
      <div className="item-add-btn">
        <button onClick={handleSubtractClick}>-</button>
        <span>{count}</span>
        <button onClick={handleAddClick}>+</button>
      </div>
    </div>
  );
}

export default Item;


// import './ItemData.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { incCount, decCount } from '../../Features/counterSlice';

// function Item(props) {
//   const dispatch = useDispatch();

//   // Get the count for this particular item using its unique identifier
//   const count = useSelector(state => state.counter.counts[props.id] || 0);

//   return (
//     <div className="item-info-cont2">
//       <h2>{props.name}</h2>
//       <div className="item-add-btn">
//         <button onClick={() => dispatch(decCount(props.id))}>-</button>
//         <span>{count}</span>
//         <button onClick={() => dispatch(incCount(props.id))}>+</button>
//       </div>
//     </div>
//   );
// }

// export default Item;
