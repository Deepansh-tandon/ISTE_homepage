import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Homepage1 from './components/Homepage1'
import Cards from './components/Cards'



function App() {
  const [count, setCount] = useState(0)

  return ( 
    <>
       <div className='main'>
       <Navbar />
      <Homepage1 />
      <Cards/>
      </div> 
    </>
  )
}

export default App
