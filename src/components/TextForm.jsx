import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';



function TextForm(props) {

    const handleUpClick = () =>{
      console.log("upper case was clicked" + text);
      let newText =text.toUpperCase();
      setText(newText)
      props.showAlert("converted to uppercase","sucess")
    };

    const handleLowerClick = () =>{
      console.log("lower case was clicked" + text);
      let newText =text.toLowerCase();
      setText(newText)
       props.showAlert("converted to lowercase","sucess")
    };

    const handleClearText =()=>{
      let newText ='';
      setText(newText)
       props.showAlert("text cleared","sucess")
    }

      
    const handleOnChange = () =>{
      console.log("on changes")
      
      setText(event.target.value)
    } 

 const [text, setText] = useState('');
      
  return (
    <>
    <div className=" container" style={{color: props.mode === 'light'? 'black' :'white'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? 'grey' :'white' , color: props.mode === 'light'? 'black' :'white'}} value= {text} rows="8">
             
      </textarea>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleClearText}>Clear the text</button>
    </div>
      
      <div className="container my-3"  style={{backgroundColor: props.mode === 'dark'? '#042743' :'white' , color: props.mode === 'light'? 'black' :'white'}}>
        <h2>your text summary</h2>
        <p>Number of sentences => {text.split(".").length-1} sentences || Number of words =>{text.split(" ").length} words || Number of character => {text.length} characters</p>
        <p>{0.008*text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview it!!"}</p>
      </div>
    </>
  );
}

export default TextForm;