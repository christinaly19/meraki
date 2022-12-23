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
        let url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
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
        Genre: {author}
        </p>        
        </div>
    </div>
    </div>
  )
}

export default Alert