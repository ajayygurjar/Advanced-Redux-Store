import { configureStore } from "@reduxjs/toolkit";
import cartDisplayReducer from './cartDisplay-reducer' 
import cartReducer from './cart-reducer';




const store=configureStore({
    reducer:{cartDisplay:cartDisplayReducer,cart:cartReducer,}
})
export default store;