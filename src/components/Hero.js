import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Hero.css'
const Hero = () => {
 return (
     <section className='hero'>
     <h1>xx9 mark ii headphones</h1>
     <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
    <Link to='/headphones/3' className='btn orange'>SEE PRODUCT</Link>
   </section>
 )
}

export default Hero
