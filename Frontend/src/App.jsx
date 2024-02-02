import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  function getQuote() {
    axios
      .get("http://localhost:5000/", { crossdomain: true })
      .then((response) => {
        console.log(response.data);
        setText(response.data.text);
        setAuthor(response.data.author);
      });
  }

  return (
    <>
      <div>
        <button onClick={getQuote}>Generate Quote</button>
        <h1>{text}</h1>
        <h3>{"-" + author}</h3>
      </div>
    </>
  );
}

export default App;
