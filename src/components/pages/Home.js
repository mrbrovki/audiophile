import React from 'react'

import '../../styles/Home.css'
import Category from '../Category'
const Home = () => {
 return (
  <>
   <div className='hero'>
     <h1>xx9 mark ii headphones</h1>
     <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
     <div className='btn orange'>SEE PRODUCT</div>
   </div>
   <div className='content'>
   <section className='categories'>
     <Category name='headphones' />
     <Category name='speakers' />
     <Category name='earphones' />
    </section>
    <section className='products'>
      <section className='zx9'>
        <h1>zx9 speaker</h1>
        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <div class='btn black'>SEE PRODUCT</div>
      </section>
      <section className='zx7'>
        <h2>zx7 speaker</h2>
        <div class='btn transparent'>SEE PRODUCT</div>
      </section>
      <section className='grid-container'>
        <section className='yx1-image'>
        </section>
        <section className='yx1'>
        <h2>yx1 earphones</h2>
        <div class='btn transparent'>SEE PRODUCT</div>
        </section>
      </section>
    </section>
    <article className='grid-container' style={{marginTop: '8rem'}}>
      <section>
        <h1>bringing you the <span>best</span> audio gear</h1>
        <p>Located at the heart of New York City. Audiophile is the premiere store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who Audiophile the best place to buy your portable audio equipment.</p>
      </section>
      <img src='../assets/shared/desktop/image-best-gear.jpg'/>
    </article>
   </div>
  </>
 )
}

export default Home
