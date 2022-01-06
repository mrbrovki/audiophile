import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Categories.css'

const Categories = (props) => {
const catNames = ['headphones', 'speakers', 'earphones'];
const categories = catNames.map((category, index) => {
  return(
      <section className='category' key={index}>
        <Link to={`/${category}`}>
        <img src={`/assets/shared/desktop/image-${category}.png`} className='prod-image'/>
        <div className='prod-name'>{category}</div>
        <span>shop</span>
         <img src='/assets/shared/desktop/icon-arrow-right.svg' className='arrow'/>
        </Link>
  </section>
  ) 
})
 return (
    <section className={'categories categories-' + props.responsive}>
      {categories}
    </section>
 )
}

export default Categories
