import First from "./Components/First"
import Second from "./Components/Second"
import Count from "./Components/Count"
import './App.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import { useState } from "react";
function App() {
  const [long_url,set_long_url]=useState("")
  const [copied,setCopied]=useState(false)
  const base_url="http://localhost:3002/"
  const [count,setCount]=useState("0")
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<First long_url={long_url} set_long_url={set_long_url} base_url={base_url} copied={copied} setCopied={setCopied}/>} />
        <Route path="/second" element={<Second long_url={long_url} set_long_url={set_long_url} base_url={base_url} copied={copied} setCopied={setCopied} count={count} setCount={setCount}/>} />
        <Route path="/count" element={<Count long_url={long_url} set_long_url={set_long_url} base_url={base_url} copied={copied} setCopied={setCopied} count={count}/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
