import React, { useState } from "react";

export default function TextForms(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newsetText = text.toUpperCase();
    setText(newsetText);
    props.handleAlert("converted to upper case", "success");
  };

  const handleLrClick = () => {
    let newsetText = text.toLowerCase();
    setText(newsetText);
    props.handleAlert("converted to lower case", "success");
  };

  const handleClrScr = () => {
    let newsetText = "";
    setText(newsetText);
    props.handleAlert("your text summary is remove", "success");
  };

  const handleRevCase = () => {
    let newsetText = text.split("").reverse().join("");
    setText(newsetText);
    props.handleAlert("text to reverce!!!", "success");
  };

  const handleCopyText = () => {
    let newsetText = document.getElementById("myself");
    newsetText.select();
    navigator.clipboard.writeText(newsetText.props);
    props.handleAlert("copy to clipboard!!!", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleExtraSpace = () => {
    let newsetText = text.split(/[ ]+/);
    setText(newsetText.join(" "));
    props.handleAlert("extra spaces are removed", "success");
  };
  return (
    <div>
      <div
        className="container"
        style={{ color: props.mode === "white" ? "black" : props.mode }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control ${props.mode}`}
          style={{ color: props.mode === "white" ? "black" : props.mode }}
          value={text}
          onChange={handleChange}
          id="myself"
          rows="10"
        ></textarea>
      </div>
      <button
        className="btn btn-secondary btn-lg mx-2 my-3"
        onClick={handleUpClick}
      >
        convert to upper case
      </button>
      <button className="btn btn-secondary btn-lg mx-2" onClick={handleLrClick}>
        convert to lower case
      </button>
      <button className="btn btn-secondary btn-lg mx-2" onClick={handleClrScr}>
        clear screen
      </button>
      <button className="btn btn-secondary btn-lg mx-2" onClick={handleRevCase}>
        reverce text
      </button>
      <button
        className="btn btn-secondary btn-lg mx-2"
        onClick={handleCopyText}
      >
        copy text
      </button>
      <button
        className="btn btn-secondary btn-lg mx-2"
        onClick={handleExtraSpace}
      >
        remove extra space
      </button>
      <div
        className="container"
        style={{ color: props.mode === "white" ? "black" : props.mode }}
      >
        <h4> {text.length} character counter</h4>
        <h4>{text.split(" ").length} word counter</h4>
        <h4>{0.008 * text.trim().split(" ").length} minute read</h4>
        <h4>preview</h4>
        <p>
          {text.length > 0
            ? text
            : "enter your text in the box than show a text to preview text"}
        </p>
      </div>
    </div>
  );
}
