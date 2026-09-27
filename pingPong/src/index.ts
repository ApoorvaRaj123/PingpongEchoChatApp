import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

// wss.on("connection", (socket) => {

//   setInterval(() => {
//     socket.send("The messages are being sent in an interval");
//   },);

//   socket.on("message", (e) => {
//     console.log(`Message received from client is: ${e}`);
//   })

// });



// PING PONG Code

wss.on("connection", (socket) => {
    socket.on("message", (e) => {
        if(e.toString().toLowerCase() === "ping") {
            socket.send("pong");
        }
        else if(e.toString().toLowerCase() === "pong") {
            socket.send("ping");
        }
        else{
            socket.send("Invalid message received: Send either 'ping' or 'pong'");
        }
    })
})