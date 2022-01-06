import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Hero.css'
const Hero = (props) => {
 return (
     <section className={'hero hero-' + props.responsive}>
     <h1>xx9 mark ii headphones</h1>
     <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <Link to='/headphones/4' className='btn orange'>SEE PRODUCT</Link>
   </section>
 )
}

export default Hero
