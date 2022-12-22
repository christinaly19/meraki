import React from 'react'
import './reflect.css'
import Navbar from './navbar'

function reflect() {
  return (
    <div>
      <Navbar/>
      <div className = 'centered'>
      <h1 className ="text-center mb-4 text-2xl font-bold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-[#596789] from-[#80A3B8]"> Reflect | </span> | Meraki </h1>
      </div>
    </div>

  )
}

export default reflect