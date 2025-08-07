import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Wishlist from '../Pages/Wishlist'

function Common() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/wishlist' element={<Wishlist/>} />
        </Routes>
    </div>
  )
}

export default Common