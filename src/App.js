import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import DarkModeButton from "./Components/DarkModeButton";
import { useState } from "react";

function App() {
  // const [mode, setMode] = useState("light");
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  // };
  return (
    <div className="App">
      <Header title="TextUtils" bgColor="green"/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
