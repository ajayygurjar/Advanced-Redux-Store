
import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
 import Layout from './components/Layout/Layout';
 import Products from './components/Shop/Products';
 import { useDispatch, useSelector } from 'react-redux';
 import Notification from './components/UI/Notification';
 import { sendCartData,fetchCartData } from './store/cart-actions';



let isInitial=true;
 
 function App() {


  const isCartDispaly=useSelector((state)=>state.cartDisplay.isCartDisplay);
  const cart=useSelector((state=>state.cart));
  const notification=useSelector((state)=>state.cartDisplay.notification);
  const dispatch=useDispatch();


  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])


  useEffect(() => {

    if(isInitial){
      isInitial=false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart));
    }
    
    
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