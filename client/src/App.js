import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';


const io = require("socket.io-client");
let socket = io.connect("http://localhost:3001"); //connects to server with specific url using port 3001
socket.on("joined", (data) =>   //if socket is online with message joined (everything went correctly)
{  
  socket.send("14");
  console.log("received: " + data);
});

socket.on('message', data => {
  console.log(data);
});


function testMessage()
{
  let value = document.getElementById("doesthisWork").value;
  console.log("this does happen though");
  socket.send(value);
}


function App() {
  return (
    <div className="App">
      
      <label></label>
      <textarea id='doesthisWork'></textarea>
      <button type='button' onClick={testMessage}>TestClick</button>
    </div>
  );
}

export default App;

