const http = require('http');
const express = require('express');
const socketio = require('socket.io');
var net = require('net');
const app = express();
var client = new net.Socket();
var clientSock;

const clientPath = `${__dirname}/../Client`;
console.log(`serving static from ${clientPath}`);

app.use(express.static(clientPath));

const server = http.createServer(app);

const io = socketio(server);

let online = 0
let players = {}
let lastPlayerID = 0
class newPlayer {
    constructor(id, sock) {
        this.id = id
        this.sock = sock
    }
}

io.on('connection', (sock) => {
    var clientIp = sock.request.connection.remoteAddress;
    clientSock = sock;
    
    let player = new newPlayer(lastPlayerID, sock)
    players[player.id] = player
    sock.playerID = player.id
    lastPlayerID++
    console.log(sock.playerID + " connected " + sock.handshake.time + "  ip: " + clientIp);

    sock.on("name", function(data) {
        console.log(data.name + " " + data.password)
        client.write("newUser " + (data.name).toLowerCase() + " " + data.password)
    })
    sock.on("gamewon", function(data) {
        parsedInfo = JSON.parse(data)
        client.write("gameInfo " + parsedInfo.name + " " + parsedInfo.time + " " + parsedInfo.map)
    })

    sock.on("data", function (data) { 
        for (const otherID in players) {
            if (otherID != sock.playerID) {
                let otherPlayer = players[otherID]
                otherPlayer.sock.emit('playerData', data)
              }
        }
    })

    sock.on("enteredSpace", function(data) {
        for (const otherID in players) {
            if (otherID != sock.playerID) {
                let otherPlayer = players[otherID]
                otherPlayer.sock.emit('entered')
              }
        }
    })

    sock.on("leftSpace", function(data) {
        for (const otherID in players) {
            if (otherID != sock.playerID) {
                let otherPlayer = players[otherID]
                otherPlayer.sock.emit('left')
              }
        }
    })
    // forward leaderboard data to game client
    sock.on("leaderboard", function (data) {
        client.write('leaderboard' + " " + data);
    })
    
    sock.on('disconnect', function(data) {
        console.log(sock.playerID + " disconnected");
        delete players[sock.playerID]
    })
})



console.log("Connecting")
client.connect(8080, '127.0.0.1', function() {
	console.log('Connected');
});

// recieve leaderboard data from c# server
client.on('data', function(data) {
    console.log(data)
    data = JSON.parse(data)
    data = JSON.stringify(data)
    data = JSON.parse(data)
    console.log("message received: " + data)

    if (clientSock && data.message == 1) {
        clientSock.emit("exists")
    } 
    else if (clientSock && data.message == 2) {
        clientSock.emit("doesnt")
    }
    else if (clientSock) {
        data = JSON.stringify(data)
        clientSock.emit('message', data);
    }
});

client.on('close', function() {
	console.log('Connection closed');
});

server.listen(8000)