const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("PeerJS Video Call Server is running...");
});

// Create PeerJS server
const server = app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: "/peer",
});

app.use("/peerjs", peerServer);
