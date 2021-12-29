import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Product from '../Product'
import data from '../../data.json'
import '../../styles/CategoryPage.css'
const CategoryPage = () => {
 const {category} = useParams();
 const categoryProducts = data.map((item, index) => {
  if(item.category === category){
   return <Product key={index} id={index} type='catPage'/>
  }
 });
  document.body.scrollTop = 0; // For Safari
 document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
 return (
  <section className='cat-page'>
  <h1 className='cat-heading'>{category}</h1>
  <section className='category-items'>
  {categoryProducts}
  </section>
  </section>
 )
}

export default CategoryPage
