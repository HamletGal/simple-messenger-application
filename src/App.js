import {useState} from "react";
import './App.css';

function App() {
  const [input,setInput] = useState('');
  const [messages,setMessages] = useState(['hello','hi','whats up']);

  console.log(input);

  const sendMessage = (event) => {
    setMessages([...messages,input]);
    setInput('');
  }

  return (
    <div className="App">
     <h1>Hello Clever Programmers</h1>
     <input value={input} onChange={(event)=>setInput(event.target.value)} />
     <button onClick={sendMessage}>Send Messages</button>

     {
       messages.map((message) => (
         <p>{message}</p>
       ))
     }
    </div>
  );
}

export default App;
