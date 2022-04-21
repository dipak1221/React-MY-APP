import React, { useState } from 'react'


function TextFrom(props) {
    const [text, setText] = useState('');
    var len = text.split(" ").length;
    if (len === 1) len = 0;
    else len = len - 1;
    const handleOnClick = () => {
        console.log("button was clicked");
        var str = text.toUpperCase();
        setText(str);
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
    }
    const handleClearClick = () => {
        setText("");
    }
    // console.log(useState("Enter some text here1"));
    return (
        <>
            <div className="container TextForm-style">

                <div className="mb-3">

                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnUpdate} id="mybox" rows="5"></textarea>

                </div>
                <button className="btn btn-primary mx-1" onClick={handleOnClick} >Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowerClick} >Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3 TextForm-style" >
                <h1>Your text Summary</h1>

                <p>{len} Words and {text.length} Character </p>
                {/* <p>0 Words and {text.length} Character </p> */}

                <p>{(len) / 200} minutes to read </p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )


}

export default TextFrom;