import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navigation.css'
const Navigation = (props) => {

 useEffect(() => {
  if(props.type === 'tablet-mobile')
  document.getElementsByClassName('tablet-mobile')[0].classList.add('show');
 },[])
 const closeNav = () =>{
  props.hamburgerClick();
 }

 if(props.type === 'desktop'){
  return (
   <nav className={props.type}>
        <Link to='/'>home</Link>
        <Link to='/headphones'>headphones</Link>
        <Link to='/speakers'>speakers</Link>
        <Link to='/earphones'>earphones</Link>
  </nav>
  )
 }else{
  return(
   <>
     <div className={'overlay'} onClick={closeNav}></div>
   <div className={props.type}>
    <ul>
     <li><Link to='/' onClick={closeNav}>home</Link></li>
     <li><Link to='/headphones' onClick={closeNav}>headphones</Link></li>
     <li><Link to='/speakers' onClick={closeNav}>speakers</Link></li>
     <li><Link to='/earphones' onClick={closeNav}>earphones</Link></li>
    </ul>  
   </div>
   </>
  )
 }
}

export default Navigation
