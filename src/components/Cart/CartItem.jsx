import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';

import { cartActions } from '../../store/cart-reducer';
 
 const CartItem = (props) => {
   const { title, quantity, total, price,id } = props.item;

   const dispatch=useDispatch();

   const addToCartHandler=()=>{
    dispatch(cartActions.addItemToCart(
      {title,id,price,quantity,total}
    ))
   }

   const removeItemHandler=()=>{
    dispatch(cartActions.removeItemFromCart(id))

   }


 
   return (
     <li className={classes.item}>
       <header>
         <h3>{title}</h3>
         <div className={classes.price}>
           ${total.toFixed(2)}{' '}
           <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
         </div>
       </header>
       <div className={classes.details}>
         <div className={classes.quantity}>
           x <span>{quantity}</span>
         </div>
         <div className={classes.actions}>
           <button onClick={removeItemHandler}>-</button>
           <button onClick={addToCartHandler}>+</button>
         </div>
       </div>
     </li>
   );
 };
 
 export default CartItem;