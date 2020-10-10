import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';


const io = require("socket.io-client");
let socket = io.connect("http://localhost:3001"); //connects to server with specific url using port 3001
socket.on("joined", (data) =>   //if socket is online with message joined (everything went correctly)
{
  console.log("received: " + data);
});

function App() {
  return (
    <div className="App">
      <Chat />
    </div>
  );
}

export default App;

