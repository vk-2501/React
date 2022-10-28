import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpclick=()=>{
        // console.log("UpperCase was clicked");
        set(text.toUpperCase());
        props.showAlert("Converted to UpperCase","success");
    }

    const clear=()=>{
        // console.log("UpperCase was clicked");
        set("");
        props.showAlert("Cleared Successfully","success");
    }

    const handleLoclick=()=>{
        
        set(text.toLowerCase());
        props.showAlert("Converted to LowerCase","success");
    }

    const handleOnchange=(e)=>{
        // console.log("On change ");
        set(e.target.value);
    }

    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob([JSON.stringify(text).replace(/[""]+/g, '')], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("File Downloaded Successfully","success");
      };

   const [text,set]=useState("Enter the value");
//    text="new Text"; wrong way to update the variable
//    setText("new Text"); //correct way to set text

    return (
        <>
        <div className="container" style={{color: props.mode==='dark' || props.mode==='darkred' ?'white':'#312f4a'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">

          <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'#312f4a':props.mode=='darkred'?'#f25a61':'white', color:props.mode==='dark' || props.mode==='darkred'?'white':'#312f4a'}} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.mode=='darkred'?'danger':'primary'} mx-2`} onClick={handleUpclick}>Convert to Uppercase</button>
        <button className={`btn btn-${props.mode=='darkred'?'danger':'primary'} mx-2`} onClick={handleLoclick}>Convert to Lowercase</button>
        <button className={`btn btn-${props.mode=='darkred'?'danger':'primary'} mx-2`} onClick={clear}>Clear</button>
        <button className={`btn btn-${props.mode=='darkred'?'danger':'primary'} mx-2`} onClick={downloadTxtFile}>Download</button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark' || props.mode==='darkred'?'white':'#312f4a'}} >
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length<0?"Enter something in textBox to preview here":text}</p>
      </div>
      </>

    )
  
}
