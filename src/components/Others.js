import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Others.css'
const Others = ({data, others}) => {
 const getObjBySlug = (slug) =>{
  const obj = data.find(el => el.slug === slug)
  return obj;
};
 return (
     <section className='others'>
    <h3>you may also like</h3>
    <section className='flex-container'>
     <section>
     <img src={others[0].image.desktop.slice(1)}/>
     <p>{others[0].name}</p>
      <Link to={'/' + getObjBySlug(others[0].slug).category + '/' + getObjBySlug(others[0].slug).id} className='btn orange'>SEE PRODUCT</Link>     
     </section>
     <section>
     <img src={others[1].image.desktop.slice(1)}/>
     <p>{others[1].name}</p>
      <Link to={'/' + getObjBySlug(others[1].slug).category + '/' + getObjBySlug(others[1].slug).id} className='btn orange'>SEE PRODUCT</Link>  
     </section>
      <section>
     <img src={others[2].image.desktop.slice(1)}/>
     <p>{others[2].name}</p>
      <Link to={'/' + getObjBySlug(others[2].slug).category + '/' + getObjBySlug(others[2].slug).id} className='btn orange'>SEE PRODUCT</Link> 
     </section>
    </section>
   </section>
 )
}

export default Others
