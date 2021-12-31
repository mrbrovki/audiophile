import React, {useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import data from '../../data.json'
import Categories from '../Categories'
import Gear from '../Gear'
import Product from '../Product'
import Others from '../Others'
import '../../styles/ProductPage.css'

const ProductPage = () => {
  const navigate = useNavigate(); 
  const {id} = useParams();
  const {features, includes, gallery, others} = data[id - 1];
  const items = includes.map((el, index) => {
 return (
 <div key={index}>
 <span className='quantity'>{el.quantity}x</span>
 <span className='item'>{'\t' + el.item}</span>
 <br />
 </div>
  )});
 useEffect(() =>{
  document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

 });

 return (
  <section className='product'>
    <button onClick={() => navigate(-1)} className='go-back'>Go Back</button>
      <Product index={id - 1} type='prodPage'/>
   <section className='features'>
   <h2>features</h2>
   <p>{features}</p>
   </section>
   <section className='in-the-box'>
    <h2>in the box</h2>
    {items}
   </section>
   <section className='gallery'>
     <img src={gallery.first.desktop.slice(1)} id='first'/>
     <img src={gallery.second.desktop.slice(1)} id='second'/>
     <img src={gallery.third.desktop.slice(1)} id='third'/>
   </section>
   <Others data={data} others={others}/>
   <Categories />
   <Gear />
  </section>
 )
}

export default ProductPage
