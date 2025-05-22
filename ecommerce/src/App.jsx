import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import Blogs from './assets/Pages/Blogs'
import Contact from './assets/Pages/Contact'
import Cart from './assets/Pages/Cart'

const App = () => {
  
  

  return ( 
    <>
    
        <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/Blogs" element={<Blogs/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />
      </Routes>  

      </>
  )
}

export default App
