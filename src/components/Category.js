import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Category.css'

const Category = (props) => {
 return (
  <section className='category'>
        <img src={`./assets/shared/desktop/image-${props.name}.png`} className='prod-image'/>
        <div className='prod-name'>{props.name}</div>
        <Link to={`/${props.name}`}>shop
         <img src='./assets/shared/desktop/icon-arrow-right.svg' className='arrow'/>
        </Link>
  </section>
 )
}

export default Category
