import React from 'react'
import './reflect.css'
import Navbar from './navbar'
import Alert from './alert'
import Writingbox from './writingbox'
import Timer from './timer'

function reflect() {
  return (
    <div>
      <Navbar/>
      <div className = 'spacebefore1'></div>
      <div className = 'centered'>
      <h1 className ="font-serif  tracking-wide text-center mb-4 text-4xl font-semibold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-[#596789] from-[#80A3B8]"> Reflect | </span> | Meraki </h1>
      <p className = 'font-light font-sans text-xl text-center italic md:text-base lg:text-xl'> Your one place for <mark class="bg-[#f7e8e6]"> &nbsp; reflection&nbsp;  </mark>   &nbsp; – anytime, anywhere.</p>
      <Alert>
      </Alert>    
     <div className = 'spacebefore1'></div>
      <Writingbox></Writingbox>
      <div className = 'spacebefore'></div>
      <Timer></Timer>
      <div className = 'spacebefore'></div>
      </div>
    </div>

  )
}

export default reflect