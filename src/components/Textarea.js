import React, { useState } from 'react'
import '../design/Text.css';

export const Textarea = () => {
    const [text,setText] = useState();
    const [count , setCount] = useState();
    let [wordNumber, setWordCount] = useState();
    const [myContent, setContent] = useState();

    const handleChange = (event) => {
        setText(event.target.value);
        setContent(event.target.value);
    }

    const handleOnClik = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowercase = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const clear = () => {
        setText(""); 
        setWordCount(0);
        setCount(0);
    }

    const number_of_letters = () => {
        let characters = text.length;
        setCount(characters);
        // setText(characters);
    }

    const wordCount = () => {
        let word = text;

        if(text == ""){
            setWordCount(0);
        }
        else{
            for(let iterator = 0 ; iterator < word.length ; iterator++){
                if(word[iterator] == " "){
                    wordNumber += 1;
                }
            }
        }
        setWordCount(wordNumber);
        wordNumber = 1;
    }

    const trimSpace = () => {
        let trimText = text.trim();
        setText(trimText);
    }

    const titleCase = () => {
        let str = text.toString();
        let result = "";
        str.replace(/\w\S*/g,
        function(str)
        {
            result += (str.charAt(0).toUpperCase() + str.substr(1).toLowerCase());
        });
        setText(result);
    }
    

  return (
    
    <>
    <div className='mb-3 container'>
        <label for="exampleFormControlTextarea1">Text Utils</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleChange} placeholder='Enter the Content!'></textarea>     
        <div className='buttonForFunction'>
            <button className = "btn btn-primary my-3" onClick={handleOnClik}>Convert To UpperCase</button>
            <button className='btn btn-primary my-3' onClick={handleLowercase}>Convert to Lowercase</button>
            <button className='btn btn-danger my-3' onClick={clear}>Clear the Box</button>
            <button className='btn btn-success my-3' onClick={number_of_letters}>Count the Characters</button>
            <button className='btn btn-success my-3' onClick={titleCase}>Title Case</button>
            <button className='btn btn-success my-3' onClick={trimSpace}>Trim Extra Spaces</button>
            <button className='btn btn-success my-3' onClick={wordCount}>Count Words</button>
        </div>
        <hr></hr>
        {/* <label>{count}</label> */}

        <div className='summaryBox'>
            <h2><u>Summary</u></h2>
            <h4>Word Count : {wordNumber}</h4>
            <h4>Character Count : {count}</h4>
        </div>

        <hr></hr>

        <div className='disply'>
            <br></br>
            <h5><u>Your Content Preview</u></h5>
            <label>{myContent}</label>
        </div>
    </div>
    </>
  )
}
