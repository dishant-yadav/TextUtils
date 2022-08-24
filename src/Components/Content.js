import React from "react";
import { useState } from "react";
import Button from "./Button";
import "./stylesheets/Content.css";

const Content = () => {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
    // console.log("Clicked Changes");
  };
  const handleUppercase = () => {
    const upperCase = text.toUpperCase();
    setText(upperCase);
    // console.log("Clicked Uppercase");
  };
  const handleLowercase = () => {
    const lowerCase = text.toLowerCase();
    setText(lowerCase);
    // console.log("Clicked lowercase");
  };
  const handleCapiatlize = () => {
    setText(text.trim());
    const words = text.split(" ");
    let capitalize = "";
    for (let word of words) {
      word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      capitalize += word + " ";
    }
    const wordsNextLine = capitalize.split("\n");
    let capitalizeNextLine = "";
    for (let word of wordsNextLine) {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizeNextLine += word + "\n";
    }
    setText(capitalizeNextLine.trim());
    // console.log("Clicked capitalize");
  };
  const handleToggleCase = () => {
    // console.log("Clicked Togglecase");
  };
  function handleCopy() {
    if (text !== "") {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Successfully copied");
        })
        .catch(() => {
          alert("Something went wrong");
        });
    } else {
      window.alert("Textbox is empty!!!");
    }
    // console.log("Clicked copy");
  }

  const handleClear = () => {
    const clear = "";
    setText(clear);
    // console.log("Clicked clear");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <label htmlFor="textarea" className="form-label"></label>
          <textarea
            spellCheck={false}
            value={text}
            placeholder="Place your text and see the magic"
            onChange={handleOnChange}
            className="form-control my-4"
            id="textarea"
            rows="15"
          ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-12 p-4 mx-2">
          <Button
            btnColor="primary"
            btnFunction={handleUppercase}
            btnText="Convert to Upper Case"
          />
          <Button
            btnColor="secondary"
            btnFunction={handleLowercase}
            btnText="Convert to Lower Case"
          />
          <Button
            btnColor="danger"
            btnFunction={handleCapiatlize}
            btnText="Convert to Capitalize"
          />
          <Button
            btnColor="warning"
            btnFunction={handleToggleCase}
            btnText="Convert to Toggle Case"
          />
          <Button btnColor="success" btnFunction={handleCopy} btnText="Copy" />
          <Button btnColor="dark" btnFunction={handleClear} btnText="Clear" />
        </div>
      </div>
    </div>
  );
};

export default Content;
