import {useDispatch,useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartDisplayActions } from '../../store/cartDisplay-reducer';



 
 const CartButton = () => {
  const dispatch=useDispatch();
  const cartQuantity=useSelector((state)=>state.cart.totalQuantity)
  

  const toggleCart=()=>{
    dispatch(cartDisplayActions.cartDisplay());
    
  }


   return (
     <button onClick={toggleCart} className={classes.button}>
       <span>My Cart</span>
       <span className={classes.badge}>{cartQuantity}</span>
     </button>
   );
 };
 
 export default CartButton;