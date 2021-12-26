import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
 return (
  <header>
   <Link to='/' className='brand'><img src='./assets/shared/desktop/logo.svg'/></Link>
   <nav>
        <Link to='/'>home</Link>
        <Link to='/headphones'>headphones</Link>
        <Link to='/speakers'>speakers</Link>
        <Link to='/earphones'>earphones</Link>
  </nav>
   <img className='cart' src='./assets/shared/desktop/icon-cart.svg'/>
  </header>
 )
}

export default Header
