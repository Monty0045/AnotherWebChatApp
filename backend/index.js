const express = require('express');
const http = require("http").createServer();

const app = express();
const port = 3001;

//const server = http.createServer(app);  //creates server with the http as a pathway

const Server = require("socket.io")(http);



//When user connects to server
Server.on("connection", (socket) => {
    socket.emit("joined", "You are connected (:"); //sends user the socket and the message 'you joined (:'

    let randUserName = "user" + Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

    function sendMessage(data)
    {
        Server.sockets.emit("receivedMessage", randUserName + ": " + data);
    }

    socket.on('message', (data) => {
        
        sendMessage(data.trim());

    });


});


http.listen(port, () => {
    console.log("Server is listening on localhost: " + port);
})