import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

function App() {
  return (
    <div className="App">
      <Header title="TextUtils" bgColor="white" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;