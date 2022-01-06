import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import Categories from '../Categories'
import { Context } from '../App'
import Gear from '../Gear'
import Hero from '../Hero'
import '../../styles/Home.css'
const Home = () => {
  const {responsive} = useContext(Context);
 return (
  <>
  <Hero responsive={responsive}/>
  <div className='content'>
    <Categories responsive={responsive}/>
    <section className='products'>
      <section className={'zx9 zx9-' + responsive}>
        <h1>zx9 speaker</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to='/speakers/6' className='btn black'>SEE PRODUCT</Link>
      </section>
      <section className={'zx7 zx7-' + responsive}>
        <h2>zx7 speaker</h2>
        <Link to='/speakers/5' className='btn transparent'>SEE PRODUCT</Link>
      </section>
      <section className={'grid-container grid-container-' + responsive}>
        <section className={'yx1-image-' + responsive}>
        </section>
        <section className={'yx1 yx1-' + responsive}>
        <h2>yx1 earphones</h2>
        <Link to='/earphones/1' className='btn transparent'>SEE PRODUCT</Link>
        </section>
      </section>
    </section>
    <Gear responsive={responsive}/>
  </div>
  </>
 )
}

export default Home
