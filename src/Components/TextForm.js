import React, { useState } from "react";

export default function TextForm() {
  const ToUpperCase =() =>{
    // console.log('Convert Into ToUpperCase'+ text)
     let newText = text.toUpperCase();
     setText(newText)
  }

  const OnChange =(event) =>{
    // console.log('OnChange')
     setText(event.target.value)
 }
  const [text, setText] = useState("Enter Text Here!");
  
  return (
    <div>
      <h1>Enter Your Data Here!</h1>
      <div className="mb-3">
        <textarea className="form-control" onChange={OnChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={ToUpperCase}>Convert To Upper Case</button>
      <h1>WordCounter</h1>
      <p>{text.split(" ").length} Words & {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minuits Read</p>
      <h3>Preview</h3> 
      <p>{text}</p>

    </div>
  );
}
