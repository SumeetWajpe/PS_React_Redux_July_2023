const socket = require("socket.io");
const http = require("http");
const fs = require("fs");
let server = http.createServer((req, res) => {
  fs.readFile("ClientPeer.html", (err, data) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
});

var io = socket(server);
io.sockets.on("connection", skt => {
  setInterval(() => {
    let dataToBeSent = new Date();
    skt.emit("custom_msg_from_server_peer", dataToBeSent);
  }, 2000);
});

server.listen(4000, () => {
  console.log("Server running @ port 4000 !");
});
