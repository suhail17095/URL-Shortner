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
  const [user_input,set_user_input]=useState("")
  const base_url="https://url-api.onrender.com/"
  const [count,setCount]=useState("0")
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<First long_url={long_url} set_long_url={set_long_url} base_url={base_url} copied={copied} setCopied={setCopied} set_user_input={set_user_input}/>} />
        <Route path="/second" element={<Second long_url={long_url} set_long_url={set_long_url} base_url={base_url} copied={copied} setCopied={setCopied} count={count} setCount={setCount} user_input={user_input}/>} />
        <Route path="/count" element={<Count long_url={long_url} set_long_url={set_long_url} base_url={base_url} copied={copied} setCopied={setCopied} count={count}/>} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
