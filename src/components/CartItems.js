import React, {useContext, useEffect} from 'react'
import { Context } from './App'
import { dot } from './Product'
import data from '../data.json'
import Counter from './Counter'
import { Link } from 'react-router-dom'

const CartItems = (props) => {
 const {products, setProducts, total, setTotal} = useContext(Context);
 useEffect(() =>{
  setTotal(products.reduce((total, item) => {
   const {index, amount} = item;
   total.amount += amount;
   total.totalPrice += data[index].price * amount;
   return total;
  }, {amount: 0, totalPrice:0}))
 }, [products]);

 const items = products.map(el => {
  const item = data[el.index];
  return(
   <section key={el.index} className='item'>
    <img src={'/assets/cart/image-' + item.slug + '.jpg'} />
    <section>
    <h4 className='item-name'>{item.name.split(" ")[0]}</h4>
    <p className='item-price'>${dot(item.price)}</p>
    </section>
    <Counter amount={el.amount} index={el.index}/>
   </section>
  )
 });

const removeItems = () => {
 setProducts([]);
}
 return (
  <section id='ct'>
    <section className='top'>
    <h2>CART ({total.amount})</h2>
    <button onClick={removeItems}>Remove all</button>
    </section>
    {items}
    <section className='total'>
      <p>Total</p>
      <p id='total-price'>${dot(total.totalPrice)}</p>
    </section>
    <section className='cart-checkout'>
      <Link to='/checkout' className='btn orange'onClick={() => props.setVisibility('hidden')}>CHECKOUT</Link>
    </section>
  </section>
 )
}

export default CartItems