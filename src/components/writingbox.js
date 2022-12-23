import React from 'react'
import './writingbox.css'

function Writingbox() {
  return (
    <div className = 'writingbox'>
        <label for="message" class="font-serif block mb-2 text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r to-[#553e52] from-[#a57ca0]">Start Writing:</label>
        <p className = 'italic font-light'> Ready to start? Make sure you get rid of any distractions, and start typing in the box below to start the timer. </p>
        <div className = 'spacing'></div>
        <div className = 'spacing'></div>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#553e52] focus:border-[#F7E8E6] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
    </div>
  )
}

export default Writingbox