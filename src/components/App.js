import React, {createContext, useEffect, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import Checkout from './pages/Checkout'

export const Context = createContext();
const App = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [size, setSize] = useState(window.innerWidth);
  const [responsive, setResponsive] = useState('desktop');
  const checkSize = () =>{
    if(size > 1024){
      setResponsive('desktop');
        } 
    else if(size >= 768){
      setResponsive('tablet');
    }
    else{
      setResponsive('mobile');
    }
  }
  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setSize(window.innerWidth);
    });
    checkSize();
  });
  return (
    <Context.Provider value={{responsive, products, setProducts, total, setTotal}}>
    <Routes>
    <Route path='/' element={<Layout />}>
     <Route index element={<Home />}/>
     <Route path=':category' element={<CategoryPage />} />
     <Route path=':category/:id' element={<ProductPage />} />
     <Route path='checkout' element={<Checkout />} />
     <Route path='*' element={<NoPage />} />
    </Route>
   </Routes>
    </Context.Provider>
  )
}

export default App
