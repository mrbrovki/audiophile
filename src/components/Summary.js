import React, { useContext } from 'react'
import { Context } from './App'
import data from '../data.json'
import { dot } from './Product'
import { Link } from 'react-router-dom'

const Summary = () => {
 const {products, total} = useContext(Context);
 const items = products.map(el =>{
  const item = data[el.index];
  return(
  <section key={el.index} className='item'>
    <img src={'/assets/cart/image-' + item.slug + '.jpg'} />
    <section>
    <h4 className='item-name'>{item.name.split(" ")[0]}</h4>
    <p className='item-price'>${dot(item.price)}</p>
    </section>
    <p style={{float: 'right', marginTop:'1.5rem'}}>x{el.amount}</p>
   </section>
  )
 })
 const shipping = 50;
 const vat = Math.round(total.totalPrice / 5);
 const sum = total.totalPrice + shipping;
 return (
  <section>
   <h2>summary</h2>
   {items}
    <section className='summary-total'>
      <section>
      <p>TOTAL</p>
      <p>SHIPPING</p>
      <p>VAT (INCLUDED)</p>
      <br/>
      <p>GRAND TOTAL</p>
      </section>
      <section>
      <p>${dot(total.totalPrice)}</p>
      <p>${shipping}</p>
      <p>${dot(vat)}</p>
      <br />
      <p>${dot(sum)}</p>
      </section>
    </section>
    <Link to='/mooooo' className='btn orange'>CONTINUE & PAY</Link>
  </section>
 )
}

export default Summary
