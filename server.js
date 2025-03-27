const express = require("express");
const { ExpressPeerServer } = require("peer");
const http = require("http");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000; // Use dynamic port for Render

// Enable CORS for all requests
app.use(cors({ origin: "*" }));

// Create HTTP server
const server = http.createServer(app);

// Setup PeerJS Server
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/myapp",
});

app.use("/peerjs", peerServer);

// Basic Route to Test if Backend is Working
app.get("/", (req, res) => {
  res.send("PeerJS server is running...");
});

// Start the Server
server.listen(PORT, () => {
  console.log(`PeerJS server running on port ${PORT}`);
});
