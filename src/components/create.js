import React from 'react'
import './create.css'
import Navbar from './navbar'
import Alert from './alert'
import Writingbox from './writingbox'
import Timer from './timer'

function Create() {
  return (
    <div>
      <Navbar className = 'relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#b4872f] mb-3'/>
      <div className = 'spacebefore1'></div>
      <div className = 'centered'>
      <h1 className ="font-serif  tracking-wide text-center mb-4 text-4xl font-semibold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-[#A57110] from-[#D6B765]"> Create | </span> | Meraki </h1>
      <p className = 'font-light font-sans text-xl text-center italic md:text-base lg:text-xl'> Your one place for <mark className ="text-[#0E0E0E] bg-[#efdbda]"> &nbsp;creation&nbsp;</mark>&nbsp; – anytime, anywhere.</p>
      <Alert className = 'bg-[#B4872F] hover:bg-[#966a18]' markstyle='text-base font-medium  text-[#553E52] bg-[#efdbda]' link ='https://gist.githubusercontent.com/christinaly19/e050118855f40b5e11c6267849f20645/raw/0b907274e77c2730c10d975f0ee9e4ee91cf1e25/writingprompts.json'>
      </Alert>    
     <div className = 'spacebefore1'></div>
      <Writingbox></Writingbox>
      <div className = 'spacebefore'></div>
      <div className = 'mt-6'>
      <Timer></Timer>
      </div>
      <div className = 'spacebefore'></div>
      </div>
    </div>

  )
}

export default Create