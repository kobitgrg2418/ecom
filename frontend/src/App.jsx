import React from 'react'
import { Routes } from 'react-router-dom'
import home from './pages/home.jsx'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Routes>
        <Route path='/' element={<home/>} />
        <Route path='/cart' element={<cart/>} />
        <Route path='/login' element={<login/>} />
        <Route path='/placeorder' element={<placeorder/>} />
        <Route path='/order' element={<order/>} />
        <Route path='/product/:productID' element={<product/>} />
        <Route path='/content' element={<content/>} />
        <Route path='/collection' element={<collection/>} />
        <Route path='/about' element={<about/>} />
        
      </Routes>
    </div>
  )
}

export default App