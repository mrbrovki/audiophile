import React, {useEffect, useContext} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import data from '../../data.json'
import Categories from '../Categories'
import Gear from '../Gear'
import Product from '../Product'
import Others from '../Others'
import '../../styles/ProductPage.css'
import { Context } from '../App'

const ProductPage = () => {
  const navigate = useNavigate(); 
  const {responsive} = useContext(Context);
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
  <section className={'product'}>
    <button onClick={() => navigate(-1)} className='go-back'>Go Back</button>
      <Product index={id - 1} type='prodPage'/>
   <section className={'features features-' + responsive}>
   <h2>features</h2>
   <p>{features}</p>
   </section>
   <section className={' in-the-box in-the-box-' + responsive}>
    <h2>in the box</h2>
    <section>
    {items}
    </section>
   </section>
   <section className={'gallery gallery-'+ responsive}>
     <img src={gallery.first[`${responsive}`].slice(1)} id='first'/>
     <img src={gallery.second[`${responsive}`].slice(1)} id='second'/>
     <img src={gallery.third[`${responsive}`].slice(1)} id='third'/>
   </section>
   <Others data={data} others={others}/>
   <Categories responsive={responsive}/>
   <Gear responsive={responsive}/>
  </section>
 )
}

export default ProductPage
