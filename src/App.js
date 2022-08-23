import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      console.log("dark mode enabled");
      document.body.style.backgroundColor = "rgba(0,0,0,1)";
      document.body.style.color = "white";
      document.getElementById("darkBtn").innerText = "Enable light mode";
      document.getElementById("textarea").style.backgroundColor =
        "rgba(0,0,0,0.5)";
      document.getElementById("textarea").style.color = "white";
      setMode("dark");
    } else {
      console.log("light mode enabled");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "#d8bf90";
      document.getElementById("darkBtn").innerText = "Enable dark mode";
      document.getElementById("textarea").style.backgroundColor = "wheat";
      document.getElementById("textarea").style.color = "black";
      setMode("light");
    }
  };
  return (
    <div className="App">
      <Header title="TextUtils" mode={mode} btnFunction={toggleMode} />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
