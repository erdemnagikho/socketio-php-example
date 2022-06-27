let socket = require('socket.io')(3001),
    express = require('express'),
    http = require('http');

const fs = require('fs');

let app = express();

let httpServer = http.createServer(app);

try {
    let io = socket.listen(httpServer);
    io.sockets.on("connection", function(socket) {
        console.log('connected');
        socket.on("message", function(data) {
        });
    });
} catch (error) {
    console.log(error);
}