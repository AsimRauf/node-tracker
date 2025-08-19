const net = require("net");

// Create TCP server
const server = net.createServer(socket => {
  console.log("Tracker connected:", socket.remoteAddress);

  socket.on("data", data => {
    console.log("Raw JT808 data:", data.toString("hex")); // hex dump
  });

  socket.on("close", () => {
    console.log("Tracker disconnected");
  });
});

// Railway provides PORT in env, default 8080
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`JT808 TCP server listening on port ${PORT}`);
});
