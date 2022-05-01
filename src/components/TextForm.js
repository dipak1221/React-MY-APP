import React, { useState } from 'react'


function TextFrom(props) {
    const [text, setText] = useState('');
  
    const handleOnClick = () => {
        console.log("button was clicked");
        var str = text.toUpperCase();
        setText(str);
        props.showAlert("UpperCase enable", "success");
        // console.log(text);
    }
    // var count = 0;
    const handleOnUpdate = (event) => {
        console.log("text updated");

        setText(event.target.value);
        // count++;
    }

    const handleLowerClick = () => {
        var str = text.toLowerCase();
        setText(str);
        props.showAlert("LowerCase enable", "success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text is clear", "success");
    }


    const handleCopyClick = () => {
        var text = document.getElementById("mybox");
        text.select();
       navigator.clipboard.writeText(text.value);
       document.getSelection().removeAllRanges();
       props.showAlert("Copied to Clipboard",'success');
    }
    // console.log(useState("Enter some text here1"));
    return (
        <>
            <div className="container TextForm-style" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

                <div className="mb-3">

                    <h2>{props.heading}!</h2>
                    <textarea  className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#2b725e', color: props.mode === 'light' ? '#2b725e' : 'white' }} value={text} onChange={handleOnUpdate} id="mybox" rows="5"></textarea>

                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClick} >Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowerClick} >Convert to LowerCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3 TextForm-style" style={{ color: props.mode === 'light' ? 'black' : 'white' }} >
                <h3>Your text Summary</h3>

                <p>{text.trim().split(" ").filter((element)=>{ return element.length!==0 }).length} Words and {text.length} Character </p>
                {/* <p>0 Words and {text.length} Character </p> */}

                <p>{text.trim().split(" ").filter((element)=>{ return element.length!==0 }).length / 200} minutes to read </p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );


}

export default TextFrom;