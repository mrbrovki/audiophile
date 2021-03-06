import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Footer.css'
import { Context } from './App'
const Footer = () => {
  const {responsive} = useContext(Context);
 return (
  <footer className={'footer-' + responsive}>
      <Link to='/' className='brand'><img src='/assets/shared/desktop/logo.svg'/></Link>
      <nav>
        <Link to='/'>home</Link>
        <Link to='/headphones'>headphones</Link>
        <Link to='/speakers'>speakers</Link>
        <Link to='/earphones'>earphones</Link>
      </nav>
      <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility-we're open 7 days a week.</p>
      <p>Copyright 2022. All Rights Reserved</p>
      <section>
      <Link to=""><img src='/assets/shared/desktop/icon-instagram.svg'/></Link>
      <Link to=""><img src='/assets/shared/desktop/icon-twitter.svg'/></Link>
      <Link to=""><img src='/assets/shared/desktop/icon-facebook.svg'/></Link>
      </section>
  </footer>
 )
}

export default Footer
