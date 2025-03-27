import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = { isCartDisplay: false, };
 
 const cartDisplaySlice = createSlice({
 	name: "cartDisplay",
 	initialState,
 	reducers: {
 		cartDisplay: (state) => {
 			state.isCartDisplay = !state.isCartDisplay;
            
 		},
 	},
 });
 
 export const cartDisplayActions = cartDisplaySlice.actions;
 export default cartDisplaySlice.reducer;