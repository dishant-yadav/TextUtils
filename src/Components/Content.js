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
    let newText = text.toLowerCase();
    const arr = newText.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    newText = arr.join(" ");
    let capitalizedText = "";
    const lines = newText.split("\n");
    for (let line of lines) {
      line = line.charAt(0).toUpperCase() + line.slice(1);
      capitalizedText += line + "\n";
    }
    console.log(capitalizedText);
    setText(capitalizedText);
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

  // logic to disable the buttons when there is no text
  const handleDisabled = () => {
    if (!text.trim()) {
      return true;
    } else {
      return false;
    }
  };
  const isDisabled = handleDisabled();

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <label htmlFor="textarea" className="form-label"></label>
          <textarea
            spellCheck={false}
            value={text}
            placeholder="Type or paste your text and see the magic"
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
            isDisabled={isDisabled}
          />
          <Button
            btnColor="secondary"
            btnFunction={handleLowercase}
            btnText="Convert to Lower Case"
            isDisabled={isDisabled}
          />
          <Button
            btnColor="danger"
            btnFunction={handleCapiatlize}
            btnText="Convert to Capitalize"
            isDisabled={isDisabled}
          />
          <Button
            btnColor="warning"
            btnFunction={handleToggleCase}
            btnText="Convert to Toggle Case"
            isDisabled={isDisabled}
          />
          <Button
            btnColor="success"
            btnFunction={handleCopy}
            btnText="Copy"
            isDisabled={isDisabled}
          />
          <Button
            btnColor="dark"
            btnFunction={handleClear}
            btnText="Clear"
            isDisabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
