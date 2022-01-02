import React, {createContext, useState} from 'react'
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
  return (
    <Context.Provider value={{products, setProducts, total, setTotal}}>
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
