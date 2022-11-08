import React, { useState } from 'react'

export default function TestForm(props) {
    const [Text, setText] = useState('');
    let handleupperCase=()=>{
        let newText=Text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted Into UpperCase","success");
    }
    let handlelowerCase=()=>{
      let newText=Text.toLowerCase();
      setText(newText);
      props.showAlert("Text Converted Into Lower Case","success");
    }
    let handleclearText=()=>{
      let newText='';
      setText(newText);
      props.showAlert("Text Cleared","success");
    }
    
   let handleonChange=(event)=>{
        setText(event.target.value);

    }

    
  //   let handleExtraSpace=()=>{
  //     let newText= Text.split(/[ ]+/);
  //     setText(newText.join)
  // }
     return (
    <div>

    <div className="form-group">
   <h1 style={{color:props.mode==='light'?'#3b444b':'white'}}>{props.heading}</h1>
    <textarea className="form-control" id="mybox" rows="3" style={{backgroundColor:props.mode==='light'?'white':'#3b444b',color:props.mode==='light'?'#3b444b':'white'}} value={Text} onChange={handleonChange} ></textarea>
    </div>
    <button className="btn btn-primary my-3 mx-2" onClick={handleupperCase} >Convert To UpperCase Text</button>
    <button className="btn btn-primary my-3" onClick={handlelowerCase} >Convert To LowerCase Text</button>
    <button className="btn btn-primary my-3 mx-2" onClick={handleclearText} >Clear Text</button>
    {/* <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpace} >Remove Extra Spaces</button> */}
    

    <div className="form-group" style={{color:props.mode==='light'?'#3b444b':'white'}}>
   <h2>Character Count</h2>
    <p>{Text.length}</p>
    <h2>Word Count</h2>
    <p>{Text.split(" ").length}</p>
    </div>
    <div className="form-group" style={{color:props.mode==='light'?'#3b444b':'white'}}>
   <h2>Preview</h2>
    <p>{Text}</p>
    </div>

    </div>


    
  )
}
