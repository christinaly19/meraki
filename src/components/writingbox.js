import React, {useState, useEffect} from 'react'
import './writingbox.css'
import Button from './button'

function Writingbox() {

const [img, setImg] = useState("");
const [res, setRes] = useState([]);


const fetchRequest = async () => {
  let str = img;
  const mapObj = {
    and: "",
    but: "",
    the: "",
    an: "",
    a: "",
  };
  str = str.replace(/\b(?:and|but|the)\b/gi, matched => mapObj[matched]);
  console.log(str);

  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${str}&client_id=${'BPz3g4RcwRZH71JTmq-_3rAcWQiOZ_sBmV2zNYnd39g'}&per_page=20`
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
    <div>
    <div className = 'writingbox'>

        <label for="message" class="font-serif block mb-2 text-xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r to-[#553e52] from-[#a57ca0]">Start Writing:</label>
        <div className = 'description'>
        <p className = 'text-center italic font-light'> Ready to start? Click 'start' in the timer below, and your timer for 10 minutes (600 seconds) will begin. When you're done, 
        click submit to see your writing transformed into a <mark className = 'bg-transparent font-semibold'>curated</mark> moodboard with images from Unsplash. </p>
        </div>
        <div className = 'spacing'></div>
        <div className = 'spacing'></div>
        <div className = 'border-2'>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`start typing here...`}
          value = {img}
          onChange = {(e) => setImg(e.target.value)}
        />
       </div>
      <Button  onClick = {Submit} className = 'mt-2 button ml-2 text-white bg-[#6D8891] hover:bg-[#445054]'>Submit </Button>
      </div>

      <h1 className = "mt-5 text-center text-lg font-semibold  text-transparent bg-clip-text bg-gradient-to-r to-[#553e52] from-[#a57ca0]"> Your Custom Moodboard:</h1>
      <p className = 'mt-2 text-center italic'> Your custom moodboard based on your text will appear below once you submit:</p>
      <p className = 'mt-2 text-center italic'> Text is generated on these : {img} </p>
      <div className="ml-40 mr-40 pictures grid grid-cols-4">
  {res.map((val) => {
    return (
      <>
        <img
          key={val.id}
          className="images mt-5 img-fluid img-thumbnail"
          src={val.urls.small}
          alt="val.alt_description"
        />
      </>
    );
  })}
</div>
      
  
    </div>
  )
}

export default Writingbox