import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styles/Main.css'
const Main = () => {
 return (
  <main>
   <Outlet />
  </main>
 )
}

export default Main
