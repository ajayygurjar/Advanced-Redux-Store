/* eslint-disable no-unused-vars */
import { cartDisplayActions } from "./cartDisplay-reducer";

import { cartActions } from "./cart-reducer";






export const fetchCartData=()=>{
    return async (dispatch)=>{
        const fetchData= async ()=>{
         const response=await fetch(`https://react-http-ffc12-default-rtdb.firebaseio.com//cart.json`)
         if(!response.ok){
            throw new Error('could not fetch cart data')
         }
         const data=await response.json();

         return data;
        }
        try {
            const cartData=await fetchData();
            dispatch(cartActions.replaceCart({
                items:cartData.item,totalQuantity:cartData.totalQuantity,
            }));
        } catch (error) {
            dispatch(
                cartDisplayActions.showNotification({
                  status: "error",
                  title: "Error!",
                  message: "Sending cart data failed!",
                })
            )

            
        }

    }
}



export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      cartDisplayActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-ffc12-default-rtdb.firebaseio.com//cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items:cart.items,totalQuantity:cart.totalQuantity
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };
    try {
      await sendRequest();

      dispatch(
        cartDisplayActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        cartDisplayActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
