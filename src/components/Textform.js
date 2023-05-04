// here on video 2 we learn about

import React, { useState } from "react";

export default function Textform(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleupClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleclearClick = () => {
    let newText = " ";
    setText(newText);
  };
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const [text, setText] = useState("Enter text here"); // to ynha par aaj humne sikha ki text ye value jo text box ke aander likha or {settext } ye ek  funcion jisko kch change karne ke leya use karnge
  //   to update the function hook text the write way to write is
  // text = "new text " this is the wrong way
  // settext("new text ") this is the right way
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <button className=" btn btn-primary mx-2" onClick={handleupClick}>
          Convert to Uppercase
        </button>

        <button className=" btn btn-primary mx-2" onClick={handleloClick}>
          Convert to Lowercase
        </button>

        <button className=" btn btn-primary mx-2" onClick={handleclearClick}>
          Clear_text
        </button>
      </div>
      <div className="container my-4">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
