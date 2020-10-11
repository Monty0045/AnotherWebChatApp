const express = require('express');
const http = require("http").createServer();

const app = express();
const port = 3001;

//const server = http.createServer(app);  //creates server with the http as a pathway

const Server = require("socket.io")(http);




//When user connects to server
Server.on("connection", (socket) => {
    socket.emit("joined", "You are connected (:"); //sends user the socket and the message 'you joined (:'


    socket.on('message', (data) => {
        console.log(data);
    });

});


http.listen(port, () => {
    console.log("Server is listening on localhost: " + port);
})