import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx'
import Cart from './pages/cart.jsx'
import Login from './pages/login.jsx'
import PlaceOrder from './pages/placeorder.jsx'
import Order from './pages/order.jsx'
import Product from './pages/product.jsx'
import Content from './pages/content.jsx'
import Collection from './pages/collection.jsx'
import About from './pages/about.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/placeorder' element={<PlaceOrder/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/product/:productID' element={<Product/>} />
        <Route path='/content' element={<Content/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  )
}

export default App
