import React, {useState, useEffect} from 'react'
import './alert.css'
import Button from './button'

function Alert({className = '', border = '', markstyle ='', link ='',}) {
    
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    useEffect (()=> 
    {getQuote ()}, []);

    const getQuote = () => {
        let url = link ;
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
        <div className = {`border-2 promptbox` + border}>
        <div className = "spacebefore1"></div>
        <Button onClick = {handleClick} className = {className}> Click to Generate Prompt </Button>
        <p className = 'text-base font-medium text-center m-4 text-[#553E52]'> 
        Prompt: {quote}
        <br></br>
        Theme(s): <mark className = {markstyle}> &nbsp; {author}   &nbsp;</mark>
        </p>        
        </div>
    </div>
    </div>
  )
}

export default Alert