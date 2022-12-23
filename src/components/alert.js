import { getByDisplayValue } from '@testing-library/react';
import React, {useState, useEffect} from 'react'
import './alert.css'
import Button from './button'

function Alert() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    useEffect (()=> 
    {getQuote ()}, []);

    const getQuote = () => {
        let url = 'https://gist.githubusercontent.com/christinaly19/031afcd1e22150a6a3db72d9d9e6eb8c/raw/13c797a774b4b9f50cce2cd06696e3c1908e9f98/quotes.json';
        fetch(url)
        .then (res => res.json())
        .then(data => {
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];
            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }
    const handleClick = () => {
        getQuote();
    }

      
  return (
    <div>
    <div className = "spacebefore"></div>
    <div className = 'alert'>
        <div className = "border-2 border-[#5D6D8E] promptbox">
        <div className = "spacebefore1"></div>
        <Button onClick = {handleClick} className = 'bg-[#6D8891]'> Click to Generate Prompt </Button>
        <p className = 'text-base font-medium text-center m-4 text-[#553E52]'> 
        Prompt: {quote}
        <br></br>
        Genre: <mark className = 'bg-[#F7E8E6]'> {author} </mark>
        </p>        
        </div>
    </div>
    </div>
  )
}

export default Alert