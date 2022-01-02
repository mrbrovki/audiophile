import React, { useState, useContext } from 'react'
import {Link} from 'react-router-dom'
import '../styles/Header.css'

import CartItems from './CartItems'
import { Context } from './App'

const Header = () => {
      const {setProducts} = useContext(Context);
      const [visibility, setVisibility] = useState('hidden')
      const handleClick = () =>{
            visibility === 'hidden' ? setVisibility('') : setVisibility('hidden');
            setProducts(prev => prev.filter(item => item.amount != 0));
      }

 return (
  <header>
   <Link to='/' className='brand'><img src='/assets/shared/desktop/logo.svg'/></Link>
   <nav>
        <Link to='/'>home</Link>
        <Link to='/headphones'>headphones</Link>
        <Link to='/speakers'>speakers</Link>
        <Link to='/earphones'>earphones</Link>
  </nav>
  <div className={'overlay ' + visibility} onClick={handleClick}></div>
      <div className='cart' onClick={handleClick}>
      <img className='cart-icon' src='/assets/shared/desktop/icon-cart.svg'/>
  </div>
      <div className={'cart-items ' + visibility}> 
            <CartItems setVisibility={setVisibility}/>
      </div>

  </header>
 )
}

export default Header
