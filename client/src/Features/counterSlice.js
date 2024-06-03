// reducers/counterReducer.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
  };
  
  const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incCount: (state) => {
            state.count += 1;
        },
        decCount: (state) => {
            state.count -= 1;
        },
        
    }
});

export const { incCount, decCount } = counterSlice.actions;
export default counterSlice.reducer;

  