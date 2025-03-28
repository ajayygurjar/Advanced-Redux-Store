
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
 import Layout from './components/Layout/Layout';
 import Products from './components/Shop/Products';
 import { useDispatch, useSelector } from 'react-redux';
 import Notification from './components/UI/Notification';
import { cartDisplayActions } from './store/cartDisplay-reducer'; 


let isInitial=true;
 
 function App() {


  const isCartDispaly=useSelector((state)=>state.cartDisplay.isCartDisplay);
  const cart=useSelector((state=>state.cart));
  const notification=useSelector((state)=>state.cartDisplay.notification);
  const dispatch=useDispatch();



  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        cartDisplayActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cart data!',
        })
      );
      const response = await fetch(
        'https://react-http-ffc12-default-rtdb.firebaseio.com//cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error('Sending cart data failed.');
      }

      dispatch(
        cartDisplayActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCartData().catch((error) => {
      dispatch(
        cartDisplayActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [cart, dispatch]);



   return (
    <>
    {notification && (
      <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />
    )}
     <Layout>
      {isCartDispaly && <Cart />}
       <Products />
     </Layout>
     
   </>
   );

 }
 
 export default App;