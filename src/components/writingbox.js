import React, {useState} from 'react'
import './writingbox.css'
import Button from './button'
function Writingbox() {
  const [query, setQuery] = useState("");
  return (
    <div className = 'writingbox'>
        <label for="message" class="font-serif block mb-2 text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r to-[#553e52] from-[#a57ca0]">Start Writing:</label>
        <p className = 'italic font-light'> Ready to start? Click 'start' in the timer below, and your timer for 10 minutes (600 seconds) will begin. </p>
        <div className = 'spacing'></div>
        <div className = 'spacing'></div>
        <div className = 'border-2'>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Start typing here!`}
        />
       </div>
      <Button className = 'mt-2 button ml-2 text-white bg-[#6D8891] hover:bg-[#445054]'>Submit </Button>
     
    </div>
  )
}

export default Writingbox