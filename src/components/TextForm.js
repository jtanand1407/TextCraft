import React, {useState} from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('Enter your text here');

    const handleupClick=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
        props.showalert("Converted to UpperCase!","success");
    }

    const handledownClick=()=>{
        let newText=Text.toLowerCase();
        setText(newText);
        props.showalert("Converted to LowerCase!","success");
    }

    

    const handleonChange=(event)=>{
        setText(event.target.value);
    }

    return (
        <>
        <div>
            <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleupClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handledownClick}>Convert to Lowercase</button>
     
      </div>
      <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
         <p>{Text.split(" ").length} words  {Text.length} characters</p>
         <p>{0.008*Text.length} minutes read</p>
         <h2>PREVIEW</h2>
         <p>{Text}</p>
      </div>
      </>
    )
}
