import React, {useState, useEffect} from 'react'
import './writingbox.css'
import Button from './button'

function Writingbox() {
const [img, setImg] = useState("");
const [res, setRes] = useState([]);

const fetchRequest = async () => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${img}&client_id=${'BPz3g4RcwRZH71JTmq-_3rAcWQiOZ_sBmV2zNYnd39g'}`
  );
  const dataJ = await data.json();
  const result = dataJ.results;
  console.log(result);
  setRes(result);
};

useEffect(() => {
  fetchRequest();
}, []);


const Submit = () => {
  fetchRequest();
  setImg("");
};

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
          value = {img}
          onChange = {(e) => setImg(e.target.value)}
        />
       </div>
      <Button  onClick = {Submit} className = 'mt-2 button ml-2 text-white bg-[#6D8891] hover:bg-[#445054]'>Submit </Button>
      
    </div>
  )
}

export default Writingbox