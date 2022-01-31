const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = 3002;

app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("Working Perfectly!");
});

app.listen(port, () => {
  console.log("Shopping cart server running on port " + port);
});