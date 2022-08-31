import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
           //console.log('Uppercase was clicked')
           const newText=text.toUpperCase();
           setText(newText);
    }
    const handleLoClick=()=>{
        //console.log('Lowercase was clicked')
        const newText=text.toLowerCase();
        setText(newText);
 }
 const handleClrClick=()=>{
    //  console.log('CLEAR was clicked')
    const newText='';
    setText(newText);
}
    const handleOnChange=(event)=>{
        // console.log('Onchange')
        setText(event.target.value);
}
const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase()).join(" ");
    setText(newText);
}
const handleCopyText = () => {
    var text1=document.getElementById('myBox');
    text1.select();
    text1.setSelectionRange(0,999);
    navigator.clipboard.writeText(text1.value);
    

}

const handlePasteText=()=>{
    navigator.clipboard.readText().then(
        (clipText) => setText(clipText));      
}
    const [text, setText] = useState('');
    
    let wordcount=0;
    let line_counter=0;
    let characters_count=0;
    if (text.length!==0){
        wordcount=text.split(" ").length-1+text.split("\n").length
        line_counter=text.split("\n").length
        characters_count=text.length-text.split(" ").length+1
    }
    
    

  return (
    <>
    <div>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>
        <button className="btn btn-success mx-2" onClick={handlePasteText}>Paste Text</button>
        <button className="btn btn-success mx-2" onClick={handleCopyText}>Copy Text</button>
        <button className="btn btn-danger mx-2" onClick={handleClrClick}>CLEAR</button>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p><b>{wordcount}</b> words, <b>{characters_count}</b> characters and <b>{line_counter}</b> Lines  </p>
            <p>{(0.008*wordcount).toPrecision(3)} minutes Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
    </div>
</>
  )
}
