import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Categories.css'

const Categories = () => {
const catNames = ['headphones', 'speakers', 'earphones'];
const categories = catNames.map((category, index) => {
  return(
      <section className='category' key={index}>
        <img src={`/assets/shared/desktop/image-${category}.png`} className='prod-image'/>
        <div className='prod-name'>{category}</div>
        <Link to={`/${category}`}>shop
         <img src='/assets/shared/desktop/icon-arrow-right.svg' className='arrow'/>
        </Link>
  </section>
  ) 
})
 return (
    <section className='categories'>
      {categories}
    </section>
 )
}

export default Categories
