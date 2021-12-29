import React from 'react'
import {Link} from 'react-router-dom'
import Categories from '../Categories'
import Gear from '../Gear'
import Hero from '../Hero'
import '../../styles/Home.css'
const Home = () => {
 return (
  <>
  <Hero />
  <div className='content'>
    <Categories />
    <section className='products'>
      <section className='zx9'>
        <h1>zx9 speaker</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to='/speakers/5' className='btn transparent'>SEE PRODUCT</Link>
      </section>
      <section className='zx7'>
        <h2>zx7 speaker</h2>
        <Link to='/speakers/4' className='btn transparent'>SEE PRODUCT</Link>
      </section>
      <section className='grid-container'>
        <section className='yx1-image'>
        </section>
        <section className='yx1'>
        <h2>yx1 earphones</h2>
        <Link to='/earphones/0' className='btn transparent'>SEE PRODUCT</Link>
        </section>
      </section>
    </section>
    <Gear />
  </div>
  </>
 )
}

export default Home
