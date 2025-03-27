import ProductItem from './ProductItem';
 import classes from './Products.module.css';


 const DUMMY_PRODUCT=[
  {id:'p1',price:6,title:'My First book ',description:'The first book ever wrote'},
  {id:'p2',price:5,title:'My Second book ',description:'The Second book ever wrote'},
  {id:'p3',price:4,title:'My third book ',description:'The third book ever wrote'},
  {id:'p4',price:2,title:'My Fourth book ',description:'The Fourth book ever wrote'},
]
 
 
 const Products = () => {
   return (
     <section className={classes.products}>
       <h2>Buy your favorite products</h2>
       <ul>
         {DUMMY_PRODUCT.map((product)=> (<ProductItem
         key={product.id}
         id={product.id}
           title={product.title}
           price={product.price}
           description={product.description}
         />))}
       </ul>
     </section>
   );
 };
 
 export default Products;