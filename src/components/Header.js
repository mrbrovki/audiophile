import React, { useState, useContext } from 'react'
import '../styles/Header.css'
import CartItems from './CartItems'
import { Context } from './App'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
const Header = () => {
      const {responsive,setProducts} = useContext(Context);

      const [showNav, setShowNav] = useState(false);
      const [visibility, setVisibility] = useState('hidden')
      const handleClick = () =>{
            visibility === 'hidden' ? setVisibility('') : setVisibility('hidden');
            setProducts(prev => prev.filter(item => item.amount != 0));
      }
      const hamburgerClick = () =>{
            showNav === false? setShowNav(true) : setShowNav(false);
      }
 return (
  <header>
      {responsive != 'desktop' &&
      <img src='/assets/shared/tablet/icon-hamburger.svg' className='hamburger' onClick={hamburgerClick}/>}
      {(responsive != 'desktop' && showNav == true) && 
            <Navigation type={'tablet-mobile'} hamburgerClick={hamburgerClick} />
      }
   <Link to='/' className='brand'><img src='/assets/shared/desktop/logo.svg'/></Link>
      {responsive == 'desktop' &&
      <Navigation type={'desktop'} />
   }
  <div className={'overlay ' + visibility} onClick={handleClick}></div>
      <div className='cart' onClick={handleClick}>
      <img className='cart-icon' src='/assets/shared/desktop/icon-cart.svg'/>
  </div>
      <div className={'cart-items ' + visibility + ' cart-items-' + responsive}> 
            <CartItems setVisibility={setVisibility}/>
      </div>

  </header>
 )
}

export default Header
