import { createSlice } from "@reduxjs/toolkit";
 
 const initialState = { isCartDisplay: false,notification:null, };
 
 const cartDisplaySlice = createSlice({
 	name: "cartDisplay",
 	initialState,
 	reducers: {
 		cartDisplay: (state) => {
 			state.isCartDisplay = !state.isCartDisplay;
            
 		},
		showNotification(state,action){
			state.notification={
				status:action.payload.status,
				title:action.payload.title,
				message:action.payload.message,
			}
		}
 	},
 });
 
 export const cartDisplayActions = cartDisplaySlice.actions;
 export default cartDisplaySlice.reducer;