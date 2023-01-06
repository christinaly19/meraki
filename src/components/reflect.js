import React from 'react'
import './reflect.css'
import Navbar from './navbar'
import Alert from './alert'
import Writingbox from './writingbox'
import Timer from './timer'
import Button from './button'
function reflect() {
  return (
    <div>
      <Navbar className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#6D8891] mb-3'/>
      <div className = 'spacebefore1'></div>
      <div className = 'centered'>
      <h1 className =" font-serif tracking-wide text-center mb-4 text-4xl font-semibold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-[#596789] from-[#80A3B8]"> Reflect | </span> | Meraki </h1>
      <p className = 'font-light font-sans text-xl text-center italic md:text-base lg:text-xl'> Your one place for <mark class="bg-[#f7e8e6]"> &nbsp; reflection &nbsp;  </mark>   &nbsp; – anytime, anywhere.</p>
      <Alert className = 'bg-[#6D8891] hover:bg-[#445054]' markstyle='bg-[#F7E8E6]' link = 'https://gist.githubusercontent.com/christinaly19/031afcd1e22150a6a3db72d9d9e6eb8c/raw/c6c12a6f1f3b79ac62a37a43177b039abf140a77/quotes.json'>
      </Alert>    
     <div className = 'spacebefore1'></div>
      <Writingbox></Writingbox>
      <div className = 'spacebefore'></div>
  
      <div className = 'mt-6'>
      <Timer></Timer>
      </div>
      </div>
      <div className = 'spacebefore'></div>
      </div>


  )
}

export default reflect