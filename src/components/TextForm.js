import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const removeExtraSpaces = () => {
        let newText =text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");
    }
    const copyText = () => {
        var Text=document.getElementById('myBox');
        Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showAlert("Text Copied","success");
    }
   
    const clearText = () => {  setText("");
    props.showAlert("Textarea Cleared","success");
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className='container'>       
            <div className="mb-3"> 
            <h2 >{props.heading}</h2>
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
 value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}> Covert to Uppercase </button>
            <button className="btn btn-primary" onClick={handleLoClick}> Covert to Lowercase </button>
            
            <button className="btn btn-primary mx-2" onClick={copyText}> Copy Text </button>
            <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}> Remove Extra Spaces </button>
            <button className="btn btn-primary mx-2" onClick={clearText}> Clear Text </button>
        </div>
    
          <div className="container my-4">
            <h1> Text Summary </h1>
            <p> {text.split(" ").length} words and {text.length-text.split(" ").length+1} characters</p>
            <p> {0.008*text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
             <p>{text.length>0?text: "Enter something in the above textbox to preview it here"}</p>

          </div>
        </>
    )
}
