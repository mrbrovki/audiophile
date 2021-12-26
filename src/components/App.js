import React from 'react'
import {Routes, Route} from 'react-router-dom'
import '../styles/App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Headphones from './pages/Headphones'
import Speakers from './pages/Speakers'
import Earphones from './pages/Earphones'
import NoPage from './pages/NoPage'
const App = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Layout />}>
     <Route index element={<Home />}/>
     <Route path='headphones' element={<Headphones />} />
     <Route path='speakers' element={<Speakers />} />
     <Route path='earphones' element={<Earphones />} />
     <Route path='*' element={<NoPage />} />
    </Route>
   </Routes>
    </>
  )
}

export default App
